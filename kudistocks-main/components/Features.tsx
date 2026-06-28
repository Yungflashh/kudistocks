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
      className="relative bg-[#f6f7f9] rounded-3xl overflow-hidden flex flex-col"
    >
      <div className="p-6 md:p-8 pb-0">
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2.5">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
          {description}
        </p>
      </div>
      <div className="mt-6 flex-1 flex items-end justify-center min-h-[260px]">
        {children}
      </div>
    </motion.div>
  );
}

// ─── Rebuilt: Order Management status pills ───
const ORDER_STATUSES = [
  { label: "Pending", color: "bg-[#9a8b1e]", offset: "ml-16 w-[64%]", rot: -1 },
  { label: "Confirmed", color: "bg-green-500", offset: "ml-4 w-[68%]", rot: 1.5 },
  { label: "In-Transit", color: "bg-orange-500", offset: "ml-20 w-[60%]", rot: -1.5 },
  { label: "Delivered", color: "bg-blue-500", offset: "ml-2 w-[66%]", rot: 1 },
];

function OrderManagementVisual() {
  return (
    <div className="w-full px-6 pb-10 space-y-4">
      {ORDER_STATUSES.map((s) => (
        <div
          key={s.label}
          className={`bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.04)] py-3 pl-3 pr-4 flex items-center gap-2.5 ${s.offset}`}
          style={{ transform: `rotate(${s.rot}deg)` }}
        >
          <span className={`w-5 h-5 rounded-full ${s.color} flex items-center justify-center flex-shrink-0`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-2.5 h-2.5">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-gray-800">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Rebuilt: Multi-Store list + dark phone ───
const STORES = [
  { name: "MamaTola Store", cat: "Retail / Mini - Mart", img: "https://randomuser.me/api/portraits/women/68.jpg", indent: "ml-20" },
  { name: "Olu Electronics", cat: "Electronics", img: "https://randomuser.me/api/portraits/men/75.jpg", indent: "ml-10" },
  { name: "Iya Elubo Store", cat: "Grocery / Foodstuffs", img: "https://randomuser.me/api/portraits/women/65.jpg", indent: "ml-2" },
  { name: "Aunty Kemi Store", cat: "Retail / Mini - Mart", img: "https://randomuser.me/api/portraits/women/12.jpg", indent: "ml-0" },
  { name: "Chuks Foodmart", cat: "Pharmacy", img: "https://randomuser.me/api/portraits/men/40.jpg", indent: "ml-14" },
  { name: "Mummy D Store", cat: "Grocery / Foodstuffs", img: "https://randomuser.me/api/portraits/women/33.jpg", indent: "ml-24" },
];

function MultiStoreVisual() {
  return (
    <div className="relative w-full px-5 md:px-6 pb-8 pt-2 flex items-center gap-3">
      <div className="flex-1 space-y-2.5">
        {STORES.map((s) => (
          <div
            key={s.name}
            className={`bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.06)] py-2 pl-2 pr-5 inline-flex items-center gap-2.5 ${s.indent}`}
          >
            <img
              src={s.img}
              alt={s.name}
              className="w-9 h-9 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs font-bold text-gray-800 leading-tight whitespace-nowrap">{s.name}</p>
              <p className="text-[10px] text-gray-400 leading-tight whitespace-nowrap">{s.cat}</p>
            </div>
          </div>
        ))}
      </div>
      {/* dark phone */}
      <div className="w-32 md:w-36 flex-shrink-0">
        <div className="aspect-[9/19] rounded-[1.8rem] bg-gradient-to-b from-[#1b2c70] to-[#0e1a4a] border-[5px] border-[#0c1428] shadow-2xl flex items-center justify-center">
          <img src="/Kudistocks SVG 1 1.png" alt="" className="w-14 opacity-90" />
        </div>
      </div>
    </div>
  );
}

// ─── Multi-Language: big globe + location/people pins ───
const LANG_PINS = [
  { img: "https://randomuser.me/api/portraits/women/44.jpg", left: "4%", top: "54%" },
  { img: "https://randomuser.me/api/portraits/men/32.jpg", left: "10%", top: "34%" },
  { img: "https://randomuser.me/api/portraits/women/68.jpg", left: "22%", top: "20%" },
  { img: "https://randomuser.me/api/portraits/men/15.jpg", left: "36%", top: "11%" },
  { img: "https://randomuser.me/api/portraits/women/90.jpg", left: "50%", top: "7%" },
  { img: "https://randomuser.me/api/portraits/men/64.jpg", left: "63%", top: "10%" },
  { img: "https://randomuser.me/api/portraits/women/12.jpg", left: "75%", top: "19%" },
  { img: "https://randomuser.me/api/portraits/men/22.jpg", left: "86%", top: "33%" },
  { img: "https://randomuser.me/api/portraits/women/33.jpg", left: "92%", top: "53%" },
  { img: "https://randomuser.me/api/portraits/men/40.jpg", left: "78%", top: "64%" },
];

function LocationPin({ img }: { img: string }) {
  return (
    <div className="relative">
      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white p-[3px] shadow-lg">
        <img src={img} alt="" className="w-full h-full rounded-full object-cover" />
      </div>
      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45 shadow-md" />
    </div>
  );
}

function LanguageGlobeVisual() {
  return (
    <div className="relative w-full h-[340px] overflow-hidden">
      {/* big globe */}
      <img
        src="/solutions/360852937_11444544 1.png"
        alt="Globe"
        className="absolute bottom-[-14%] left-1/2 -translate-x-1/2 w-[112%] max-w-none"
      />
      {/* location people pins */}
      {LANG_PINS.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6, y: 8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
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
      className="relative bg-white text-gray-900 py-20 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <ScrollFadeUp>
            <Badge icon={Icon.bolt()}>Our features: Smart solution for your business</Badge>
          </ScrollFadeUp>
          <ScrollFadeUp delay={100}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl mx-auto">
              Powerful Solutions Your Business Needs
            </h2>
          </ScrollFadeUp>
          <ScrollFadeUp delay={200}>
            <p className="mt-5 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Kudistocks empowers SMEs to manage inventory, track orders, gain
              real-time AI-driven insights, all in your preferred local
              language.
            </p>
          </ScrollFadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. AI-Powered Insights */}
          <FeatureCard
            title="AI-Powered Insights"
            description="Make smarter decisions with predictive sales forecasting, expense optimization tips, and supplier performance advice tailored to your business."
            delay={0}
          >
            <img
              src="/solutions/Ai chat (1).png"
              alt="AI chat assistant"
              className="w-[72%] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            />
          </FeatureCard>

          {/* 2. Inventory Management */}
          <FeatureCard
            title="Inventory Management"
            description="Manage your stock with confidence, track inventory in real-time, receive low-stock alerts, monitor product movement, and make informed restocking decisions to keep your business running smoothly."
            delay={150}
          >
            <div className="relative w-full h-[280px]">
              <img
                src="/solutions/Mockup (2).png"
                alt="Inventory analytics"
                className="absolute right-6 bottom-0 w-[42%] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              />
              <img
                src="/solutions/Highlight.png"
                alt="Product list"
                className="absolute left-3 bottom-20 w-[62%] drop-shadow-xl"
              />
            </div>
          </FeatureCard>

          {/* 3. Multi-Language Support */}
          <FeatureCard
            title="Multi – Language Support"
            description="Use KudiStocks in multiple languages for a smoother, more accessible business management experience. KudiStocks offers multi-language support, helping businesses work comfortably in the language they understand best."
            delay={0}
          >
            <LanguageGlobeVisual />
          </FeatureCard>

          {/* 4. Order Management — rebuilt */}
          <FeatureCard
            title="Order Management"
            description="Create and track purchase orders with ease. Record orders, monitor order status, and keep your inventory and purchases organized in one place."
            delay={150}
          >
            <OrderManagementVisual />
          </FeatureCard>

          {/* 5. Financial Management */}
          <FeatureCard
            title="Financial Management"
            description="Turn daily transactions into clear financial insights. Stay organized with accurate records and real-time cash flow visibility."
            delay={0}
          >
            <img
              src="/solutions/Mockup (1).png"
              alt="Financial wallet"
              className="w-[60%] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            />
          </FeatureCard>

          {/* 6. Multi-Store Support — rebuilt */}
          <FeatureCard
            title="Multi – Store Support"
            description="Manage multiple stores easily under one account while monitoring each store's performance independently."
            delay={150}
          >
            <MultiStoreVisual />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
