import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        kudi: {
          dark: "#0a0e27",
          blue: "#2e3fc7",
          accent: "#3b82f6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
