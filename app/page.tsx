import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Benefits from "@/components/benefits";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Comparison from "@/components/comparison";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingButtons />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
