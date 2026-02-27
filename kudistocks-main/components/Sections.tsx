"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { ScrollFadeUp, GlowOrb, AnimatedCounter, useInView } from "./utils";

function StatCard({ icon, value, description, delay = 0 }: { icon: ReactNode; value: ReactNode; description: string; delay?: number }) {
  const [ref, inView] = useInView(0.15);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: delay / 1000 }}
      whileHover={{ y: -6, boxShadow: "0 30px 80px rgba(14,30,80,0.45)" }} className="relative">
      <div className="relative rounded-2xl p-6 md:p-8 overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 shadow-lg">
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/6" />
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/6" />
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">{icon}</div>
        <p className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none">{value}</p>
        <p className="text-blue-100/90 text-sm mt-4 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════
// ABOUT SECTION
// ═══════════════════════════════════════
export function AboutSection() {
  return (
    <section id="aboutus" className="relative bg-white text-gray-900 py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #2e3fc7 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-16 md:mb-24">
          <div className="lg:w-1/2">
            <ScrollFadeUp><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">📚 About us</div></ScrollFadeUp>
            <ScrollFadeUp delay={100}><h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">Smart Stock<br />Management</h2></ScrollFadeUp>
          </div>
          <div className="lg:w-1/2 flex items-end">
            <ScrollFadeUp delay={200}><p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">Kudistocks helps businesses stay organized by tracking inventory, recording sales and purchases, and providing clear insights into daily operations. Everything is built to be simple, practical, and easy to use, with flexible language options to suit your local needs.</p></ScrollFadeUp>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" /></svg>} value={<AnimatedCounter end={300} suffix="k+" />} description="Downloads on both Android and iOS" delay={0} />
          <div className="lg:mt-12"><StatCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" /></svg>} value={<AnimatedCounter end={500} suffix="k+" />} description="Active users across all platforms" delay={150} /></div>
          <StatCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" /></svg>} value={<AnimatedCounter end={100} suffix="%" />} description="Customer satisfaction rate" delay={300} />
          <div className="lg:mt-12"><StatCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>} value={<>4.8<span>★</span></>} description="Average rating from 150k+ reviews" delay={450} /></div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
// FEATURE CARD
// ═══════════════════════════════════════
function FeatureCard({ title, description, children, delay = 0 }: { title: string; description: string; children: ReactNode; delay?: number }) {
  const [ref, inView] = useInView(0.08);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: delay / 1000 }}
      whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
      className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-sm">
      <div className="p-6 pb-2"><h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3><p className="text-gray-500 text-sm leading-relaxed">{description}</p></div>
      <div className="mt-auto flex-1 flex items-end justify-center overflow-hidden pt-4">{children}</div>
    </motion.div>
  );
}



export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-white text-gray-900 py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <ScrollFadeUp><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">⚡ Our features: Smart solution for your business</div></ScrollFadeUp>
          <ScrollFadeUp delay={100}><h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl mx-auto">Powerful Solutions Your Business Needs</h2></ScrollFadeUp>
          <ScrollFadeUp delay={200}><p className="mt-5 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">Kudistocks empowers SMEs to manage inventory, track orders, gain real-time AI-driven insights, all in your preferred local language.</p></ScrollFadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard title="AI-Powered Insights" description="Real-time smart analytics for forecasting, expense optimization, and supplier performance advice." delay={0}>
            <div className="w-full flex items-center justify-center p-6">
              <img src="/images/Ai-insight.png" alt="AI Powered Insights" className="w-full max-w-md rounded-2xl shadow-lg object-contain" />
            </div>
          </FeatureCard>
          <FeatureCard title="Inventory Management" description="Monitor stock with pinpoint accuracy, restock alerts, and informed restocking decisions." delay={150}>
            <div className="w-full flex items-center justify-center p-6">
              <img src="/images/inventory.png" alt="Inventory Management" className="w-full max-w-md rounded-2xl shadow-lg object-contain" />
            </div>
          </FeatureCard>
          <FeatureCard title="Multi – Language Support" description="Use KudiStocks in multiple languages for smoother business management." delay={0}>
            <div className="w-full flex items-center justify-center p-6">
              <img src="/images/multi-language.png" alt="Multi Language Support" className="w-full max-w-md rounded-2xl shadow-lg object-contain" />
            </div>
          </FeatureCard>
          <FeatureCard title="Order Management" description="Create and track purchase orders with ease. Keep inventory organized." delay={150}>
            <div className="w-full flex items-center justify-center p-6">
              <img src="/images/order.png" alt="Order Management" className="w-full max-w-md rounded-2xl shadow-lg object-contain" />
            </div>
          </FeatureCard>
          <FeatureCard title="Financial Management" description="Full clarity into financial insights with accurate records and real-time cash flow." delay={0}>
            <div className="w-full flex items-center justify-center p-6">
              <img src="/images/financial.png" alt="Financial Management" className="w-full max-w-md rounded-2xl shadow-lg object-contain" />
            </div>
          </FeatureCard>
          <FeatureCard title="Multi – Store Support" description="Manage multiple stores under one account, monitoring each independently." delay={150}>
            <div className="w-full flex items-center justify-center p-6">
              <img src="/images/multi-store.png" alt="Multi Store Support" className="w-full max-w-md rounded-2xl shadow-lg object-contain" />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
