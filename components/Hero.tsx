"use client";

import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="slider-one">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="vh-100"
      >

        {/* ================= SLIDE 1 ================= */}
        <SwiperSlide>
          <div className="position-relative h-100 d-flex align-items-center justify-content-center text-center overflow-hidden">

            {/* IMAGE */}
            <motion.div
              key={`s1-img-${activeIndex}`}
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/main-slider/1.jpg)" }}
            />

            {/* OVERLAY */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(15,47,37,0.45)" }}
            />

            {/* TEXT */}
            <motion.div
              key={`s1-text-${activeIndex}`}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
              className="position-relative z-1 container text-center text-white slider-one"
            >
              <p className="text-uppercase fw-semibold mb-3 font-inherit" style={{ letterSpacing: "3px" }}>
                Largest Online Madrasah
              </p>

              <h1 className="hero-heading mb-4 font-poppins">
                Islamic Online <br /> Madrasah
              </h1>

              <p className="mx-auto mb-5" style={{ maxWidth: 720 }}>
                Islamic online madrasah is an ISO certified educational institution
              </p>

              <Link href="/courses" className="btn btn-warning px-5 py-3 fw-semibold text-dark rounded">
                Find The Course
              </Link>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* ================= SLIDE 2 ================= */}
        <SwiperSlide>
          <div className="position-relative h-100 d-flex align-items-center justify-content-center text-center overflow-hidden">

            <motion.div
              key={`s2-img-${activeIndex}`}
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/main-slider/2.jpg)" }}
            />

            <motion.div
              key={`s2-text-${activeIndex}`}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
              className="position-relative z-1 container text-center text-white slider-one"
            >
              <p className="text-uppercase fw-semibold mb-3 font-poppins">
                Learn Quran Online
              </p>

              <h1 className="display-4 fw-bold mb-4 font-poppins">
                Best Islamic <br /> Education
              </h1>

              <p className="lead mb-5 mx-auto font-poppins" style={{ maxWidth: 580 }}>
                Learn Quran, Tafseer, and Islamic studies with expert teachers.
              </p>

              <Link href="/courses" className="btn btn-warning px-5 py-3 fw-semibold text-dark rounded font-poppins">
                Browse Courses
              </Link>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* ================= SLIDE 3 ================= */}
        <SwiperSlide>
          <div className="position-relative h-100 d-flex align-items-center justify-content-center text-center overflow-hidden">

            <motion.div
              key={`s3-img-${activeIndex}`}
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/main-slider/3.jpg)" }}
            />

            <motion.div
              key={`s3-text-${activeIndex}`}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
              className="position-relative z-1 container text-white"
            >
              <p className="text-uppercase fw-semibold mb-3 font-poppins">
                Start Your Journey
              </p>

              <h1 className="display-4 fw-bold mb-4 font-poppins">
                Learn Islam <br /> From Home
              </h1>

              <p className="lead mb-5 mx-auto font-poppins" style={{ maxWidth: 580 }}>
                Flexible timings, male & female teachers, and affordable courses.
              </p>

              <Link href="/contact" className="btn btn-warning px-5 py-3 fw-semibold text-dark rounded font-poppins">
                Quick Join
              </Link>
            </motion.div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}
