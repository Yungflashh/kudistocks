"use client";
import { ScrollFadeUp, GlowOrb, Icon } from "./utils";

const TAGS = [
  "Faster Daily Operation",
  "Live Inventory Tracking",
  "Smarter AI Insights",
  "Clear Financial Visibility",
  "Smarter Stock Decision",
  "Organized Orders & Sales",
];
const ROTATIONS = [-6, 6, -3, 3, -2, 2];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07102a] via-[#0e2a6b] to-[#0b2b66]">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <GlowOrb className="w-96 h-96 bg-blue-600 top-0 left-1/4" delay={0} />
      <GlowOrb className="w-72 h-72 bg-indigo-500 bottom-0 right-1/4" delay={2} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <ScrollFadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-blue-200">
                <span className="text-blue-300">{Icon.bolt()}</span>
                Get Started: Power Your Business with Smarter Insights
              </div>
            </ScrollFadeUp>

            <ScrollFadeUp delay={100}>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight text-white">
                Make Smarter Business Decisions, Just Like Other Business Owners
              </h2>
            </ScrollFadeUp>

            <ScrollFadeUp delay={200}>
              <p className="mt-5 text-blue-200/80 text-base md:text-lg max-w-2xl">
                Join over 500,000 active users managing inventory, orders, and
                sales with Kudistocks every day.
              </p>
            </ScrollFadeUp>

            <ScrollFadeUp delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg transition-colors">
                  <img src="https://img.icons8.com/?size=100&id=30659&format=png&color=ffffff" className="w-6 h-6" alt="" />
                  Download on iOS
                </button>
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-slate-800 font-medium shadow-sm hover:bg-gray-100 transition-colors">
                  <img src="https://img.icons8.com/?size=100&id=48137&format=png&color=000000" className="w-6 h-6" alt="" />
                  Download on Android
                </button>
              </div>
            </ScrollFadeUp>

            <ScrollFadeUp delay={400}>
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                {TAGS.map((t, idx) => (
                  <span
                    key={t}
                    className="inline-block bg-white/[0.07] text-white text-sm px-4 py-2 rounded-full shadow-md"
                    style={{ transform: `rotate(${ROTATIONS[idx]}deg)` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ScrollFadeUp>
          </div>

          <div className="w-full lg:w-1/2 flex items-end justify-center lg:justify-end z-10">
            <img
              src="/get-started/modern-stylish-pleased-african-american-woman-using-wireless-earphones-while-talking-with-clients-holding-smartphone-making-notes-picking-music-device 1.png"
              alt="Business owner using KudiStocks"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
