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
  icon: string;
  variant?: "primary" | "secondary";
}) {
  const base =
    variant === "primary"
      ? "bg-blue-500 hover:bg-blue-400 text-white"
      : "bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-200";
  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(59,130,246,0.3)" }}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors duration-300 ${base}`}
    >
      {label}
      <span className="text-lg">{icon}</span>
    </motion.button>
  );
}

function PhoneMockup() {
  return (
    <div className="w-64 md:w-72 bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl shadow-blue-900/30 overflow-hidden">
      <div className="flex justify-between items-center px-5 pt-3 pb-1 text-white text-xs">
        <span>9:41</span>
        <div className="w-20 h-5 bg-black rounded-full" />
        <div className="w-3.5 h-2.5 border border-white/60 rounded-sm">
          <div className="w-2/3 h-full bg-white/60 rounded-sm" />
        </div>
      </div>
      <div className="px-4 pt-2 pb-3">
        <p className="text-gray-400 text-xs">Welcome Back 👋</p>
        <div className="flex justify-between items-center mt-1">
          <h3 className="text-white text-sm font-semibold">MamaTola Stores</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded">
              EN
            </span>
            <div className="w-6 h-6 rounded-full bg-blue-500" />
          </div>
        </div>
      </div>
      <div className="mx-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/50">
        <p className="text-gray-400 text-xs">● Total stock</p>
        <div className="flex items-end gap-3 mt-1">
          <span className="text-white text-3xl font-bold">245</span>
          <span className="text-green-400 text-xs mb-1">▲ 12% last 30 days</span>
        </div>
        <svg viewBox="0 0 200 40" className="w-full h-8 mt-2">
          <polyline
            points="0,35 20,30 40,25 60,28 80,20 100,22 120,15 140,18 160,10 180,8 200,5"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <polyline
            points="0,35 20,30 40,25 60,28 80,20 100,22 120,15 140,18 160,10 180,8 200,5"
            fill="url(#heroChart)"
            stroke="none"
          />
          <defs>
            <linearGradient id="heroChart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-4 mt-4">
        <p className="text-white text-xs font-medium mb-2">Quick Actions</p>
        <div className="flex justify-between">
          {[
            { icon: "🏪", label: "Add product", bg: "bg-blue-500/20" },
            { icon: "📦", label: "Restock", bg: "bg-green-500/20" },
            { icon: "💰", label: "Loan", bg: "bg-purple-500/20" },
            { icon: "📝", label: "New order", bg: "bg-orange-500/20" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center text-lg`}
              >
                {item.icon}
              </div>
              <span className="text-gray-400 text-[10px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 mt-3">
        <p className="text-white text-lg font-bold">₦458,978.76</p>
      </div>
      <div className="mx-4 mt-3 mb-4 bg-blue-600 rounded-xl p-3">
        <p className="text-white text-xs font-semibold">
          🏆 Top 100 Monthly Earners
        </p>
        <p className="text-blue-200 text-[10px]">
          Top performing units ranked by revenue
        </p>
      </div>
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
    <section id="home" className="relative min-h-screen">
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
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight max-w-5xl">
            <span className="shimmer-text">Smarter Inventory,</span>
            <br />
            <span className="shimmer-text">Smarter Finance</span>
          </h1>
        </FadeUp>

        <FadeUp delay={800}>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Kudistocks helps businesses track inventory, record sales and
            purchases, and gain real-time insights, with flexible language
            options to suit your local needs.
          </p>
        </FadeUp>

        <FadeUp delay={1100} className="flex flex-wrap gap-4 mt-10 justify-center">
          <DownloadButton label="Download on iOS" icon="🍎" />
          <DownloadButton label="Download on Android" icon="🤖" variant="secondary" />
        </FadeUp>

        <FadeUp delay={1400} className="relative mt-16 md:mt-20 w-full max-w-5xl h-[500px] md:h-[600px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 z-30">
            <PhoneMockup />
          </div>

          <FloatingScreen className="w-44 md:w-52 h-40 left-0 md:left-8 top-16 z-20 p-3" delay={1800}>
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

          <FloatingScreen className="w-44 md:w-52 h-36 left-2 md:left-14 top-64 z-20 p-3" delay={2100}>
            <p className="text-[10px] text-gray-400">Hello, MamaTola stores 👋</p>
            <p className="text-white text-xs font-semibold mt-1">How can I assist you today?</p>
            <p className="text-[9px] text-gray-500 mt-2">Hi there! I&apos;m your smart financial assistant.</p>
          </FloatingScreen>

          <FloatingScreen className="w-44 md:w-52 h-36 right-0 md:right-8 top-12 z-20 p-3" delay={1900}>
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

          <FloatingScreen className="w-44 md:w-52 h-36 right-2 md:right-14 top-56 z-20 p-3" delay={2200}>
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
