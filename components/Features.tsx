"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ScrollFadeUp, useInView, Badge, Icon } from "./utils";

function FeatureCard({
  title,
  description,
  children,
  delay = 0,
}: {
  title: string;
  description: string;
  children: ReactNode;
  delay?: number;
}) {
  const [ref, inView] = useInView(0.08);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: delay / 1000 }}
      className="relative bg-[#f6f7f9] rounded-[2rem] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
    >
      <div className="p-6 sm:p-8 pb-0 z-10">
        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
          {description}
        </p>
      </div>
      <div className="mt-6 flex-1 flex items-end justify-center min-h-[220px] md:min-h-[280px] relative">
        {children}
      </div>
    </motion.div>
  );
}

// ─── Responsive Order Management Status Pills ───
// Using percentage-based widths and margins prevents mobile overflow
const ORDER_STATUSES = [
  { label: "Pending", color: "bg-[#9a8b1e]", width: "w-[80%] sm:w-[70%]", indent: "ml-[15%]", rot: -1 },
  { label: "Confirmed", color: "bg-green-500", width: "w-[85%] sm:w-[75%]", indent: "ml-[4%]", rot: 1.5 },
  { label: "In-Transit", color: "bg-orange-500", width: "w-[75%] sm:w-[65%]", indent: "ml-[20%]", rot: -1.5 },
  { label: "Delivered", color: "bg-blue-500", width: "w-[85%] sm:w-[72%]", indent: "ml-[8%]", rot: 1 },
];

