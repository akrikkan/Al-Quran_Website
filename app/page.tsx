"use client";
import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Students from "@/components/Students";
import Courses from "@/components/Courses";
import CTA from "@/components/CTA";
import Institute from "@/components/Institute";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;
  return (
    <main className=" bg-white dark:bg-gray-900 text-black dark:text-white">

      <Hero />
      <Featured />
      <Welcome />
      <Services />
      <Students />
      <Courses />
      <CTA />
      <Institute />
      <Testimonials />
      <Pricing />
      <Gallery />
      <NewsSection />
      <CTASection/>

    </main>
  );
}
