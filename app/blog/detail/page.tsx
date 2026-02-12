"use client";
import InnerHero from "@/components/InnerHero";
import BlogDetails from "@/components/blog/BlogDetails";
import CTASection from "@/components/CTASection";

export default function DetailPage() {
  return (
    <>
      <InnerHero
        title="Blog"
        breadcrumb="Blogs-Details"
      />
        <BlogDetails />
        <CTASection />
    </>
  );
}