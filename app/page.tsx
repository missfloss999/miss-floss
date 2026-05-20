import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Features from "@/components/features";
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
        <Features />
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
