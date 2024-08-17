import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LearnSection from "@/components/LearnSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-herobg">
      <Navbar />
      <Hero />
      <Features />
      <LearnSection />
    </main>
  );
}
