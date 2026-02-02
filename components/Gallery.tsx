"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


export default function GalleryOne() {
  const images = [1, 2, 3, 4];

  return (
    <section className="gallery-one pt-[25px] sm:pt-[30px] md:pt-[35px] pb-[35px] sm:pb-[40px] md:pb-[45px]">
  <div className="container mb-8 md:mb-10">
    <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">

      <div>
        <div className="sec-title_title font-poppins font-bold text-[13px] sm:text-[14px]">
          Student Gallery
        </div>

        <h2
          className="
            sec-title_heading font-poppins font-bold text-black
            text-[26px] leading-[32px]
            sm:text-[32px] sm:leading-[38px]
            md:text-[40px] md:leading-[46px]
            lg:text-[45px]
          "
        >
          Our Islamic Institute <br className="hidden sm:block" />
          Academy Gallery
        </h2>
      </div>

      <a
        href="/contact"
        className="
          btn btn-success
          px-4 py-2
          w-full sm:w-auto
          text-center
        "
      >
        Quick Start Now
      </a>

    </div>
  </div>


      {/* RTL wrapper */}
      <div dir="rtl" className="swiper-rtl-fix">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}

          loop={true}
          loopAdditionalSlides={8}

          autoplay={{
            delay: 3000, // 15 seconds
            disableOnInteraction: false,
          }}

          speed={1000}
          observer={true}
          observeParents={true}
          watchSlidesProgress={true}

          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {[...images, ...images, ...images].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="gallery-block_one">
                <div className="gallery-block_one-inner">
                  <div className="gallery-block_one-image ">
                    <img
                      src={`/images/gallery/${item}.jpg`}
                      alt="Gallery"
                      className="w-full h-full object-cover"
                    />

                    <a href="/service-detail" className="gallery-block_one-arrow">
                      <span className="square-icon"></span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
