"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollFadeUp, useInView, Badge, Icon } from "./utils";

const FAQS = [
  {
    q: "What is KudiStocks?",
    a: "KudiStocks is a smart inventory and business management app that helps SMEs track inventory, manage orders, monitor sales and purchases, and gain AI-powered insights — all in one simple platform.",
  },
  {
    q: "Who can use KudiStocks?",
    a: "KudiStocks is designed for small and medium-sized businesses across Nigeria and Africa. Whether you run a boutique, pharmacy, electronics shop, or supermarket — KudiStocks fits your needs.",
  },
  {
    q: "Can I manage more than one store?",
    a: "Yes! KudiStocks supports multi-store management. Manage all your branches from a single account while monitoring each store's performance independently.",
  },
  {
    q: "Does KudiStocks track inventory in real time?",
    a: "Absolutely. KudiStocks provides real-time stock tracking with low stock alerts, product movement monitoring, and automated restock suggestions.",
  },
  {
    q: "How does order management work?",
    a: "Create, track, and manage purchase orders easily. Record orders, monitor delivery status (Pending, Confirmed, In Transit, Delivered), and keep everything organized.",
  },
  {
    q: "What are AI-powered insights used for?",
    a: "Our AI analyzes your sales data to provide demand forecasting, expense optimization tips, supplier performance scoring, and personalized business recommendations.",
  },
  {
    q: "Is KudiStocks easy to use?",
    a: "Yes. KudiStocks is built to be simple and practical. Download from the App Store or Google Play, create an account, and start managing your business in minutes.",
  },
  {
    q: "Does KudiStocks support different languages?",
    a: "Yes! KudiStocks supports multiple languages including English, Yoruba, Igbo, Hausa, French, and Spanish.",
  },
];

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView(0.1);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="border-b border-gray-100"
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${
            open ? "bg-blue-500" : "bg-gray-100"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke={open ? "white" : "#6b7280"} strokeWidth="2" className="w-4 h-4">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-500 text-sm leading-relaxed pb-5 pr-12">{a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faqs"
      className="relative bg-white text-gray-900 py-20 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <ScrollFadeUp>
            <Badge icon={Icon.help()}>FAQs</Badge>
          </ScrollFadeUp>
          <ScrollFadeUp delay={100}>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Helpful Answers Before You Get Started
            </h2>
          </ScrollFadeUp>
          <ScrollFadeUp delay={200}>
            <p className="mt-5 text-gray-500 text-base md:text-lg max-w-xl mx-auto">
              Find answers about how KudiStocks works, its features, and how it
              helps SMEs manage operations with confidence.
            </p>
          </ScrollFadeUp>
        </div>
        <div>
          {FAQS.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} delay={i * 50} />
          ))}
        </div>
      </div>
    </section>
  );
}
