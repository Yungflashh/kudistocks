"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080c1e]/85 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 h-[68px]">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/Kudistocks SVG 1 1.png"
              alt="Kudistocks"
              className="h-6 sm:h-7 md:h-8 w-auto"
            />
          </a>

          {/* Desktop nav — centered absolutely */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13.5px] text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-blue-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-5">
            {/* Language */}
            <button className="flex items-center gap-1.5 text-[13px] text-gray-300 hover:text-white transition-colors duration-200">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="w-[15px] h-[15px]"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10"
                  strokeLinecap="round"
                />
              </svg>
              EN
            </button>

            {/* Download button */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(59,130,246,0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              Download now
              <span className="w-[22px] h-[22px] rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3 h-3"
                >
                  <path d="M8 2v8M5 7l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 13h10" strokeLinecap="round" />
                </svg>
              </span>
            </motion.button>
          </div>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-4">
            <button className="flex items-center gap-1 text-[13px] text-gray-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10" strokeLinecap="round" />
              </svg>
              EN
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="text-white p-1"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#080c1e] flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 h-[68px] border-b border-white/[0.06]">
              <img src="/Kudistocks SVG 1 1.png" alt="Kudistocks" className="h-6 sm:h-7 md:h-8 w-auto" />
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-[13px] text-gray-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10" strokeLinecap="round" />
                  </svg>
                  EN
                </button>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="text-white p-1"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center gap-9">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.28 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-white text-2xl font-semibold hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="px-6 pb-12 flex justify-center">
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full text-base font-medium transition-colors duration-200"
              >
                Download now
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                    <path d="M8 2v8M5 7l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 13h10" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
