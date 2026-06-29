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
      className={`absolute drop-shadow-2xl object-contain bottom-0 ${className}`}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      /* Changed to h-auto on mobile so the section ends exactly where the images end, removing the dead space */
      className="relative h-auto md:min-h-screen flex flex-col justify-start md:justify-between overflow-hidden bg-[#06082e]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/Background.png"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080c1e]" />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        <Navbar />

        {/* Heading block */}
        <div className="flex flex-col items-center text-center px-6 pt-4 sm:pt-6 md:pt-10">
          <FadeUp delay={0}>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-sm text-[11px] sm:text-[13px] text-blue-100">
              <span className="text-blue-400">{Icon.bolt("w-3 h-3")}</span>
              <span>New: Smart AI Insights to manage inventory and sell better</span>
            </div>
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-4 sm:mt-6 text-[32px] sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold leading-[1.06] sm:leading-[1.04] tracking-tight max-w-4xl text-white">
              Smarter Inventory,
              <br />
              Smarter Finance
            </h1>
          </FadeUp>

          <FadeUp delay={450}>
            <p className="mt-3 sm:mt-5 text-blue-100/70 text-xs sm:text-sm md:text-base max-w-[290px] sm:max-w-lg leading-relaxed">
              Kudistocks helps businesses track inventory, record sales and
              purchases, and gain real-time insights, with flexible language
              options to suit your local needs.
            </p>
          </FadeUp>

          <FadeUp delay={650} className="flex flex-nowrap gap-3 sm:gap-4 mt-5 sm:mt-8 justify-center">
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 14px 38px rgba(59,130,246,0.4)" }}
              className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-[11px] sm:text-xs md:text-sm whitespace-nowrap transition-colors duration-300"
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
              className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white hover:bg-gray-100 text-slate-900 font-medium text-[11px] sm:text-xs md:text-sm whitespace-nowrap transition-colors duration-300"
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
      </div>

      {/* IMAGES SECTION */}
      <FadeUp delay={850} className="relative  w-full mt-12 sm:mt-auto self-end">
        <div className="relative w-full overflow-visible
          h-[280px] 
          xs:h-[340px]
          sm:h-[320px] 
          md:h-[380px] 
          lg:h-[420px]
          xl:h-[480px]
        ">

          {/* OUTER LEFT: Stock flow */}
          <FloatingImage
            src="/hero/Stock flow.png"
            alt="Stock flow"
            from="left"
            delay={1400}
            className="z-0 left-0
              w-[0%]
              sm:w-[32%]
              md:w-[23%] md:-left-[17%]
              lg:w-[18%] lg:left-0"
          />

          {/* INNER LEFT: AI chat */}
          <FloatingImage
            src="/hero/Ai chat.png"
            alt="AI chat assistant"
            from="left"
            delay={1700}
            className="z-0
              w-[30%]      -left-[8%]
              sm:w-[26%]   sm:left-[28%]
              md:w-[22%]   md:left-[8%]
              lg:w-[19%]   lg:left-[19%]"
          />

          {/* INNER RIGHT: Analytics / Earnings */}
          <FloatingImage
            src="/hero/Analytics - Earnings.png"
            alt="Analytics earnings"
            from="right"
            delay={1500}
            className="z-0
              w-[30%]      -right-[8%]
              sm:w-[26%]   sm:right-[28%]
              md:w-[22%]   md:right-[10%]
              lg:w-[19%]   lg:right-[19%]"
          />

          {/* OUTER RIGHT: Order summary */}
          <FloatingImage
            src="/hero/Order summary.png"
            alt="Order summary"
            from="right"
            delay={1800}
            className="z-0 right-0
              w-[0%]
              sm:w-[32%]
              md:w-[23%] md:-right-[15%]
              lg:w-[18%] lg:right-0"
          />

          {/* CENTER: Phone mockup */}
          <div className="absolute inset-x-0 bottom-0  mx-auto flex justify-center
            w-[72%]
            xs:w-[64%]
            sm:w-[320px]
            md:w-[380px]
            lg:w-[420px]
            xl:w-[460px]
            lg:translate-x-[10px]
          ">
            <motion.img
              src="/hero/Mockup.png"
              alt="KudiStocks mobile app"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="w-full h-auto object-contain block alignment-baseline"
              style={{ display: 'block', verticalAlign: 'bottom' }}
            />
          </div>

          {/* Bottom fade — blends layout seamlessly */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080c1e] to-transparent z-30 pointer-events-none" />
        </div>
      </FadeUp>
    </section>
  );
}