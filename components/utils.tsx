"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

// ─── Scroll detection ───
export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

// ─── Fade up on scroll ───
export function ScrollFadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView(0.08);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: delay / 1000, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Fade up on mount ───
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Glow orb ───
export function GlowOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
      style={{
        animation: `float ${8 + delay}s ease-in-out infinite alternate`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

// ─── Animated counter ───
export function AnimatedCounter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = end / 120;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Inline SVG icons (replace emojis) ───
const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icon = {
  bolt: (c = "w-3.5 h-3.5") => (
    <svg viewBox="0 0 24 24" {...s} className={c}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  book: (c = "w-3.5 h-3.5") => (
    <svg viewBox="0 0 24 24" {...s} className={c}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  chat: (c = "w-3.5 h-3.5") => (
    <svg viewBox="0 0 24 24" {...s} className={c}>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  ),
  help: (c = "w-3.5 h-3.5") => (
    <svg viewBox="0 0 24 24" {...s} className={c}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  ),
  rocket: (c = "w-3.5 h-3.5") => (
    <svg viewBox="0 0 24 24" {...s} className={c}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  bot: (c = "w-3.5 h-3.5") => (
    <svg viewBox="0 0 24 24" {...s} className={c}>
      <rect x="4" y="8" width="16" height="11" rx="2" />
      <path d="M12 8V4M8 4h8" />
      <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  wave: (c = "w-3.5 h-3.5") => (
    <svg viewBox="0 0 24 24" {...s} className={c}>
      <path d="M18 11V6a2 2 0 00-4 0M14 10V4a2 2 0 00-4 0v2" />
      <path d="M10 10.5V6a2 2 0 00-4 0v8a8 8 0 0016 0v-3a2 2 0 00-4 0" />
    </svg>
  ),
  star: (c = "w-3.5 h-3.5") => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  quote: (c = "w-3.5 h-3.5") => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
      <path d="M7.5 8H5a3 3 0 00-3 3v1a3 3 0 003 3h1.5v1.5A1.5 1.5 0 015 19H4.5a1 1 0 100 2H5a3.5 3.5 0 003.5-3.5V11A3 3 0 007.5 8zm11 0H16a3 3 0 00-3 3v1a3 3 0 003 3h1.5v1.5A1.5 1.5 0 0116 19h-.5a1 1 0 100 2h.5a3.5 3.5 0 003.5-3.5V11a3 3 0 00-3-3z" />
    </svg>
  ),
};

// ─── Pill badge ───
export function Badge({
  children,
  icon,
  dark = false,
}: {
  children: ReactNode;
  icon?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
        dark
          ? "border border-white/10 bg-white/5 text-blue-200"
          : "bg-blue-50 border border-blue-100 text-blue-600"
      }`}
    >
      {icon && <span className="text-blue-500">{icon}</span>}
      {children}
    </div>
  );
}

// ─── Image placeholder ───
export function Placeholder({
  label = "Image",
  className = "",
  variant = "light",
}: {
  label?: string;
  className?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border ${
        isDark
          ? "border-white/10 bg-white/[0.04] text-blue-200/60"
          : "border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-400/70"
      } ${className}`}
    >
      {/* diagonal hatch pattern */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: isDark
            ? "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 12px)"
            : "repeating-linear-gradient(45deg, rgba(59,130,246,0.06) 0 1px, transparent 1px 12px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-center px-4">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-7 h-7"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs font-medium tracking-wide">{label}</span>
      </div>
    </div>
  );
}