function OrderManagementVisual() {
  return (
    <div className="w-full px-4 sm:px-6 pb-8 sm:pb-10 space-y-3 sm:space-y-4">
      {ORDER_STATUSES.map((s) => (
        <div
          key={s.label}
          className={`bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] py-3 pl-3 pr-4 flex items-center gap-3 ${s.width} ${s.indent} transition-transform duration-300 group-hover:scale-[1.02]`}
          style={{ transform: `rotate(${s.rot}deg)` }}
        >
          <span className={`w-6 h-6 rounded-full ${s.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-3 h-3">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-gray-800">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Responsive Multi-Store List + Phone ───
// Switched indents to percentages so lists never clip off-screen
const STORES = [
  { name: "MamaTola Store", cat: "Retail / Mini - Mart", img: "https://randomuser.me/api/portraits/women/68.jpg", indent: "ml-[20%]" },
  { name: "Olu Electronics", cat: "Electronics", img: "https://randomuser.me/api/portraits/men/75.jpg", indent: "ml-[10%]" },
  { name: "Iya Elubo", cat: "Grocery / Foodstuffs", img: "https://randomuser.me/api/portraits/women/65.jpg", indent: "ml-[2%]" },
  { name: "Aunty Kemi Store", cat: "Retail", img: "https://randomuser.me/api/portraits/women/12.jpg", indent: "ml-[0%]" },
  { name: "Chuks Foodmart", cat: "Pharmacy", img: "https://randomuser.me/api/portraits/men/40.jpg", indent: "ml-[15%]" },
];

function MultiStoreVisual() {
  return (
    <div className="relative w-full px-4 sm:px-6 pb-8 pt-2 flex items-center gap-2 sm:gap-4 justify-between">
      <div className="w-[55%] sm:w-[60%] flex flex-col space-y-2 sm:space-y-3 z-10">
        {STORES.map((s) => (
          <div
            key={s.name}
            className={`bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.06)] py-1.5 sm:py-2 pl-1.5 sm:pl-2 pr-3 sm:pr-5 inline-flex items-center gap-2 sm:gap-2.5 ${s.indent} transition-transform duration-300 group-hover:-translate-y-0.5`}
          >
            <img
              src={s.img}
              alt={s.name}
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0 overflow-hidden">
              <p className="text-[11px] sm:text-xs font-bold text-gray-800 leading-tight truncate">{s.name}</p>
              <p className="text-[9px] sm:text-[10px] text-gray-400 leading-tight truncate">{s.cat}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dark phone mockup */}
      <div className="w-[35%] sm:w-36 flex-shrink-0 flex justify-end">
        <div className="aspect-[9/19] w-full max-w-[140px] rounded-[1.5rem] sm:rounded-[1.8rem] bg-gradient-to-b from-[#1b2c70] to-[#0e1a4a] border-[4px] sm:border-[5px] border-[#0c1428] shadow-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-2 w-[30%] h-1 bg-[#0c1428] rounded-full"></div>
          <img src="/Kudistocks SVG 1 1.png" alt="" className="w-10 sm:w-14 opacity-90" />
        </div>
      </div>
    </div>
  );
}

// ─── Multi-Language Globe ───
const LANG_PINS = [
  { img: "https://randomuser.me/api/portraits/women/44.jpg", left: "8%", top: "54%" },
  { img: "https://randomuser.me/api/portraits/men/32.jpg", left: "14%", top: "34%" },
  { img: "https://randomuser.me/api/portraits/women/68.jpg", left: "26%", top: "20%" },
  { img: "https://randomuser.me/api/portraits/men/15.jpg", left: "40%", top: "11%" },
  { img: "https://randomuser.me/api/portraits/women/90.jpg", left: "54%", top: "7%" },
  { img: "https://randomuser.me/api/portraits/men/64.jpg", left: "67%", top: "10%" },
  { img: "https://randomuser.me/api/portraits/women/12.jpg", left: "79%", top: "19%" },
  { img: "https://randomuser.me/api/portraits/men/22.jpg", left: "86%", top: "33%" },
  { img: "https://randomuser.me/api/portraits/women/33.jpg", left: "90%", top: "53%" },
];

function LocationPin({ img }: { img: string }) {
  return (
    <div className="relative group-hover:scale-110 transition-transform duration-300">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white p-[2px] sm:p-[3px] shadow-lg">
        <img src={img} alt="" className="w-full h-full rounded-full object-cover" />
      </div>
      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rotate-45 shadow-md" />
    </div>
  );
}

function LanguageGlobeVisual() {
  return (
    <div className="relative w-full h-[240px] sm:h-[300px] md:h-[340px] overflow-hidden rounded-b-[2rem]">
      <img
        src="/solutions/360852937_11444544 1.png"
        alt="Globe"
        className="absolute bottom-[-10%] sm:bottom-[-14%] left-1/2 -translate-x-1/2 w-[120%] sm:w-[112%] max-w-none transition-transform duration-700 group-hover:scale-105"
      />
      {LANG_PINS.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
          className="absolute"
          style={{ left: p.left, top: p.top }}
        >
          <LocationPin img={p.img} />
        </motion.div>
      ))}
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-white text-gray-900 py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <ScrollFadeUp>
            <Badge icon={Icon.bolt()}>Our features: Smart solution for your business</Badge>
          </ScrollFadeUp>
          <ScrollFadeUp delay={100}>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight max-w-3xl mx-auto">
              Powerful Solutions Your Business Needs
            </h2>
          </ScrollFadeUp>
          <ScrollFadeUp delay={200}>
            <p className="mt-5 text-gray-500 text-base md:text-lg max-w-2xl mx-auto px-4">
              Kudistocks empowers SMEs to manage inventory, track orders, gain
              real-time AI-driven insights, all in your preferred local language.
            </p>
          </ScrollFadeUp>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          <FeatureCard
            title="AI-Powered Insights"
            description="Make smarter decisions with predictive sales forecasting, expense optimization tips, and supplier performance advice tailored to your business."
            delay={0}
          >
            <img
              src="/solutions/Ai chat (1).png"
              alt="AI chat assistant"
              className="w-[85%] sm:w-[72%] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:-translate-y-2"
            />
          </FeatureCard>

          <FeatureCard
            title="Inventory Management"
            description="Manage your stock with confidence, track inventory in real-time, receive low-stock alerts, and make informed restocking decisions."
            delay={150}
          >
            <div className="relative w-full h-[240px] sm:h-[280px]">
              <img
                src="/solutions/Mockup (2).png"
                alt="Inventory analytics"
                className="absolute right-4 sm:right-6 bottom-0 w-[45%] sm:w-[42%] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:-translate-y-2"
              />
              <img
                src="/solutions/Highlight.png"
                alt="Product list"
                className="absolute left-2 sm:left-4 bottom-12 sm:bottom-20 w-[65%] sm:w-[62%] drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
              />
            </div>
          </FeatureCard>

          <FeatureCard
            title="Multi-Language Support"
            description="KudiStocks offers multi-language support, helping businesses work comfortably in the language they understand best for a smoother experience."
            delay={0}
          >
            <LanguageGlobeVisual />
          </FeatureCard>

          <FeatureCard
            title="Order Management"
            description="Create and track purchase orders with ease. Record orders, monitor order status, and keep your inventory and purchases organized in one place."
            delay={150}
          >
            <OrderManagementVisual />
          </FeatureCard>

          <FeatureCard
            title="Financial Management"
            description="Turn daily transactions into clear financial insights. Stay organized with accurate records and real-time cash flow visibility."
            delay={0}
          >
            <img
              src="/solutions/Mockup (1).png"
              alt="Financial wallet"
              className="w-[75%] sm:w-[60%] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:-translate-y-2"
            />
          </FeatureCard>

          <FeatureCard
            title="Multi-Store Support"
            description="Manage multiple stores easily under one account while monitoring each store's performance independently without switching apps."
            delay={150}
          >
            <MultiStoreVisual />
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}