"use client";
import InnerHero from "@/components/InnerHero";
import EventDetailsPage from "@/components/about/EventDetailsPage";



export default function DetailsPage() {
  return (
    <>
      <InnerHero
        title="About"
        breadcrumb="Home - Event Details"
      />
        <EventDetailsPage />
    </>
  );
}