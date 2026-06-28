#!/usr/bin/env node

const fs = require("fs");
const path = require("path");


const TARGET_DIR = process.argv[2] || ".";
const EXTENSIONS = new Set([".js", ".ts", ".jsx", ".tsx", ".mjs", ".cjs"]);
const DRY_RUN = process.argv.includes("--dry-run");


function removeComments(code) {
  let result = "";
  let i = 0;
  const len = code.length;

  while (i < len) {

    if (code[i] === '"' || code[i] === "'" || code[i] === "`") {
      const quote = code[i];
      result += code[i++];
      while (i < len && code[i] !== quote) {
        if (code[i] === "\\") {
          result += code[i++];
          if (i < len) result += code[i++];
        } else {

          if (quote === "`" && code[i] === "$" && code[i + 1] === "{") {
            let depth = 1;
            result += code[i++];
            result += code[i++];
            while (i < len && depth > 0) {
              if (code[i] === "{") depth++;
              else if (code[i] === "}") depth--;
              if (depth > 0) result += code[i];
              else result += code[i];
              i++;
            }
          } else {
            result += code[i++];
          }
        }
      }
      if (i < len) result += code[i++];
    }

    else if (
      code[i] === "/" &&
      i + 1 < len &&
      code[i + 1] !== "/" &&
      code[i + 1] !== "*" &&
      isRegexContext(result)
    ) {
      result += code[i++];
      while (i < len && code[i] !== "/") {
        if (code[i] === "\\") {
          result += code[i++];
          if (i < len) result += code[i++];
        } else if (code[i] === "[") {
          result += code[i++];
          while (i < len && code[i] !== "]") {
            if (code[i] === "\\") {
              result += code[i++];
              if (i < len) result += code[i++];
            } else {
              result += code[i++];
            }
          }
          if (i < len) result += code[i++];
        } else {
          result += code[i++];
        }
      }
      if (i < len) result += code[i++];

      while (i < len && /[gimsuy]/.test(code[i])) {
        result += code[i++];
      }
    }

    else if (code[i] === "/" && i + 1 < len && code[i + 1] === "/") {

      while (i < len && code[i] !== "\n") i++;

    }

    else if (code[i] === "/" && i + 1 < len && code[i + 1] === "*") {
      i += 2;
      while (i < len && !(code[i] === "*" && i + 1 < len && code[i + 1] === "/")) {
        i++;
      }
      if (i < len) i += 2;
    }

    else {
      result += code[i++];
    }
  }


  result = result.replace(/\n{3,}/g, "\n\n");

  result = result.replace(/[ \t]+$/gm, "");

  return result;
}

function isRegexContext(preceding) {
  const trimmed = preceding.trimEnd();
  if (trimmed.length === 0) return true;
  const last = trimmed[trimmed.length - 1];

  return "=({[;,!&|?:~^%*/+-><".includes(last) || /\breturn$/.test(trimmed) || /\btypeof$/.test(trimmed);
}


function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git" || entry.name === "dist") continue;
      files.push(...walk(full));
    } else if (EXTENSIONS.has(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}


function main() {
  const dir = path.resolve(TARGET_DIR);
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    process.exit(1);
  }

  const files = walk(dir);
  console.log(`Found ${files.length} JS/TS file(s) in ${dir}\n`);

  let totalRemoved = 0;

  for (const file of files) {
    const original = fs.readFileSync(file, "utf-8");
    const cleaned = removeComments(original);

    const origLines = original.split("\n").length;
    const cleanLines = cleaned.split("\n").length;
    const removed = origLines - cleanLines;

    if (original !== cleaned) {
      totalRemoved += removed;
      const rel = path.relative(dir, file);
      console.log(`  ${rel}  (${removed > 0 ? "-" + removed + " lines" : "cleaned"})`);
      if (!DRY_RUN) {
        fs.writeFileSync(file, cleaned, "utf-8");
      }
    }
  }

  console.log(`\n${DRY_RUN ? "[DRY RUN] " : ""}Done. ~${totalRemoved} lines removed across ${files.length} files.`);
}

main();