"use client";
import InnerHero from "@/components/InnerHero";
import Courses from "@/components/Courses";
import Pricing from "@/components/about/Pricing";



export default function PricePage() {
  return (
    <>
      <InnerHero
        title="About"
        breadcrumb="Home - Price"
      />
      <Courses />
      <Pricing />
    </>
  );
}