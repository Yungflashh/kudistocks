import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Kudistocks",
  description:
    "How Kudistocks collects, uses, stores, and protects your information across our mobile app and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#080c1e] text-gray-200">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-blue-300 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
            Legal
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-5 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            How Kudistocks collects, uses, stores, and protects your information
            when you use our mobile app and services.
          </p>
          <p className="mt-6 text-xs text-gray-500">
            <span className="text-gray-400">Effective date:</span> 20 August 2026
            &nbsp;·&nbsp;
            <span className="text-gray-400">Last updated:</span> 20 August 2026
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="prose-invert space-y-12 text-[15px] leading-relaxed text-gray-300">

          <p>
            This Privacy Policy explains how <strong className="text-white">Kudistocks</strong>{" "}
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;the App&rdquo;) collects, uses, stores, and
            protects information when you use our mobile application and
            services. Kudistocks is an inventory, sales, and business
            management tool designed for small and medium enterprises (SMEs).
          </p>
          <p>
            By using Kudistocks, you agree to the collection and use of
            information in accordance with this Policy.
          </p>

          <Section title="1. Information We Collect">
            <SubSection title="a. Account information you provide">
              <List
                items={[
                  "First name and last name",
                  "Email address",
                  "Phone number and country code (optional)",
                  "Password (stored in hashed form on our servers)",
                  "Preferred language",
                  "Profile photo/avatar (optional, if you choose to upload one)",
                  "Government-issued ID image (only if you choose to upload one for business verification)",
                ]}
              />
            </SubSection>

            <SubSection title="b. Business information you provide">
              <List
                items={[
                  "Business name, category, description, and logo",
                  "Business address (country, state, city, street, ZIP/postal code)",
                  "Business contact details (phone, email, website)",
                  "Bank account details you add for financial tracking (bank name, account name, account number, routing number)",
                  "Products (name, SKU, barcode, prices, images, quantity, expiry date, etc.)",
                  "Suppliers, purchase orders, sales, and transaction records",
                ]}
              />
            </SubSection>

            <SubSection title="c. Device permissions">
              <List
                items={[
                  <>
                    <strong className="text-white">Camera &amp; Photo Library:</strong>{" "}
                    Used only when you choose to take or upload photos for
                    product images, your business logo, your profile avatar, or
                    your ID document. Images are uploaded to our servers only
                    when you save them.
                  </>,
                  <>
                    <strong className="text-white">Location:</strong> Used only
                    when you tap &ldquo;Use my location&rdquo; on the Business Information
                    screen. We request a single foreground location reading and
                    reverse-geocode it locally to auto-fill your business
                    address fields. We do <strong>not</strong> track your
                    location in the background and we do <strong>not</strong>{" "}
                    store your GPS coordinates.
                  </>,
                ]}
              />
            </SubSection>

            <SubSection title="d. Automatically collected technical information">
              <List
                items={[
                  "Authentication tokens (stored securely on your device using the operating system's secure storage)",
                  "Basic session data such as your last login timestamp",
                  "Standard server logs (IP address, request timestamps, error logs) generated by our backend hosting provider for security and diagnostic purposes",
                ]}
              />
            </SubSection>

            <p className="pt-2">
              Kudistocks does <strong className="text-white">not</strong> use
              any third-party advertising, tracking, or analytics SDKs (no
              Firebase Analytics, Google Analytics, Facebook SDK, Mixpanel,
              Segment, etc.).
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <List
              items={[
                "Create and secure your account and authenticate you",
                "Provide the App's inventory, sales, order, supplier, and analytics features",
                "Deliver AI-generated insights, forecasts, and product descriptions when you use the in-app AI assistant",
                "Send transactional messages such as email/SMS one-time passwords (OTPs) and password-reset emails",
                "Send notifications you have opted into (low stock alerts, order updates, daily/weekly reports)",
                "Maintain the security and integrity of the service and prevent abuse",
                "Improve the App's stability and features",
                "Comply with legal obligations",
              ]}
            />
          </Section>

          <Section title="3. AI-Powered Features">
            <p>
              When you use the in-app AI assistant, the messages you send along
              with limited business context (such as store ID and language
              preference) are transmitted to our backend server, which may
              forward the request to a third-party large language model
              provider to generate a response. We do not send your bank account
              details, ID document, or passwords to the AI. You may choose not
              to use the AI features.
            </p>
          </Section>

          <Section title="4. How We Share Your Information">
            <p>
              We do <strong className="text-white">not</strong> sell your
              personal information. We share information only with the
              following categories of recipients, and only to the extent
              necessary:
            </p>
            <List
              items={[
                <>
                  <strong className="text-white">Service providers</strong> who
                  help us operate the App, such as our cloud hosting provider
                  (Render), email/SMS delivery providers used to send OTPs and
                  notifications, image storage providers, and the AI/LLM
                  provider that powers the AI assistant.
                </>,
                <>
                  <strong className="text-white">
                    Suppliers you choose to email
                  </strong>{" "}
                  &mdash; if you use the &ldquo;email order to supplier&rdquo; feature, the
                  supplier will receive the order details you send.
                </>,
                <>
                  <strong className="text-white">
                    Legal and regulatory authorities
                  </strong>{" "}
                  when required by law, court order, or to protect the rights,
                  property, or safety of Kudistocks, our users, or the public.
                </>,
                <>
                  <strong className="text-white">
                    In the event of a corporate transaction
                  </strong>{" "}
                  such as a merger, acquisition, or asset sale, information may
                  be transferred as part of that transaction, subject to this
                  Policy.
                </>,
              ]}
            />
          </Section>

          <Section title="5. Data Storage and Security">
            <p>
              Your account and business data are stored on secured servers
              operated by our backend hosting provider. Passwords are stored in
              hashed form and are never stored in plain text. Authentication
              tokens are stored on your device using platform-provided secure
              storage (iOS Keychain / Android Keystore). Data in transit
              between the App and our servers is protected using HTTPS/TLS.
            </p>
            <p>
              No method of transmission over the internet or method of
              electronic storage is 100% secure. While we use commercially
              reasonable measures to protect your information, we cannot
              guarantee its absolute security.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your personal and business information for as long as
              your account is active. You may request deletion of your account
              and associated data at any time by contacting us (see Section
              10). We may retain limited information after account closure
              where required for legal, tax, fraud-prevention, or accounting
              purposes.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <List
              items={[
                "Access the personal information we hold about you",
                "Correct or update inaccurate information",
                "Request deletion of your account and personal data",
                "Object to or restrict certain processing",
                "Request a portable copy of your data",
                "Withdraw consent where we rely on consent (e.g., camera, photo, and location permissions can be revoked at any time in your device settings)",
              ]}
            />
            <p>
              To exercise any of these rights, contact us at the address in
              Section 10.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              Kudistocks is intended for business owners and staff and is not
              directed to children under 13 (or under 16 in the European
              Economic Area). We do not knowingly collect personal information
              from children. If you believe a child has provided us with
              personal information, please contact us and we will delete it.
            </p>
          </Section>

          <Section title="9. International Data Transfers">
            <p>
              Kudistocks is operated from Nigeria. If you access the App from
              outside Nigeria, please be aware that information we collect may
              be transferred to, stored, and processed in Nigeria or in any
              country where our service providers maintain facilities. By
              using the App, you consent to such transfers.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your privacy rights, contact us at:
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-white font-semibold">Kudistocks</p>
              <p className="mt-1 text-sm text-gray-400">
                Email:{" "}
                <a
                  href="mailto:support@kudistocks.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  support@kudistocks.com
                </a>
              </p>
            </div>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will revise the &ldquo;Last updated&rdquo; date at the top of this page.
              Material changes will be communicated through the App or by
              email. Your continued use of the App after such changes
              constitutes your acceptance of the updated Policy.
            </p>
          </Section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─── Small presentational helpers ─── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-100 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span className="text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  );
}
