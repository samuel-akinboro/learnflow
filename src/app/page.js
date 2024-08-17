import CTASection from "@/components/CTASection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearnSection from "@/components/LearnSection";
import Navbar from "@/components/Navbar";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-herobg">
      <Navbar />
      <Hero />
      <Features />
      <LearnSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}
