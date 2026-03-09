"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp, GlowOrb } from "./utils";
import Navbar from "./Navbar";

function DownloadButton({
  label,
  icon,
  variant = "primary",
}: {
  label: string;
  icon: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    variant === "primary"
      ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg hover:shadow-blue-500/25"
      : "bg-white text-slate-800 shadow-sm border border-white/10";
  const padding = variant === "primary" ? "px-5 py-2.5" : "px-6 py-3";
  const textClass = variant === "primary" ? "text-sm font-medium" : "text-sm font-medium";

  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(59,130,246,0.25)" }}
      className={`flex items-center gap-2 rounded-full transition-all duration-300 ${base} ${padding} ${textClass}`}
    >
      <span className="flex items-center justify-center w-5 h-5">
        {icon}
      </span>
      <span>{label}</span>
    </motion.button>
  );
}

function PhoneMockup() {
  return (
    <div className="w-64 sm:w-72 md:w-80 lg:w-96">
      <img
        src="/images/Phone.png"
        alt="KudiStocks mobile"
        className="w-full h-auto rounded-3xl shadow-2xl object-contain"
      />
    </div>
  );
}

function FloatingScreen({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: delay / 1000, ease: "easeOut" }}
      className={`absolute bg-gray-900/90 backdrop-blur border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-b from-[#041028] via-[#07173a] to-[#0a0e27]"
    >
      <div className="absolute inset-0 grid-bg" />
      <GlowOrb className="w-96 h-96 bg-blue-600 top-0 left-1/4" delay={0} />
      <GlowOrb className="w-80 h-80 bg-indigo-500 top-1/3 right-1/4" delay={2} />
      <GlowOrb className="w-64 h-64 bg-blue-400 bottom-1/4 left-1/3" delay={4} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/50 to-[#0a0e27]" />

      <Navbar />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-12 md:pt-20">
        <FadeUp delay={200}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-blue-200">
            <span>🔧</span>
            <span>New: Smart AI Insights to manage inventory and sell better</span>
          </div>
        </FadeUp>

        <FadeUp delay={500}>
          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-extrabold leading-[1.02] tracking-tight max-w-5xl">
            <span className="shimmer-text">Smarter Inventory,</span>
            <br />
            <span className="shimmer-text">Smarter Finance</span>
          </h1>
        </FadeUp>

        <FadeUp delay={800}>
          <p className="mt-6 text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Kudistocks helps businesses track inventory, record sales and
            purchases, and gain real-time insights, with flexible language
            options to suit your local needs.
          </p>
        </FadeUp>

        <FadeUp delay={1100} className="flex flex-wrap gap-3 mt-10 justify-center">
          <DownloadButton
            label="Download on iOS"
            icon={<img src="https://img.icons8.com/?size=100&id=30659&format=png&color=ffffff" className="w-6 h-6" />}
          />
          <DownloadButton
            label="Download on Android"
            icon={<img src="https://img.icons8.com/?size=100&id=48137&format=png&color=000000" className="w-6 h-6" />}
            variant="secondary"
          />
        </FadeUp>

        <FadeUp delay={1400} className="relative mt-16 md:mt-20 w-full max-w-5xl h-[300px] md:h-[380px]">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-30">
            <PhoneMockup />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0a0e27] to-transparent z-40" />
        </FadeUp>
      </div>
    </section>
  );
}