// HOW IT WORKS
// ═══════════════════════════════════════
function StepPhone1() { return (<div className="w-48 md:w-56 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mx-auto"><div className="flex justify-between items-center px-4 pt-2 pb-1 text-gray-900 text-[10px] font-medium"><span>9:41</span><div className="w-16 h-4 bg-black rounded-full" /><div className="w-3 h-2 border border-gray-400 rounded-sm" /></div><div className="px-4 py-6 flex flex-col items-center"><div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-200"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-8 h-8"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><p className="text-gray-900 text-sm font-bold text-center">Account created successfully</p><div className="mt-4 w-full space-y-2"><div className="h-2 bg-gray-100 rounded-full w-full" /><div className="h-2 bg-gray-100 rounded-full w-3/4" /><div className="h-2 bg-gray-100 rounded-full w-1/2" /></div></div></div>); }
function StepPhone2() { return (<div className="w-48 md:w-56 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mx-auto"><div className="flex justify-between items-center px-4 pt-2 pb-1 text-gray-900 text-[10px] font-medium"><span>9:41</span><div className="w-16 h-4 bg-black rounded-full" /><div className="w-3 h-2 border border-gray-400 rounded-sm" /></div><div className="px-3 py-3"><div className="space-y-2 mb-3">{[{n:"Hair Wax",q:"24",p:"₦8,500"},{n:"Nail Kit",q:"15",p:"₦3,200"},{n:"Cream L.",q:"42",p:"₦1,600"}].map((it,i)=>(<div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2"><div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-[10px]">📦</div><div className="flex-1"><p className="text-[10px] font-semibold text-gray-800">{it.n}</p><p className="text-[8px] text-gray-400">Qty: {it.q}</p></div><span className="text-[10px] font-bold text-gray-900">{it.p}</span></div>))}</div><div className="flex justify-center"><span className="text-[9px] bg-gray-100 text-gray-500 px-2 py-1 rounded-full">Jan 05, 2024</span></div><div className="mt-2 bg-gray-900 rounded-xl p-2.5 text-center"><p className="text-gray-400 text-[9px]">Total stock</p><p className="text-white text-xl font-bold">245</p></div></div></div>); }
function StepPhone3() { return (<div className="w-48 md:w-56 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mx-auto"><div className="flex justify-between items-center px-4 pt-2 pb-1 text-gray-900 text-[10px] font-medium"><span>9:41</span><div className="w-16 h-4 bg-black rounded-full" /><div className="w-3 h-2 border border-gray-400 rounded-sm" /></div><div className="px-3 py-3"><div className="flex items-center gap-2 mb-2"><div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center"><svg viewBox="0 0 16 16" fill="#3b82f6" className="w-2.5 h-2.5"><rect x="1" y="8" width="3" height="7" rx="0.5"/><rect x="6" y="4" width="3" height="11" rx="0.5"/><rect x="11" y="1" width="3" height="14" rx="0.5"/></svg></div><span className="text-[10px] font-semibold text-gray-800">Analytics</span></div><svg viewBox="0 0 200 50" className="w-full h-10 mb-2"><polyline points="0,40 25,35 50,38 75,25 100,28 125,18 150,20 175,10 200,5" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" /><polyline points="0,40 25,35 50,38 75,25 100,28 125,18 150,20 175,10 200,5 200,50 0,50" fill="url(#spG)" stroke="none" /><defs><linearGradient id="spG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" /><stop offset="100%" stopColor="#3b82f6" stopOpacity="0" /></linearGradient></defs></svg><div className="bg-gray-50 rounded-lg p-2 mb-2"><p className="text-[9px] text-gray-400">Revenue</p><p className="text-sm font-bold text-gray-900">₦488,978.76</p><span className="text-[9px] text-green-500 font-medium">+488,978.76 ▲</span></div><div className="flex items-end gap-0.5 h-8">{[30,50,40,70,55,80,45,65,75,90].map((h,i)=>(<div key={i} className="flex-1 rounded-t-sm" style={{height:`${h}%`,background:i===9?"#22c55e":"#e5e7eb"}} />))}</div></div></div>); }

export function HowItWorksSection() {
  const steps = [
    { n: "1", t: "Create Account", d: "Create account, add your first store, and start managing your operations.", phone: <StepPhone1 /> },
    { n: "2", t: "Add Inventory or Create Order", d: "Add products, track stock in real time, and create orders easily.", phone: <StepPhone2 /> },
    { n: "3", t: "Gain Insights & Growth", d: "Use AI-powered insights to track sales, optimize inventory, and make smarter decisions.", phone: <StepPhone3 /> },
  ];
  return (
    <section className="relative bg-[#f5f6fa] text-gray-900 py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <ScrollFadeUp><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">⚡ How It Works: Simplify Your Business Operations</div></ScrollFadeUp>
          <ScrollFadeUp delay={100}><h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl mx-auto">Get Started in Minutes</h2></ScrollFadeUp>
          <ScrollFadeUp delay={200}><p className="mt-5 text-gray-500 text-base md:text-lg max-w-xl mx-auto">Step-by-step solutions to manage inventory, orders, and growth.</p></ScrollFadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <ScrollFadeUp key={i} delay={i * 200}>
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm h-full flex flex-col">
                <div className="mb-4 md:mb-6">
                  <h3 className="text-2xl md:text-2xl font-extrabold text-gray-900 flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl text-gray-800 font-bold">{s.n}.</span>
                    <span className="text-lg md:text-xl">{s.t}</span>
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base mt-3">{s.d}</p>
                </div>
                <div className="mt-auto">
                  <motion.div whileHover={{ y: -4 }} className="flex justify-center pt-2">
                    <div className="w-full max-w-[320px] md:max-w-[200px]">{s.phone}</div>
                  </motion.div>
                </div>
              </div>
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════
const testimonials = [
  { name: "Oluwakemi Kola", role: "Boutique Owner, Lagos", text: "Running a multi-brand boutique, I struggled to keep track of stock. With KudiStocks, I manage everything from one place — like having an extra pair of hands.", initials: "OK", color: "bg-blue-500" },
  { name: "Mariam Bong", role: "Cosmetics Store Owner", text: "I used manual records prone to errors. KudiStocks transformed how I track stock. Now I see what's selling fast and make restocking decisions instantly.", initials: "MB", color: "bg-purple-500" },
  { name: "Ifedolapo Abiodun", role: "Supermarket Manager, Ibadan", text: "Speed and accuracy matter. KudiStocks helps us track hundreds of products seamlessly. AI insights help forecast demand and reduce waste.", initials: "IA", color: "bg-pink-500" },
  { name: "Chubuike Chidi", role: "Electronics Store, Aba", text: "The multi-store feature is gold! I operate two locations and monitor both from my phone. Stock alerts saved us from running out of top-sellers.", initials: "CC", color: "bg-teal-500" },
  { name: "Torera Kunle", role: "Pharmacy Owner, Kano", text: "Accurate stock tracking is critical for my pharmacy. KudiStocks gives real-time data on every product. Restocking alerts are game-changers.", initials: "TK", color: "bg-orange-500" },
  { name: "Chi. Jessica", role: "Fashion Designer, Enugu", text: "I struggled with fabric inventory. KudiStocks made it simple to track orders and connect with customers better.", initials: "CJ", color: "bg-rose-500" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonial" className="relative bg-white text-gray-900 py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <ScrollFadeUp><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">💬 Testimonials</div></ScrollFadeUp>
          <ScrollFadeUp delay={100}><h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl mx-auto">Real Stories from Business owners</h2></ScrollFadeUp>
          <ScrollFadeUp delay={200}><p className="mt-5 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">From small shops to growing businesses, hear from founders who use KudiStocks to stay organized and grow with confidence.</p></ScrollFadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollFadeUp key={i} delay={(i % 3) * 150}>
              <motion.div whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col h-full shadow-sm">
                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, j) => (<svg key={j} viewBox="0 0 20 20" fill="#facc15" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100"><div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}>{t.initials}</div><div><p className="text-sm font-semibold text-gray-900">{t.name}</p><p className="text-xs text-gray-400">{t.role}</p></div></div>
              </motion.div>
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
// CTA
// ═══════════════════════════════════════
export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07102a] via-[#0e2a6b] to-[#0b2b66]">
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#041028] via-[#0b2b66] to-[#07173a]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <GlowOrb className="w-96 h-96 bg-blue-600 top-0 left-1/4" delay={0} />
      <GlowOrb className="w-72 h-72 bg-indigo-500 bottom-0 right-1/4" delay={2} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <ScrollFadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-blue-200 mb-6">⚡ Get Started: Power Your Business with Smarter Insights</div>
            </ScrollFadeUp>

            <ScrollFadeUp delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-extrabold leading-tight text-white">Make Smarter Business Decisions, Just Like Other Business Owners</h2>
            </ScrollFadeUp>

            <ScrollFadeUp delay={200}>
              <p className="mt-5 text-blue-200/80 text-base md:text-lg max-w-2xl">Join over 500,000 active users managing inventory, orders, and sales with Kudistocks every day.</p>
            </ScrollFadeUp>

            <ScrollFadeUp delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg"><img src="https://img.icons8.com/?size=100&id=30659&format=png&color=ffffff" className="w-6 h-6" />Download on iOS</button>
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-slate-800 font-medium shadow-sm border border-white/10"><img src="https://img.icons8.com/?size=100&id=48137&format=png&color=000000" className="w-6 h-6" />Download on Android</button>
              </div>
            </ScrollFadeUp>

            <div className="mt-10 lg:mt-14">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {[
                    "Faster Daily Operation",
                    "Live Inventory Tracking",
                    "Smarter AI Insights",
                    "Clear Financial Visibility",
                    "Smarter Stock Decision",
                    "Organized Orders & Sales",
                  ].map((t, idx) => {
                    const smallRotations = [-6, 6, -3, 3, -2, 2];
                    return (
                      <span
                        key={t}
                        className="inline-block bg-white/6 text-white text-sm px-4 py-2 rounded-full shadow-md"
                        style={{ transform: `rotate(${smallRotations[idx]}deg)` }}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-end justify-center lg:justify-end z-10">
            <div className="w-full max-w-lg lg:max-w-xl -mb-6 lg:-mb-12">
              <img src="/images/Ad-lady2.png" alt="Kudistocks App Preview" className="w-full h-auto object-cover rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
// FAQ
// ═══════════════════════════════════════
const faqs = [
  { q: "What is KudiStocks?", a: "KudiStocks is a smart inventory and business management app that helps SMEs track inventory, manage orders, monitor sales and purchases, and gain AI-powered insights — all in one simple platform." },
  { q: "Who can use KudiStocks?", a: "KudiStocks is designed for small and medium-sized businesses across Nigeria and Africa. Whether you run a boutique, pharmacy, electronics shop, or supermarket — KudiStocks fits your needs." },
  { q: "Can I manage more than one store?", a: "Yes! KudiStocks supports multi-store management. Manage all your branches from a single account while monitoring each store's performance independently." },
  { q: "Does KudiStocks track inventory in real time?", a: "Absolutely. KudiStocks provides real-time stock tracking with low stock alerts, product movement monitoring, and automated restock suggestions." },
  { q: "How does order management work?", a: "Create, track, and manage purchase orders easily. Record orders, monitor delivery status (Pending, Confirmed, In Transit, Delivered), and keep everything organized." },
  { q: "What are AI-powered insights used for?", a: "Our AI analyzes your sales data to provide demand forecasting, expense optimization tips, supplier performance scoring, and personalized business recommendations." },
  { q: "Is KudiStocks free to use?", a: "KudiStocks is available on both iOS and Android. Download from the App Store or Google Play, create an account, and start managing your business in minutes." },
  { q: "Does KudiStocks support different languages?", a: "Yes! KudiStocks supports multiple languages including English, Yoruba, Igbo, Hausa, French, and Spanish." },
];

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView(0.1);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: delay / 1000 }} className="border-b border-gray-100">
      <button className="w-full flex items-center justify-between py-5 text-left group" onClick={() => setOpen(!open)}>
        <span className="text-base font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">{q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${open ? "bg-blue-500" : "bg-gray-100"}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke={open ? "white" : "#6b7280"} strokeWidth="2" className="w-4 h-4"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="text-gray-500 text-sm leading-relaxed pb-5 pr-12">{a}</p>
      </motion.div>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faqs" className="relative bg-white text-gray-900 py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <ScrollFadeUp><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">❓ FAQs</div></ScrollFadeUp>
          <ScrollFadeUp delay={100}><h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">Helpful Answers Before You Get Started</h2></ScrollFadeUp>
          <ScrollFadeUp delay={200}><p className="mt-5 text-gray-500 text-base md:text-lg max-w-xl mx-auto">Find answers about how KudiStocks works, its features, and how it helps SMEs manage operations with confidence.</p></ScrollFadeUp>
        </div>
        <div>{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} delay={i * 50} />)}</div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
// FOOTER CTA + FOOTER
// ═══════════════════════════════════════
export function FooterCTA() {
  const [email, setEmail] = useState("");
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#111b5e] to-[#0d1442]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <GlowOrb className="w-72 h-72 bg-blue-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={0} />
      <div className="relative max-w-3xl mx-auto text-center">
      <ScrollFadeUp><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-blue-200 mb-6">🚀 Take the Next Step</div></ScrollFadeUp>
      <ScrollFadeUp delay={100}><h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-white">Take Control of Your Business Operations</h2></ScrollFadeUp>
      <ScrollFadeUp delay={200}><p className="mt-5 text-blue-200/60 text-base md:text-lg max-w-lg mx-auto">Plan smarter, manage inventory, and make better decisions with AI-driven insights.</p></ScrollFadeUp>
      <ScrollFadeUp delay={300}>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white placeholder-blue-200/40 text-sm focus:outline-none focus:border-blue-400/50 transition-all" />
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 whitespace-nowrap">Get Started</button>
        </div>
      </ScrollFadeUp>
      </div>
    </section>
  );
}

const NAV_LINKS = ["Home", "About us", "Features", "Testimonial", "FAQs"];
const FOOTER_SECTIONS = {
  Sections: ["About us", "Features", "Testimonial", "FAQs", "Download now"],
  Company: ["Privacy & Policy", "Terms & Condition", "Help center", "Contact us"],
  Social: ["Twitter (X)", "Instagram", "Facebook", "LinkedIn"],
};

export function Footer() {
  return (
    <footer className="relative bg-[#060a1e] text-gray-400 pt-16 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <div className="lg:w-1/3">
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
              Run your business<br />with confidence
            </h3>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(FOOTER_SECTIONS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-gray-500 text-sm font-medium mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 underline decoration-gray-700 underline-offset-4 hover:decoration-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0a0e17] px-6 py-12 md:py-16 flex flex-col items-center justify-center min-h-[50vh] relative">
        <p className="text-gray-600/70 text-xs md:text-sm tracking-wide absolute top-6 left-1/2 -translate-x-1/2">
            © 2025. All rights reserved
        </p>

  <div className="flex items-end gap-4 md:gap-5 mt-8 md:mt-0">
    <img
      src="/images/logo2.png"
      alt=""
      className="h-16 w-16 md:h-20 md:w-20 object-contain opacity-75 brightness-[0.85] contrast-[1.15]"
    />

    <div className="flex flex-col items-start">
      <span
        className="
          text-[3.5rem] leading-none
          md:text-[5rem] lg:text-[6.5rem]
          font-black tracking-[-0.04em]
          text-gray-300/90
        "
      >
        Kudistocks
      </span>
      <span className="text-gray-500/60 text-base md:text-lg font-light tracking-wide pl-1.5">
        stocks.
      </span>
    </div>
  </div>
</div>
      </div>
    </footer>
  );
}
