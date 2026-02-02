"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section
      className="testimonial-section"
      style={{
        backgroundImage: "url(/images/background/testimonial-one_bg.png)",
      }}
    >
      {/* Ameen Arabic Icon */}
      <img
        src="/images/icons/ameen-2.png"
        alt="ameen"
        className="testimonial-ameen"
      />

      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-4 col-md-12">
            <div className="testimonial-image">
              <img
                src="/images/resource/testimonial.jpg"
                alt="testimonial"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-8 col-md-12 position-relative">

                                <Swiper
                      modules={[Autoplay, Pagination]}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false, // 🔴 THIS IS IMPORTANT
                      }}
                      pagination={{
                        el: ".testimonial-footer-bullets",
                        clickable: true,
                      }}
                      onSwiper={(swiper) => {
                          // ✅ FORCE AUTOPLAY (THIS FIXES IT)
                          swiper.autoplay.start();
                        }}
                    >
              {[1, 2, 3].map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial-content">

                    {/* Rating */}
                    <div className="testimonial-rating">
                      ★ ★ ★ ★ ★
                    </div>

                    {/* Heading */}
                    <h2>Customers Review</h2>

                    {/* Text */}
                    <p>
                      Honestly i don’t have enough good words to write about
                      resala academy everyone in resala academy are very nice
                      very calm they are also flexible about your schedules.
                      i just want say
                    </p>

                    {/* Author */}
                    <div className="testimonial-author">
                      <img
                        src="/images/resource/author-1.png"
                        alt="author"
                      />
                      <div>
                        <strong>Hafiz bin Usif</strong>
                        <span>Quran Teacher</span>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
              
          </div>
        </div>
      </div>

      {/* FOOTER DOTS (FIXED POSITION) */}
      <div className="
    testimonial-footer-bullets
    !absolute
    !right-10
    !bottom-8
    !flex
    !gap-3
    !z-50
  "></div>
    </section>
  );
}
