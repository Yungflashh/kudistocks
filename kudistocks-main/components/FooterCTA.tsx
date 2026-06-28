"use client";
import { useState } from "react";
import { ScrollFadeUp, Icon } from "./utils";

export default function FooterCTA() {
  const [email, setEmail] = useState("");
  return (
    <section className="relative bg-white px-6 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-[#06082e]">
        {/* card backdrop — same palette as the hero */}
        <img
          src="/hero/Background.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04102b]/70 via-[#071a40]/50 to-[#080c1e]/80" />

        <div className="relative px-6 py-16 md:py-20 text-center">
          <ScrollFadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-blue-200 mb-6">
              <span className="text-blue-300">{Icon.rocket()}</span>
              Take the Next Step
            </div>
          </ScrollFadeUp>
          <ScrollFadeUp delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-white max-w-2xl mx-auto">
              Take Control of Your Business Operations
            </h2>
          </ScrollFadeUp>
          <ScrollFadeUp delay={200}>
            <p className="mt-5 text-blue-200/70 text-base md:text-lg max-w-lg mx-auto">
              Plan smarter, manage inventory, and make better decisions with
              AI-driven insights.
            </p>
          </ScrollFadeUp>
          <ScrollFadeUp delay={300}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white placeholder-blue-200/40 text-sm focus:outline-none focus:border-blue-400/50 transition-all"
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Get Started
              </button>
            </form>
          </ScrollFadeUp>
        </div>
      </div>
    </section>
  );
}
