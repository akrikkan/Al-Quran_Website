"use client";
import InnerHero from "@/components/InnerHero";
import CTASection from "@/components/CTASection";
import Services from "@/components/services/Services";

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        title="Services"
        breadcrumb="Home - Services"
      />
      <Services />
      <CTASection />
    </>
  );
}
