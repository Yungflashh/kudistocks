"use client";
import { motion } from "framer-motion";
import { ScrollFadeUp, GlowOrb, Icon } from "./utils";

const TAGS = [
  "Faster Daily Operation",
  "Live Inventory Tracking",
  "Smarter AI Insights",
  "Clear Financial Visibility",
  "Smarter Stock Decision",
  "Organized Orders & Sales",
];
const ROTATIONS = [-4, 4, -2, 3, -3, 2];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07102a] via-[#0e2a6b] to-[#0b2b66]">
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <GlowOrb className="w-72 h-72 md:w-96 md:h-96 bg-blue-600 top-0 left-1/4 opacity-40 md:opacity-100" delay={0} />
      <GlowOrb className="w-60 h-60 md:w-72 md:h-72 bg-indigo-500 bottom-0 right-1/4 opacity-30 md:opacity-100" delay={2} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Area */}
          <div className="w-full lg:col-span-7 text-center lg:text-left z-10 pb-8 lg:pb-16">
            <ScrollFadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm text-blue-200">
                <span className="text-blue-300">{Icon.bolt("w-4 h-4")}</span>
                Get Started: Power Your Business with Smarter Insights
              </div>
            </ScrollFadeUp>

            <ScrollFadeUp delay={100}>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.15] text-white tracking-tight">
                Make Smarter Business Decisions, Just Like Other Business Owners
              </h2>
            </ScrollFadeUp>

            <ScrollFadeUp delay={200}>
              <p className="mt-4 sm:mt-5 text-blue-200/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                Join over 500,000 active users managing inventory, orders, and
                sales with Kudistocks every day.
              </p>
            </ScrollFadeUp>

            {/* Action Buttons */}
            <ScrollFadeUp delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <motion.button 
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-900/40 transition-colors duration-200"
                >
                  <img src="https://img.icons8.com/?size=100&id=30659&format=png&color=ffffff" className="w-5 h-5" alt="" />
                  Download on iOS
                </motion.button>
                
                <motion.button 
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-white text-slate-800 font-medium shadow-sm hover:bg-gray-100 transition-colors duration-200"
                >
                  <img src="https://img.icons8.com/?size=100&id=48137&format=png&color=000000" className="w-5 h-5" alt="" />
                  Download on Android
                </motion.button>
              </div>
            </ScrollFadeUp>

            {/* Feature Tags Wrapper */}
            <ScrollFadeUp delay={400}>
              <div className="mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                {TAGS.map((tag, idx) => (
                  <span
                    key={tag}
                    className="inline-block bg-white/[0.06] backdrop-blur-sm border border-white/5 text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 select-none
                      rotate-0 sm:style-rotations"
                    style={{ 
                      // Using a safe template setup for screens over mobile break
                      transform: typeof window !== 'undefined' && window.innerWidth >= 640  
                        ? `rotate(${ROTATIONS[idx]}deg)` 
                        : undefined 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollFadeUp>
          </div>

          {/* Right Image Layout Area */}
          <div className="w-full lg:col-span-5 flex justify-center lg:justify-end items-end z-10 self-end mt-4 lg:mt-0">
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="/get-started/woman.png"
              alt="Business owner using KudiStocks"
              className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-full h-auto object-contain block"
            />
          </div>

        </div>
      </div>
    </section>
  );
}