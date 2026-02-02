"use client";

import { motion,Variants } from "framer-motion";

/* =====================
   Framer Motion Variants
===================== */
const containerVariants : Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants : Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

export default function Institute() {
  return (
    <section className="institute-one py-[100px] pb-[80px] relative">
      <div className="auto-container max-w-[1200px] mx-auto">

        {/* =====================
           Section Title
        ===================== */}
        <div className="text-center mb-[60px]">
          <div className="text-[16px] sm:text-[18px] md:text-[20px] font-bold uppercase tracking-wide font-poppins text-green-700">
            WHY TO CHOOSE US
          </div>
          <h2 className="!text-[50px] sm:text-[48px] md:text-[56px] lg:text-[70px] xl:text-[80px] leading-[1.15] font-bold font-poppins text-black mt-3">
            Why Choose Our Islamic <br /> Institute
          </h2>
        </div>

        {/* =====================
           Cards Row
        ===================== */}
        <motion.div
          className="row clearfix"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Block 1 */}
          <motion.div
            variants={cardVariants}
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4"
          >
            <div className="institute-card min-h-[420px] bg-light-green">
              <span className="hover-bismillah" />

              <div className="icon-circle">
                <span className="icon-square" />
              </div>

              <h4 className="card-title">
                Expert Quran <br /> Tutor
              </h4>

              <p className="card-text">
                All the classes of online Quran teaching are conducted by well
                qualified Islamic scholars
              </p>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            variants={cardVariants}
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4"
          >
            <div className="institute-card min-h-[420px] bg-light-green">
              <span className="hover-bismillah" />

              <div className="icon-circle">
                <span className="icon-square" />
              </div>

              <h4 className="card-title">
                We Value Our <br /> Students
              </h4>

              <p className="card-text">
                All the classes of online Quran teaching are conducted by well
                qualified Islamic scholars
              </p>
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            variants={cardVariants}
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4"
          >
            <div className="institute-card min-h-[420px] bg-gray-soft">
              <span className="hover-bismillah" />

              <div className="icon-circle">
                <span className="icon-square" />
              </div>

              <h4 className="card-title">
                Male Female <br /> Teachers
              </h4>

              <p className="card-text">
                All the classes of online Quran teaching are conducted by well
                qualified Islamic scholars
              </p>
            </div>
          </motion.div>

          {/* Block 4 */}
          <motion.div
            variants={cardVariants}
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4"
          >
            <div className="institute-card min-h-[420px] bg-cream">
              <span className="hover-bismillah" />

              <div className="icon-circle">
                <span className="icon-square" />
              </div>

              <h4 className="card-title">
                Flexible <br /> Timings
              </h4>

              <p className="card-text">
                All the classes of online Quran teaching are conducted by well
                qualified Islamic scholars
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
