import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support — Kudistocks",
  description:
    "Get help using Kudistocks. Contact our support team, browse common questions, and find answers about inventory, orders, and account management.",
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I create an account?",
    a: "Open the Kudistocks app, tap Sign Up, enter your email, verify the 6-digit code we send you, then create a password. You'll be guided through setting up your first store.",
  },
  {
    q: "I forgot my password — how do I reset it?",
    a: "On the login screen tap Forgot password. Enter your email and we'll send you a 6-digit reset code. Enter the code along with a new password to regain access.",
  },
  {
    q: "How do I add products to my inventory?",
    a: "From the Inventory tab, tap Add Product. Fill in the name, SKU, price, quantity, and low-stock alert threshold. You can also add a photo, barcode, category, and expiry date.",
  },
  {
    q: "Can I manage more than one store?",
    a: "Yes. Kudistocks supports multi-store management. Go to More → Switch store to move between your stores, or Add new store to create another one under the same account.",
  },
  {
    q: "How do I create a purchase order?",
    a: "From the Orders tab, tap New order. Add the products, select a supplier from your saved list (or enter new supplier details), then tap Create order. You can email it directly to the supplier.",
  },
  {
    q: "What does the AI assistant do?",
    a: "KudiBot is your in-app AI assistant. It can suggest reorder amounts, explain your sales trends, forecast demand, and answer general business questions based on your store data. Tap the KudiBot icon on the dashboard to start chatting.",
  },
  {
    q: "How do I change the app's language?",
    a: "Go to More → Select language. Kudistocks supports English, Yoruba, Hausa, Igbo, French, and Nigerian Pidgin.",
  },
  {
    q: "Is my business data safe?",
    a: "Yes. All data is transmitted over HTTPS, passwords are hashed, and authentication tokens are stored in your device's secure storage (iOS Keychain / Android Keystore). See our Privacy Policy for full details.",
  },
  {
    q: "How do I delete my account?",
    a: "Go to More → Delete account, or email us at support@kudistocks.com from the address on your account. We'll process the request and permanently delete your data, subject to any legal retention requirements.",
  },
  {
    q: "The app is crashing or a feature isn't working. What should I do?",
    a: "First try closing and reopening the app, then check for an app update in the App Store. If the issue persists, email us at support@kudistocks.com with your device model, iOS version, and a short description of what you were doing when it happened.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#080c1e] text-gray-200">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-blue-300 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
            Help Center
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            How can we help?
          </h1>
          <p className="mt-5 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions or reach out to our support team.
            We&rsquo;re here to help you run your business smoothly.
          </p>
        </div>
      </section>

      {/* Contact card */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 pt-14 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <a
            href="mailto:support@kudistocks.com"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-500/5 border border-blue-400/20 p-6 hover:border-blue-400/40 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-5 h-5 text-blue-300"
                >
                  <path
                    d="M4 6h16v12H4z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 7l8 6 8-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">
                  Email support
                </h3>
                <p className="text-sm text-blue-300 mt-1 group-hover:text-blue-200 transition-colors">
                  support@kudistocks.com
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
          </a>

          <div className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-5 h-5 text-gray-300"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    d="M12 7v5l3 2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">
                  Support hours
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM (WAT)
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Requests outside these hours are answered on the next business
                  day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before you contact us */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 pt-14">
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 md:p-7">
          <h2 className="text-lg font-semibold text-white">
            Before you contact us
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Including these details in your first message helps us resolve your
            issue faster:
          </p>
          <ul className="mt-4 space-y-2.5">
            {[
              "The email address associated with your Kudistocks account",
              "Your device model and OS version (e.g., iPhone 14, iOS 17.5)",
              "The app version (found under More → About)",
              "A clear description of what you were doing when the issue happened",
              "A screenshot or short screen recording if possible",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Quick answers to the questions we hear most often.
        </p>

        <div className="mt-8 space-y-3">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors overflow-hidden"
            >
              <summary className="cursor-pointer list-none p-5 md:p-6 flex items-center justify-between gap-4">
                <span className="text-[15px] md:text-base font-medium text-white pr-2">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 group-open:bg-blue-500/20 group-open:border-blue-400/30 group-open:text-blue-300 group-open:rotate-45 transition-all duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="w-4 h-4"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                <p className="text-sm text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 p-8 md:p-10 text-center">
          <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Still need help?
            </h3>
            <p className="mt-3 text-sm md:text-base text-blue-100 max-w-xl mx-auto">
              Our support team is ready to help. Send us an email and
              we&rsquo;ll get back to you as soon as we can.
            </p>
            <a
              href="mailto:support@kudistocks.com"
              className="inline-flex items-center gap-2 mt-6 bg-white text-blue-700 font-semibold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Contact support
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="w-4 h-4"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
