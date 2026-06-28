"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ScrollFadeUp, AnimatedCounter, useInView, Badge, Icon } from "./utils";

function StatCard({
  icon,
  value,
  description,
  delay = 0,
}: {
  icon: ReactNode;
  value: ReactNode;
  description: string;
  delay?: number;
}) {
  const [ref, inView] = useInView(0.15);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: delay / 1000 }}
      whileHover={{ y: -6, boxShadow: "0 30px 80px rgba(14,30,80,0.4)" }}
      className="relative rounded-2xl p-6 md:p-8 overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 shadow-lg"
    >
      <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/[0.07]" />
      <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/[0.07]" />
      <div className="relative w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
        {icon}
      </div>
      <p className="relative text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none">
        {value}
      </p>
      <p className="relative text-blue-100/90 text-sm mt-4 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

const iconCls = "w-6 h-6";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white text-gray-900 py-20 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 dot-bg opacity-[0.03]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-16 md:mb-24">
          <div className="lg:w-1/2">
            <ScrollFadeUp>
              <Badge icon={Icon.book()}>About us</Badge>
            </ScrollFadeUp>
            <ScrollFadeUp delay={100}>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Smart Stock
                <br />
                Management
              </h2>
            </ScrollFadeUp>
          </div>
          <div className="lg:w-1/2 flex items-end">
            <ScrollFadeUp delay={200}>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
                Kudistocks helps businesses stay organized by tracking
                inventory, recording sales and purchases, and providing clear
                insights into daily operations. Everything is built to be
                simple, practical, and easy to use, with flexible language
                options to suit your local needs.
              </p>
            </ScrollFadeUp>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <StatCard
            delay={0}
            value={<AnimatedCounter end={300} suffix="k+" />}
            description="Downloads on both Android and iOS"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className={iconCls}>
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          <div className="lg:mt-12">
            <StatCard
              delay={150}
              value={<AnimatedCounter end={500} suffix="k+" />}
              description="Active users across all platforms"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className={iconCls}>
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
          </div>
          <StatCard
            delay={300}
            value={<AnimatedCounter end={100} suffix="%" />}
            description="Customer satisfaction rate"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className={iconCls}>
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          <div className="lg:mt-12">
            <StatCard
              delay={450}
              value={
                <>
                  4.8
                  <span className="inline-flex text-yellow-300 ml-1">
                    {Icon.star("w-7 h-7")}
                  </span>
                </>
              }
              description="Average rating from 150k+ reviews"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className={iconCls}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
