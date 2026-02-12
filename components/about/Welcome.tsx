"use client";

export default function Welcome() {
  return (
    <section className="welcome-one">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-left">
            
            <div
        className="welcome-one_pattern"
        style={{ backgroundImage: "url(/images/background/pattern-1.png)" }}
      />

          {/* ================= LEFT SIDE ================= */}
          <div className="relative">

            {/* Ameen Overlay */}
            <div className="welcome-one_ameen top-0 left-10 w-16 h-16">
                <img src="/images/icons/ameen-1.png" alt="Ameen" />
              </div>

            {/* Main Image */}
                <img
            src="/images/about/main.jpeg"
            alt="Main"
            className="w-full md:w-[115%] max-w-none h-[420px] md:h-[520px] object-cover rounded-2xl md:-ml-10"
            />



            
           

            {/* Small Overlap Image */}
            <div className="hidden lg:block absolute -right-12 bottom-16 w-56 border-8 border-white rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/about/father.jpeg"
                alt="Child"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ribbon */}
           <div className="welcome-one_years text-black flex items-center pl-12 flex-wrap gap-2">
                {/* Black Globe Icon */}
                <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.17a15.7 15.7 0 00-1.16-5.03A8.01 8.01 0 0119.93 11zM12 4c.83 1.2 1.46 3.02 1.64 5H10.36C10.54 7.02 11.17 5.2 12 4zM4.07 13h3.17c.22 1.86.86 3.69 1.76 5.03A8.01 8.01 0 014.07 13zM7.24 11H4.07a8.01 8.01 0 014.93-5.03A15.7 15.7 0 007.24 11zm2.12 2h5.28c-.18 1.98-.81 3.8-1.64 5-.83-1.2-1.46-3.02-1.64-5zm6.4 5.03c.9-1.34 1.54-3.17 1.76-5.03h3.17a8.01 8.01 0 01-4.93 5.03z"/>
                </svg>
                <span className="text-black text-lg font-semibold">
                    Since 1995 Operating in the world
                </span>
                </div>
          </div>
            

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative  pl-6 lg:pl-10">

           


            {/* Rotating Badge */}
    <div className="hidden lg:block absolute -right-20 top-[200px] w-32 spin-slow">
  <img
    src="/images/about/badge.png"
    alt="Badge"
    className="w-full pointer-events-none"
  />
</div>


            {/* Subtitle */}
             <div className="sec-title_title  d-flex font-poppins align-items-left">
                  ISLAMIC ONLINE MADRASAH
                  <span>
                    <img src="/images/icons/bismillah-2.png" alt="Bismillah" />
                  </span>
                </div>

            {/* Title */}
            <h2 className="sec-title_heading text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                 Online Islamic School At Home
                </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 font-poppins">
              We welcome our users to Online Quran teaching services where we are
              offering multiple Islamic as well as character building and life
              reformation courses as per the teachings of Sharia.
            </p>

            {/* Feature 1 */}
            <div className="flex items-center gap-4 mb-6">
             <div className="welcome-one_learn h-14">
                  <span className="welcome-one_learn-icon"></span>
                  Learn Online at Your <br /> Own Pace
                </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 mb-6">
             <div className="welcome-one_learn h-14">
                  <span className="welcome-one_learn-icon"></span>
                  Islamic Philosophy and <br /> Quranic Studies
                </div>
            </div>
            

            {/* Peace Card */}
            <div className="flex items-start gap-4 mb-8">
              <img
                src="/images/about/thasbih.jpeg"
                className="w-28 h-28 object-cover rounded-lg"
              />
              <div>
                <h5 className="font-bold text-lg mb-2">Peaceful</h5>
                <p className="text-gray-500 text-sm">
                  Working for peace & serving humanity. Lorem free market to
                  available.
                </p>
              </div>
            </div>

          </div>
        
        </div>
      </div>
    </section>
  );
}
