"use client";
import { motion } from "framer-motion";
import { ScrollFadeUp, Badge, Icon } from "./utils";

const STEPS = [
  {
    n: "1",
    t: "Create Account",
    d: "Create account, add your first store, and start managing your operations.",
    img: "/get-started/Mockup (3).png",
  },
  {
    n: "2",
    t: "Add Inventory or Create Order",
    d: "Add products, track stock in real time, and create orders easily. Get low-stock alerts to stay organized.",
    img: "/get-started/2.png",
  },
  {
    n: "3",
    t: "Gain Insights & Growth",
    d: "Use AI-powered insights to track sales, optimize inventory, and make smarter decisions.",
    img: "/get-started/Mockup (4).png",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#f5f6fa] text-gray-900 py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <ScrollFadeUp>
            <Badge icon={Icon.bolt()}>How It Works: Simplify Your Business Operations</Badge>
          </ScrollFadeUp>
          <ScrollFadeUp delay={100}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl mx-auto">
              Get Started in Minutes
            </h2>
          </ScrollFadeUp>
          <ScrollFadeUp delay={200}>
            <p className="mt-5 text-gray-500 text-base md:text-lg max-w-xl mx-auto">
              Step-by-step solutions to manage inventory, orders, and growth.
            </p>
          </ScrollFadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {STEPS.map((s, i) => (
            <ScrollFadeUp key={s.n} delay={i * 200}>
              {/* Removed overflow-hidden from here since images fit perfectly inside now */}
              <div className="bg-white rounded-3xl pt-6 md:pt-8 px-6 md:px-8 pb-6 md:pb-8 shadow-sm h-full flex flex-col justify-between">
                <div className="mb-6">
                  <h3 className="flex items-baseline gap-3 min-h-[3.5rem] md:min-h-[4rem]">
                    <span className="text-3xl md:text-4xl text-gray-800 font-extrabold">
                      {s.n}.
                    </span>
                    <span className="text-lg md:text-xl font-bold">{s.t}</span>
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base mt-3 min-h-[4rem] md:min-h-[3.75rem]">
                    {s.d}
                  </p>
                </div>

                {/* Unified Image Container: Guarantees full image visibility across all devices */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="mt-auto w-full h-[200px] xs:h-[240px] md:h-[220px] lg:h-[260px] flex items-end justify-center overflow-hidden"
                >
                  <img
                    src={s.img}
                    alt={s.t}
                    className="w-full h-full object-contain object-bottom"
                  />
                </motion.div>
              </div>
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}