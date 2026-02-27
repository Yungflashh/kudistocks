"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["Home", "About us", "Features", "Testimonial", "FAQs"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
      <div className="flex items-center gap-2">
        <div>
          <img src="/images/logo.png" alt="Kudistocks Logo" className="w-10 h-10" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">Kudistocks.</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s/g, "")}`}
            className="text-sm text-gray-300 hover:text-white transition-colors relative group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-1 text-sm text-gray-300">
          <span className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center text-xs">🌐</span>
          EN
        </button>

        <button className="hidden md:inline-flex bg-blue-500 hover:bg-blue-400 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 items-center gap-2">
          Download now
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button className="md:hidden text-white flex items-center gap-3" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className="hidden sm:inline-flex items-center gap-1">
            <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">🌐</span>
            <span className="text-sm">EN</span>
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#07122b] flex flex-col"
          >
            <div className="px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
                <span className="text-white font-bold">Kudistocks.</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 text-sm text-gray-200">
                  <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">🌐</span>
                  EN
                </button>
                <button className="text-white" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                    className="text-white text-xl font-semibold tracking-wide block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 flex items-center justify-center">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-base font-medium">Download now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
