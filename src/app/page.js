"use client";
import CTASection from "@/components/CTASection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearnSection from "@/components/LearnSection";
import Navbar from "@/components/Navbar";
import TestimonialSection from "@/components/TestimonialSection";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

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
