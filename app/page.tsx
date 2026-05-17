import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Benefits from "@/components/benefits";
import Testimonials from "@/components/testimonials";
import Comparison from "@/components/comparison";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
