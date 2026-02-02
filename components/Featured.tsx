"use client";

export default function Featured() {
  return (
    <section className="featured-one relative z-[2] -mt-[75px] md:-mt-[60px] sm:-mt-[40px]">
      <div className="max-w-[1390px] mx-auto px-4">
        <div
          className="
            rounded-md bg-[#e9f6f1] bg-repeat-x bg-center
            px-5 py-8
            sm:px-6 sm:py-9
            md:px-14 md:py-10
            lg:px-20
          "
          style={{ backgroundImage: "url(/images/icons/featured.png)" }}
        >
          <div className="row align-items-center g-5">

            <div className="col-lg-4 col-md-6 col-sm-12">
              <FeatureItem text="Learn quick Quran Classes" />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <FeatureItem text="ISO certified islamic institution" />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <FeatureItem text="Online Arabic Classes For Kids" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Feature Item */
function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start sm:items-center gap-4 sm:gap-6">

      {/* Icon */}
      <div className="feature-icon shrink-0">
        <span className="feature-icon-square"></span>
      </div>

      {/* Text */}
      <p
        className="
          text-[16px] leading-[24px]
          sm:text-[18px] sm:leading-[26px]
          md:text-[19px] md:leading-[28px]
          lg:text-[20px] lg:leading-[30px]
          font-bold text-gray-900 mb-0
        "
      >
        {text.split(" ").slice(0, 2).join(" ")} <br />
        {text.split(" ").slice(2).join(" ")}
      </p>

    </div>
  );
}


