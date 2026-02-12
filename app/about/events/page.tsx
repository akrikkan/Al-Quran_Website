"use client";
import InnerHero from "@/components/InnerHero";
import EventsGrid from "@/components/about/EventsGrid";
import CTASection from "@/components/CTASection";



export default function EventsPage() {
  return (
    <>
      <InnerHero
        title="About"
        breadcrumb="Home - Events"
      />
        <EventsGrid />
        <CTASection />
    </>
  );
}