"use client";
import CountUp from "@/components/CountUp";

export default function Students() {
  return (
    <section className="relative -mt-[80px] pb-[110px]">
      <div className="max-w-[1390px] mx-auto relative">

        {/* GREEN CONTAINER */}
       <div className="
          relative bg-[#1F8F5A] rounded-[5px] pt-[55px]
          px-6 sm:px-10 lg:px-[140px] lg:pl-[150px]
        ">

          {/* Background Pattern */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/images/background/student-bg.png)" }}
          />

          <div className="relative grid grid-cols-12">

            {/* LEFT COLUMN */}
            <div className="
              col-span-12 lg:col-span-5
              pb-[40px]
              text-white
              text-left lg:text-left
            ">

              <h3 className="students-one_title">
        Alhamdulillah we have reached over
      </h3>

      <div className="students-one_text">
         We are grateful to Allah for guiding us to educate thousands of students worldwide,
  delivering quality Islamic knowledge with dedication, trust, and excellence.
      </div>
    

              {/* COUNTER */}
              <div className="students-one_counter-inner
                 flex flex-col 
                 items-center
                  lg:block
                  pl-0 lg:pl-[150px]
                  mt-10
                  space-y-4
                 ">

                <div className="
                students-one_counter-icon
                relative
                lg:absolute
                mb-4
              ">

                  <span className="square-icon"></span>
                </div>
               <div className="text-[64px] font-semibold leading-[46px]">
                  <CountUp end={18000} />+
                </div>
                <div className="text-[24px]">
                  Active Students
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-span-12 lg:col-span-7 relative z-10">

              {/* WHITE CARD */}
              <div className="
                relative bg-white rounded-t-[46px]
                px-6 sm:px-10 lg:px-[45px]
                pt-[55px]
              ">


                {/* white bottom extension (replaces ::before) */}
                <div className="absolute inset-x-0 -bottom-[90px] h-[90px] bg-white rounded-b-[46px]" />

                {/* pattern overlay (replaces ::after) */}
                <div
                  className="absolute -left-[12px] -top-[12px] w-[calc(100%+24px)] h-[430px] -z-10 bg-cover"
                  style={{ backgroundImage: "url(/images/background/students-one_pattern.png)" }}
                />

                {/* TOP RATED */}
                <div className="relative min-h-[116px] pl-[150px] mb-[45px]">
                  <div className="absolute left-0 top-[3px]
                w-[119px] h-[116px]
                bg-[#FFD35A] border border-black rounded-[10px]
                flex flex-col items-center justify-center
                text-[#1a1a1a]">

                {/* Stars */}
                <div className="text-[20px] mb-2 leading-none">
                  ★ ★ ★
                </div>

                {/* Rating */}
                <div className="text-[56px] font-bold leading-none">
                  4.5
                </div>

              </div>


                <h4 className="top-rated_heading">
                  Top Ratings on Trustpilot
                </h4>

                <div className="top-rated_text">
                  Lorem ipsum generators on the internet tend to repeat predefined
                  chunks necessary on making this the first velit esse cillum dolore
                </div>
                          </div>

                {/* PASS OUT */}
                <div className="relative min-h-[116px] pl-[150px] mb-[30px]">
                  <div className="absolute left-0 top-[3px] w-[119px] h-[116px] bg-[#1F8F5A] border border-black rounded-[10px] text-white font-semibold text-[46px] text-center pt-[45px]">
                    22k
                  </div>

                  <h4 className="top-rated_heading">
                    pass out
                  </h4>

                  <p className="top-rated_text">
                    Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt to labore et dolore pass out
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
