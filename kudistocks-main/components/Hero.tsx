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
      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
      : "bg-white text-slate-800";
  const padding = variant === "primary" ? "px-8 py-3.5" : "px-6 py-3";
  const textClass = variant === "primary" ? "text-sm font-medium" : "text-sm font-medium";

  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(59,130,246,0.25)" }}
      className={`flex items-center gap-3 rounded-full transition-all duration-300 ${base} ${padding} ${textClass}`}
    >
      <span className="flex items-center gap-2">
        <span className="sr-only">{label}</span>
        <span className="text-sm">{label}</span>
      </span>
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10">
        {icon}
      </span>
    </motion.button>
  );
}

function PhoneMockup() {
  return (
    <div className="w-64 sm:w-72 md:w-96 lg:w-[420px]">
      <img
        src="/images/Phone.png"
        alt="KudiStocks mobile"
        className="w-full h-auto rounded-3xl shadow-2xl object-contain mt-0 md:-mt-12"
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
            <span>⚡</span>
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

        <FadeUp delay={1100} className="flex flex-wrap gap-4 mt-10 justify-center">
          <DownloadButton
            label="Download on iOS"
            icon={<img src="https://img.icons8.com/?size=100&id=30659&format=png&color=ffffff" className="w-8 h-8" />}
          />
          <DownloadButton
            label="Download on Android"
            icon={<img src="https://img.icons8.com/?size=100&id=48137&format=png&color=000000" className="w-8 h-8" />}
            variant="secondary"
          />
        </FadeUp>

        <FadeUp delay={1400} className="relative mt-16 md:mt-20 w-full max-w-5xl h-[720px] md:h-[600px]">
          <div className="absolute left-1/2 top-48 md:top-12 -translate-x-1/2 z-30">
            <PhoneMockup />
          </div>

          <FloatingScreen className="hidden sm:block w-44 md:w-52 h-40 left-0 md:left-8 top-16 z-20 p-3" delay={1800}>
            <p className="text-[10px] text-gray-400 font-medium">Stock flow</p>
            <div className="flex gap-1 mt-2">
              {[40, 55, 35, 60, 45, 70, 50].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end h-16">
                  <div className="rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "#3b82f6" : "rgba(59,130,246,0.2)" }} />
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-[9px] text-blue-400">● Instock</span>
              <span className="text-[9px] text-green-400">● Soldout</span>
            </div>
          </FloatingScreen>

          <FloatingScreen className="hidden sm:block w-44 md:w-52 h-36 left-2 md:left-14 top-64 z-20 p-3" delay={2100}>
            <p className="text-[10px] text-gray-400">Hello, MamaTola stores 👋</p>
            <p className="text-white text-xs font-semibold mt-1">How can I assist you today?</p>
            <p className="text-[9px] text-gray-500 mt-2">Hi there! I&apos;m your smart financial assistant.</p>
          </FloatingScreen>

          <FloatingScreen className="hidden sm:block w-44 md:w-52 h-36 right-0 md:right-8 top-12 z-20 p-3" delay={1900}>
            <div className="flex justify-between items-center">
              <p className="text-[10px] text-gray-400">Earnings</p>
              <p className="text-[9px] text-green-400">+12.4%</p>
            </div>
            <svg viewBox="0 0 200 60" className="w-full h-12 mt-1">
              <polyline points="0,50 30,45 60,40 90,35 120,25 150,20 180,15 200,5" fill="none" stroke="#22c55e" strokeWidth="2" />
              <polyline points="0,50 30,48 60,45 90,42 120,38 150,35 180,30 200,25" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2" />
            </svg>
            <div className="flex gap-3 mt-1">
              <span className="text-[9px] text-green-400">● 7 days</span>
              <span className="text-[9px] text-red-400">● 14 days</span>
            </div>
          </FloatingScreen>

          <FloatingScreen className="hidden sm:block w-44 md:w-52 h-36 right-2 md:right-14 top-56 z-20 p-3" delay={2200}>
            <p className="text-[10px] text-gray-400 font-medium">Order summary</p>
            <div className="mt-2 space-y-1.5">
              {[
                { l: "Pending", v: "12", c: "bg-yellow-400" },
                { l: "Delivered", v: "89", c: "bg-green-400" },
                { l: "Returned", v: "3", c: "bg-red-400" },
              ].map((it, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${it.c}`} />
                  <span className="text-[10px] text-gray-400 flex-1">{it.l}</span>
                  <span className="text-[10px] text-white font-medium">{it.v}</span>
                </div>
              ))}
            </div>
          </FloatingScreen>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e27] to-transparent z-40" />
        </FadeUp>
      </div>
    </section>
  );
}
