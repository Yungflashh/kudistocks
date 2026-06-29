"use client";
import { motion } from "framer-motion";
import { ScrollFadeUp, Badge, Icon } from "./utils";

// subtle alternating tilt per card (matches design)
const TILTS = [-2, 1.5, -1.5, 2, -1, 1.5];

const TESTIMONIALS = [
  {
    name: "Christine Kate",
    rating: "4.8",
    text: "Kudistocks completely changed how I run my business. I can track inventory, manage orders, and understand my sales clearly all in one app and in a language I'm comfortable with.",
    img: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "Martin King",
    rating: "4.2",
    text: "Running my business is faster and more organized with Kudistocks. Inventory, orders, and records are all in one place.",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Habeeb Fatimah",
    rating: "4.5",
    text: "Kudistocks helps me stay on top of my inventory and finances. The insights help me make better decisions, and managing my business feels less stressful.",
    img: "https://randomuser.me/api/portraits/women/57.jpg",
  },
  {
    name: "Chubby Chuks",
    rating: "4.6",
    text: "The insights from Kudistocks help me plan better and avoid running out of stock. It feels like having an extra hand in my business.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Towne Kora",
    rating: "4.7",
    text: "As my business grew, Kudistocks grew with me. Managing stock, orders, and multiple stores is now stress-free.",
    img: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "Olu Jacobs",
    rating: "4.9",
    text: "Before Kudistocks, I struggled with stock and records. Now I manage inventory, track orders, and see my sales and purchases in real time. It's simple, smart, and built for businesses like mine.",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonial"
      className="relative bg-white text-gray-900 py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <ScrollFadeUp>
            <Badge icon={Icon.quote()}>Testimonial: What our user say</Badge>
          </ScrollFadeUp>
          <ScrollFadeUp delay={100}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl mx-auto">
              Real Stories from Business owners
            </h2>
          </ScrollFadeUp>
          <ScrollFadeUp delay={200}>
            <p className="mt-5 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              From small shops to growing enterprises, business owners trust
              Kudistocks to stay organized, make smarter decisions, and grow
              with confidence.
            </p>
          </ScrollFadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollFadeUp key={t.name} delay={(i % 3) * 150}>
              <motion.div
                initial={{ rotate: TILTS[i] }}
                whileInView={{ rotate: TILTS[i] }}
                whileHover={{ rotate: 0, y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                style={{ rotate: TILTS[i] }}
                className="bg-white rounded-2xl border border-gray-100 p-7 flex flex-col items-center text-center h-full shadow-sm"
              >
                {/* Avatar */}
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 ring-2 ring-gray-100"
                />

                {/* Name */}
                <p className="text-base font-bold text-gray-900">{t.name}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1 mb-5">
                  <span className="text-sm font-semibold text-gray-700">
                    {t.rating}
                  </span>
                  <span className="text-green-500">{Icon.star("w-3.5 h-3.5")}</span>
                </div>

                {/* Text */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {t.text}
                </p>

                {/* Quote icon */}
                <div className="mt-8 self-start text-gray-200">
                  {Icon.quote("w-7 h-7")}
                </div>
              </motion.div>
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
