"use client";
import { motion } from "framer-motion";
import { FadeUp, Icon } from "./utils";
import Navbar from "./Navbar";

function FloatingImage({
  src,
  alt,
  className,
  from,
  delay,
}: {
  src: string;
  alt: string;
  className: string;
  from: "left" | "right";
  delay: number;
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, x: from === "left" ? -40 : 40, y: 16 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: delay / 1000, ease: "easeOut" }}
      className={`absolute drop-shadow-2xl ${className}`}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#06082e]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero/Background.png"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080c1e]" />
      </div>

      <Navbar />

      {/* Heading block */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-8 md:pt-12">
        <FadeUp delay={0}>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-sm text-[11px] sm:text-[13px] text-blue-100">
            <span className="text-blue-400">{Icon.bolt("w-3 h-3")}</span>
            <span>New: Smart AI Insights to manage inventory and sell better</span>
          </div>
        </FadeUp>

        <FadeUp delay={250}>
          <h1 className="mt-6 sm:mt-7 text-[34px] sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold leading-[1.06] sm:leading-[1.04] tracking-tight max-w-4xl text-white">
            Smarter Inventory,
            <br />
            Smarter Finance
          </h1>
        </FadeUp>

        <FadeUp delay={450}>
          <p className="mt-5 sm:mt-6 text-blue-100/70 text-sm sm:text-base md:text-lg max-w-[330px] sm:max-w-xl leading-relaxed">
            Kudistocks helps businesses track inventory, record sales and
            purchases, and gain real-time insights, with flexible language
            options to suit your local needs.
          </p>
        </FadeUp>

        <FadeUp delay={650} className="flex flex-nowrap gap-3 sm:gap-4 mt-8 sm:mt-9 justify-center">
          <motion.button
            whileHover={{ y: -2, boxShadow: "0 14px 38px rgba(59,130,246,0.4)" }}
            className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-[12px] sm:text-sm whitespace-nowrap transition-colors duration-300"
          >
            Download on iOS
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
              <img
                src="https://img.icons8.com/?size=100&id=30659&format=png&color=ffffff"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                alt=""
              />
            </span>
          </motion.button>
          <motion.button
            whileHover={{ y: -2, boxShadow: "0 14px 38px rgba(255,255,255,0.2)" }}
            className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-gray-100 text-slate-900 font-medium text-[12px] sm:text-sm whitespace-nowrap transition-colors duration-300"
          >
            Download on Android
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900/10 flex items-center justify-center flex-shrink-0">
              <img
                src="https://img.icons8.com/?size=100&id=48137&format=png&color=000000"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                alt=""
              />
            </span>
          </motion.button>
        </FadeUp>
      </div>

      {/* Phone + floating image cards — full bleed, bottom anchored */}
      <FadeUp delay={850} className="relative z-10 mt-10 sm:mt-12 md:mt-14 w-full px-0 sm:px-6 md:px-10">
        <div className="relative w-full h-auto sm:h-[400px] md:h-[480px] lg:h-[520px]">
          {/* OUTER LEFT — Stock flow (flush to edge) */}
          <FloatingImage
            src="/hero/Stock flow.png"
            alt="Stock flow"
            from="left"
            delay={1400}
            className="block z-0 opacity-40 sm:opacity-100 w-[44%] sm:w-[34%] md:w-[26%] lg:w-[18%] left-0 bottom-0"
          />

          {/* INNER LEFT — AI chat (tucked behind phone) */}
          <FloatingImage
            src="/hero/Ai chat.png"
            alt="AI chat assistant"
            from="left"
            delay={1700}
            className="hidden lg:block z-0 w-[19%] left-[19%] bottom-0"
          />

          {/* INNER RIGHT — Analytics / Earnings (tucked behind phone) */}
          <FloatingImage
            src="/hero/Analytics - Earnings.png"
            alt="Analytics earnings"
            from="right"
            delay={1500}
            className="hidden lg:block z-0 w-[19%] right-[19%] bottom-0"
          />

          {/* OUTER RIGHT — Order summary (flush to edge) */}
          <FloatingImage
            src="/hero/Order summary.png"
            alt="Order summary"
            from="right"
            delay={1800}
            className="block z-0 opacity-40 sm:opacity-100 w-[44%] sm:w-[34%] md:w-[26%] lg:w-[18%] right-0 bottom-0"
          />

          {/* CENTER — phone in hand.
              Width + horizontal shift are responsive; the lg layout is your tuned one.
              To nudge left/right on desktop, change lg:translate-x-[127px]. */}
          <div className="relative mx-auto sm:absolute sm:inset-x-0 sm:bottom-0 z-10 w-full max-w-[440px] sm:max-w-none sm:w-[360px] md:w-[480px] lg:w-[680px] lg:translate-x-[127px]">
            <motion.img
              src="/hero/Mockup.png"
              alt="KudiStocks mobile app"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#080c1e] to-transparent z-30 pointer-events-none" />
        </div>
      </FadeUp>
    </section>
  );
}
