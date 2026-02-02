"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative -mt-[90px] md:-mt-[70px] sm:-mt-[50px]">
      <div className="max-w-[1390px] mx-auto px-4">
        <div
          className="
            relative overflow-hidden rounded-md
            px-6 py-8
            sm:px-8 sm:py-10
            md:px-14 md:py-12
            lg:px-[70px] lg:py-[48px]
            xl:px-[90px] xl:py-[52px]
            bg-gradient-to-r from-[#50bc84] to-[#F3B815]
          "
        >

          {/* Background Pattern */}
          <div
            className="absolute inset-0 bg-no-repeat bg-left bg-contain opacity-100 z-0"
            style={{
              backgroundImage: "url('/images/background/cta-one_bg.png')",
            }}
          />

          {/* Content */}
          <div
            className="
              relative z-10 flex flex-col
              md:flex-row
              items-start md:items-center
              justify-between gap-6
            "
          >

            <h3
              className="
                text-white font-semibold capitalize
                text-[26px] leading-[32px]
                sm:text-[32px] sm:leading-[38px]
                md:text-[40px] md:leading-[44px]
                lg:text-[46px] lg:leading-[50px]
                xl:text-[54px] xl:leading-[54px]
                max-w-[1000px]
              "
            >
              Do Not Let Shaitan Delay You From Starting <br className="hidden md:block" />
              To Learn Your Deen.
            </h3>

            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-6 py-3
                sm:px-7
                rounded-md
                bg-[#1e8e5a] text-white font-semibold
                !no-underline hover:no-underline
                transition-all duration-300
                hover:bg-black
                w-full md:w-auto
              "
            >
              Quick Start Now
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
