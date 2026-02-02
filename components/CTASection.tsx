export default function CTASection() {
  return (
    <section className="cta-two relative z-[5] -mb-[90px]">
      <div className="auto-container relative max-w-[1390px] mx-auto px-4">
        <div className="inner-container d-flex justify-content-between align-items-center flex-wrap relative overflow-hidden">

          {/* Background image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-left bg-contain opacity-100 z-0"
            style={{
              backgroundImage: "url('/images/background/cta-one_bg.png')",
            }}
          />

          {/* LEFT ICON */}
          <div className="cta-two_icon relative z-10">
            <span className="block w-[38px] h-[56px] border-2 border-black"></span>
          </div>

          {/* TEXT */}
          <h3 className="cta-two_heading font-poppins !text-[34px] !sm:text-[22px] relative z-10 max-w-[720px]">
            Proud To Be Serving Thousands Of Muslim <br />
            Families Around The World
          </h3>

          {/* BUTTON */}
          <div className="cta-two_button relative z-10">
            <a href="/contact" className="theme-btn !no-underline btn-style-three">
              Get In Touch
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
