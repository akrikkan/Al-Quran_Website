"use client";
import InnerHero from "@/components/InnerHero";
import CTASection from "@/components/CTASection";
import ImageScroll from "@/components/services/ImageScroll";

export default function DetailsPage() {
  const services = [
    {
      title: "Online Quran Classes",
      text:
        "Learn Quran online with qualified teachers through live sessions, flexible schedules, and personalized attention.",
    },
    {
      title: "Tajweed & Recitation",
      text:
        "Improve your Quran recitation with proper Tajweed rules taught step-by-step by expert instructors.",
    },
    {
      title: "Hifz Program",
      text:
        "Structured memorization program for children and adults with daily lessons, revision plans, and progress tracking.",
    },
    {
      title: "Kids Quran Classes",
      text:
        "Friendly Quran learning environment for kids using interactive teaching methods and easy lesson structures.",
    },
    {
      title: "Islamic Studies",
      text:
        "Learn Islamic beliefs, Fiqh, Seerah, Duas, and daily life teachings according to Quran and Sunnah.",
    },
    {
      title: "One-to-One Sessions",
      text:
        "Personalized private classes with dedicated tutors focusing on individual learning pace and goals.",
    },
  ];

  return (
    <>
      <InnerHero
        title="Services"
        breadcrumb="Services-Details"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">

          {/* Page Title */}
          <div className="text-center px-06 mb-14">
            <h2 className="text-3xl md:text-4xl fw-bold !font-poppins !text-green-900 mb-3">
              Our Services
            </h2>
            <p className="max-w-[900px] mx-auto text-center text-gray-600 !text-green-700 leading-relaxed">
              We provide high-quality Islamic education and online Quran learning services for students of all ages around the world. Our programs are designed to make learning accessible, engaging, and rooted in authentic Islamic teachings, helping students strengthen their faith, improve Quran recitation, and gain a deeper understanding of Islam from the comfort of their homes.
            </p>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12"
              >
                <div
                  className="h-100 bg-white rounded-xl p-6 border
                             hover:shadow-lg transition
                             hover:-translate-y-1"
                >
                  <h4 className="fw-bold mb-3 !font-poppins !text-green-800">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <ImageScroll />
      <CTASection />
    </>
  );
}
