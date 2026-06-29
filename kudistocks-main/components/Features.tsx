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
      className="relative bg-[#f6f7f9] rounded-[2rem] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] group"
    >
      <div className="p-6 sm:p-8 md:p-10 pb-0 z-10">
        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
          {description}
        </p>
      </div>
      <div className="mt-6 flex-1 flex items-end justify-center min-h-[240px] sm:min-h-[280px] md:min-h-[320px] relative">
        {children}
      </div>
    </motion.div>
  );
}

// ─── Responsive Order Management Status Pills ───
const ORDER_STATUSES = [
  { label: "Pending", color: "bg-[#9a8b1e]", width: "w-[80%] sm:w-[70%]", indent: "ml-[15%]", rot: -1 },
  { label: "Confirmed", color: "bg-green-500", width: "w-[85%] sm:w-[75%]", indent: "ml-[4%]", rot: 1.5 },
  { label: "In-Transit", color: "bg-orange-500", width: "w-[75%] sm:w-[65%]", indent: "ml-[20%]", rot: -1.5 },
  { label: "Delivered", color: "bg-blue-500", width: "w-[85%] sm:w-[72%]", indent: "ml-[8%]", rot: 1 },
];

function OrderManagementVisual() {
  return (
    <div className="w-full px-4 sm:px-8 pb-8 sm:pb-10 space-y-3 sm:space-y-4">
      {ORDER_STATUSES.map((s) => (
        <div
          key={s.label}
          className={`bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.04)] py-3 pl-3 pr-4 flex items-center gap-3 ${s.width} ${s.indent} transition-transform duration-300 group-hover:scale-[1.02]`}
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
const STORES = [
  { name: "MamaTola Store", cat: "Retail / Mini - Mart", img: "https://randomuser.me/api/portraits/women/68.jpg", indent: "ml-[15%] sm:ml-[20%]" },
  { name: "Olu Electronics", cat: "Electronics", img: "https://randomuser.me/api/portraits/men/75.jpg", indent: "ml-[8%] sm:ml-[10%]" },
  { name: "Iya Elubo", cat: "Grocery / Foodstuffs", img: "https://randomuser.me/api/portraits/women/65.jpg", indent: "ml-[2%]" },
  { name: "Aunty Kemi Store", cat: "Retail", img: "https://randomuser.me/api/portraits/women/12.jpg", indent: "ml-[0%]" },
  { name: "Chuks Foodmart", cat: "Pharmacy", img: "https://randomuser.me/api/portraits/men/40.jpg", indent: "ml-[10%] sm:ml-[15%]" },
];

function MultiStoreVisual() {
  return (
    <div className="relative w-full px-4 sm:px-8 pb-8 pt-2 flex items-center gap-2 sm:gap-4 justify-between">
      <div className="w-[58%] sm:w-[60%] flex flex-col space-y-2.5 sm:space-y-3 z-10">
        {STORES.map((s) => (
          <div
            key={s.name}
            className={`bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.04)] py-1.5 sm:py-2 pl-1.5 sm:pl-2 pr-3 sm:pr-5 inline-flex items-center gap-2 sm:gap-2.5 ${s.indent} transition-transform duration-300 group-hover:-translate-y-0.5`}
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
      
      <div className="w-[35%] sm:w-36 flex-shrink-0 flex justify-end">
        <div className="aspect-[9/19] w-full max-w-[140px] rounded-[1.5rem] sm:rounded-[1.8rem] bg-gradient-to-b from-[#1b2c70] to-[#0e1a4a] border-[4px] sm:border-[5px] border-[#0c1428] shadow-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-2 w-[30%] h-1 bg-[#0c1428] rounded-full"></div>
          <img src="/Kudistocks SVG 1 1.png" alt="" className="w-10 sm:w-14 opacity-90" />
        </div>
      </div>
    </div>
  );
}

// ─── Map Pins Distributed Organically (Matches image_bd79f9.png) ───
const LANG_PINS = [
  { img: "https://randomuser.me/api/portraits/women/44.jpg", left: "12%", top: "70%", color: "bg-purple-500", dotColor: "#8B5CF6" },
  { img: "https://randomuser.me/api/portraits/men/32.jpg", left: "18%", top: "52%", color: "bg-amber-400", dotColor: "#F59E0B" },
  { img: "https://randomuser.me/api/portraits/women/68.jpg", left: "22%", top: "62%", color: "bg-emerald-500", dotColor: "#10B981" },
  { img: "https://randomuser.me/api/portraits/men/15.jpg", left: "34%", top: "35%", color: "bg-indigo-600", dotColor: "#4F46E5" },
  { img: "https://randomuser.me/api/portraits/women/90.jpg", left: "46%", top: "36%", color: "bg-orange-500", dotColor: "#F97316" },
  { img: "https://randomuser.me/api/portraits/men/22.jpg", left: "58%", top: "45%", color: "bg-emerald-500", dotColor: "#10B981" },
  { img: "https://randomuser.me/api/portraits/women/33.jpg", left: "62%", top: "28%", color: "bg-blue-500", dotColor: "#3B82F6" },
  { img: "https://randomuser.me/api/portraits/men/64.jpg", left: "68%", top: "54%", color: "bg-amber-500", dotColor: "#F59E0B" },
  { img: "https://randomuser.me/api/portraits/women/12.jpg", left: "73%", top: "40%", color: "bg-purple-500", dotColor: "#8B5CF6" },
  { img: "https://randomuser.me/api/portraits/men/75.jpg", left: "74%", top: "68%", color: "bg-indigo-500", dotColor: "#6366F1" },
  { img: "https://randomuser.me/api/portraits/women/27.jpg", left: "84%", top: "58%", color: "bg-emerald-500", dotColor: "#10B981" },
  { img: "https://randomuser.me/api/portraits/men/43.jpg", left: "82%", top: "76%", color: "bg-blue-600", dotColor: "#2563EB" },
];

function LocationPin({ img, color, dotColor, delay }: { img: string; color: string; dotColor: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay }}
      className="absolute group/pin select-none pointer-events-auto"
    >
      {/* Shift pivot point to the very tip of the map pin pointer */}
      <div className="relative flex flex-col items-center -translate-x-1/2 -translate-y-[88%]">
        
        {/* Radar Ping Pulse */}
        <span className="absolute inset-0 rounded-full bg-white/40 animate-ping pointer-events-none scale-75 z-0" />
        
        {/* Styled Colored Ring & Headshot Container */}
        <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full ${color} p-[2px] sm:p-[2.5px] shadow-[0_6px_16px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover/pin:scale-110 group-hover/pin:shadow-[0_8px_24px_rgba(0,0,0,0.25)] z-10`}>
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Perfected Downward Map Vector Pointer Tail */}
        <div className="-mt-[3px] sm:-mt-[4px] z-0 flex flex-col items-center">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="drop-shadow-[0_3px_5px_rgba(0,0,0,0.15)]">
            <path d="M6 14L1 3H11L6 14Z" fill="white" />
            <circle cx="6" cy="4" r="1.5" fill={dotColor} />
          </svg>
        </div>
        
      </div>
    </motion.div>
  );
}

function LanguageGlobeVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto px-4 sm:px-6 pb-2 overflow-visible rounded-b-[2rem]">
      {/* Locked Aspect Ratio Layer protects coordinate plotting layout accuracy across screens */}
      <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] overflow-visible">
        
        {/* Globe Base */}
        <img
          src="/solutions/360852937_11444544 1.png"
          alt="Globe Map Display"
          className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[115%] max-w-none transition-transform duration-700 group-hover:scale-[1.02]"
        />
        
        {/* Interactive Responsive Scatter Coordinates Mapping Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
          {LANG_PINS.map((p, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: p.left, top: p.top }}
            >
              <LocationPin 
                img={p.img} 
                color={p.color} 
                dotColor={p.dotColor}
                delay={0.05 + i * 0.03} 
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-white text-gray-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20"
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
              className="w-[85%] sm:w-[72%] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:-translate-y-2"
            />
          </FeatureCard>

          <FeatureCard
            title="Inventory Management"
            description="Manage your stock with confidence, track inventory in real-time, receive low-stock alerts, and make informed restocking decisions."
            delay={150}
          >
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] overflow-hidden px-4">
              <img
                src="/solutions/Mockup (2).png"
                alt="Inventory analytics"
                className="absolute right-4 sm:right-10 bottom-0 w-[42%] sm:w-[38%] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:-translate-y-2 z-10"
              />
              <img
                src="/solutions/Highlight.png"
                alt="Product list"
                className="absolute left-2 sm:left-6 bottom-6 sm:bottom-10 w-[64%] sm:w-[58%] drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02] z-20"
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
              className="w-[75%] sm:w-[60%] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:-translate-y-2"
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