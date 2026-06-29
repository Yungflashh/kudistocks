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

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  // Modern circular reveal animation matching the hamburger position
  const menuVariants = {
    hidden: { 
      clipPath: "circle(24px at calc(100% - 32px) 34px)",
      opacity: 0 
    },
    visible: { 
      clipPath: "circle(140% at calc(100% - 32px) 34px)",
      opacity: 1,
      transition: { type: "spring", stiffness: 75, damping: 20 }
    },
    exit: { 
      clipPath: "circle(24px at calc(100% - 32px) 34px)",
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.35 }
    }
  };

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

          {/* Desktop nav */}
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
            <button className="flex items-center gap-1.5 text-[13px] text-gray-300 hover:text-white transition-colors duration-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[15px] h-[15px]">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10" strokeLinecap="round" />
              </svg>
              EN
            </button>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(59,130,246,0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              Download now
              <span className="w-[22px] h-[22px] rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                  <path d="M8 2v8M5 7l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 13h10" strokeLinecap="round" />
                </svg>
              </span>
            </motion.button>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="text-white p-2 bg-white/[0.05] border border-white/10 rounded-xl"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Screen-Height Guarded Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-[#080c1e] flex flex-col justify-between overflow-hidden h-screen w-screen"
          >
            {/* Subtle background glow effect */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Top bar */}
            <div className="relative z-10 flex items-center justify-between px-6 h-[68px] border-b border-white/[0.05] flex-shrink-0">
              <img src="/Kudistocks SVG 1 1.png" alt="Kudistocks" className="h-6 w-auto" />
              
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 text-[12px] font-medium text-gray-300 bg-white/[0.05] border border-white/10 px-2.5 py-1 rounded-lg">
                  EN
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-gray-400">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="text-white p-2 bg-white/[0.08] border border-white/10 rounded-xl flex items-center justify-center"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Compact, non-scrollable layout area */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-4 overflow-hidden">
              <div className="grid grid-cols-1 gap-2.5 w-full max-w-md mx-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 + 0.1 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between p-3.5 bg-white/[0.02] border border-white/[0.04] rounded-xl transition-all active:bg-white/[0.07] active:border-blue-500/30"
                  >
                    <span className="text-base font-semibold text-white">
                      {link.label}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center text-gray-400">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom Actions Area */}
            <div className="relative z-10 px-6 pb-8 pt-4 border-t border-white/[0.05] flex-shrink-0">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 active:bg-blue-500 text-white py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(59,130,246,0.25)] transition-all"
              >
                Download Now
                <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
                    <path d="M8 2v8M5 7l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 13h10" strokeLinecap="round" />
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