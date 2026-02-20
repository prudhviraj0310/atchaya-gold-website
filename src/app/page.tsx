import GoldRateTicker from "@/components/GoldRateTicker";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GoldRateDisplay from "@/components/GoldRateDisplay";
import GoldCalculator from "@/components/GoldCalculator";
import TrustSection from "@/components/TrustSection";
import ProcessFlow from "@/components/ProcessFlow";
import VideoShowcase from "@/components/VideoShowcase";
import BranchCards from "@/components/BranchCards";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Home() {
  return (
    <main className="relative">
      <GoldRateTicker />
      <Navbar />
      <Hero />
      <GoldRateDisplay />
      <GoldCalculator />
      <TrustSection />
      <ProcessFlow />
      <VideoShowcase />
      <BranchCards />
      <FAQSection />
      <ContactForm />
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
