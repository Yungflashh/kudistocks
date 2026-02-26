import Hero from "@/components/Hero";
import {
  AboutSection,
  FeaturesSection,
  HowItWorksSection,
  TestimonialsSection,
  CTASection,
  FAQSection,
  FooterCTA,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <main className="bg-[#0a0e27] text-white overflow-hidden">
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <FooterCTA />
      <Footer />
    </main>
  );
}
