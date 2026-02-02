"use client";

export default function Welcome() {
  return (
    <section className="welcome-one">

      {/* LEFT BACKGROUND DOT IMAGE (animated) */}
      <div
        className="welcome-one_pattern"
        style={{ backgroundImage: "url(/images/background/pattern-1.png)" }}
      />

      {/* RIGHT BACKGROUND DOT IMAGE (animated) */}
      <div
        className="welcome-one_pattern-two"
        style={{ backgroundImage: "url(/images/background/pattern-2.png)" }}
      />

      <div className="auto-container">
        <div className="row clearfix">

          {/* LEFT CONTENT */}
          <div className="welcome-one_content-column  col-lg-6 col-md-12 col-sm-12">
            <div className="welcome-one_content-outer">

              {/* TITLE */}
              <div className="sec-title">
                <div className="sec-title_title d-flex align-items-left">
                  ISLAMIC ONLINE MADRASAH
                  <span>
                    <img src="/images/icons/bismillah-2.png" alt="Bismillah" />
                  </span>
                </div>

                <h2 className="sec-title_heading">
                  Welcome To Imman Quran Institute
                </h2>

                <div className="sec-title_text">
                  We welcome our users to Online Quran teaching services where we
                  are offering multiple Islamic as well as character building and
                  life reformation courses as per the teachings of Sharia.
                </div>
              </div>

              {/* CONTENT */}
              <div className="welcome-one_content ">
                <div className="welcome-one_content-image">
                  <img src="/images/resource/welcome.jpg" alt="Student" />
                </div>

                <div className="sec-title_text ">
                  There are many variations of passages of lorem ipsum available,
                  but the majority have suffered business consulting
                </div>

                <div className="welcome-one_learn">
                  <span className="welcome-one_learn-icon"></span>
                  Learn Online at Your <br /> Own Pace
                </div>
              </div>

              <div className="sec-title_text text-left ">
                <br />We offer our students high-quality Arabic and Quran at affordable
                prices that meet their budget.
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="welcome-one_image-column col-lg-6 col-md-12 col-sm-12">
            <div className="welcome-one_image-outer">

              {/* AMEEN ICON (ONLY ANIMATION) */}
              <div className="welcome-one_ameen">
                <img src="/images/icons/ameen-1.png" alt="Ameen" />
              </div>

              {/* MAIN IMAGE */}
              <div className="welcome-one_image">
                <img src="/images/resource/welcome-1.jpg" alt="Quran" />
              </div>

              {/* YEARS BADGE */}
              <div className="welcome-one_years d-flex align-items-center flex-wrap">
                Since 1995 Operating in the world
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
