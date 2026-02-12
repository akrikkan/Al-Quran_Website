"use client";
import InnerHero from "@/components/InnerHero";
import CourseDetails from "@/components/courses/CourseDetails";
import CTASection from "@/components/CTASection";



export default function Course1Page() {
  return (
    <>
      <InnerHero
        title="Courses"
        breadcrumb="Home - Course1 Details"
      />
       <CourseDetails />
       <CTASection />
    </>
  );
}