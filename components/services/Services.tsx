"use client";

import { motion,Variants } from "framer-motion";

/* =====================
   Framer Motion Variants
===================== */
const containerVariants : Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants : Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85, // from middle
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function Services() {
  return (
    <section
      className=" py-12 md:py-16 lg:py-20"
    >
      <div className="container">

        {/* SERVICES GRID */}
        <motion.div
          className="row justify-content-center g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* CARD 1 */}
          <motion.div
            variants={cardVariants}
            className="service-block_one col-lg-4 col-md-6 col-sm-12"
          >
            <div className="service-block_one-inner !bg-gray-200">
              <div className="service-block_one-upper">
                <div className="service-block_one-icon flaticon-quran-1"></div>
                <div className="service-block_one-big_icon">
                  <img src="/images/icons/service-1.png" alt="" />
                </div>
                <h4 className="service-block_one-heading">
                  <a href="/courses">Online Quran <br /> Classes</a>
                </h4>
                <div className="service-block_one-text">
                  There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="service-block_one-lower">
                <a href="/courses" className="service-block_one-more">
                  Read More
                  <span className="square-icon"></span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={cardVariants}
            className="service-block_one col-lg-4 col-md-6 col-sm-12"
          >
            <div className="service-block_one-inner !bg-gray-200">
              <div className="service-block_one-upper">
                <div className="service-block_one-icon flaticon-pray"></div>
                <div className="service-block_one-big_icon">
                  <img src="/images/icons/service-1.png" alt="" />
                </div>
                <h4 className="service-block_one-heading">
                  <a href="/courses">Tajweed  <br /> & Recitation</a>
                </h4>
                <div className="service-block_one-text">
                  There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="service-block_one-lower">
                <a href="/courses" className="service-block_one-more">
                  Read More
                  <span className="square-icon"></span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={cardVariants}
            className="service-block_one col-lg-4 col-md-6 col-sm-12"
          >
            <div className="service-block_one-inner !bg-gray-200">
              <div className="service-block_one-upper">
                <div className="service-block_one-icon flaticon-pray"></div>
                <div className="service-block_one-big_icon">
                  <img src="/images/icons/service-1.png" alt="" />
                </div>
                <h4 className="service-block_one-heading">
                  <a href="/courses">Tafseer <br /> Course</a>
                </h4>
                <div className="service-block_one-text">
                  There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="service-block_one-lower">
                <a href="/courses" className="service-block_one-more">
                  Read More
                  <span className="square-icon"></span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            variants={cardVariants}
            className="service-block_one col-lg-4 col-md-6 col-sm-12"
          >
            <div className="service-block_one-inner !bg-gray-200">
              <div className="service-block_one-upper">
                <div className="service-block_one-icon flaticon-pray"></div>
                <div className="service-block_one-big_icon">
                  <img src="/images/icons/service-1.png" alt="" />
                </div>
                <h4 className="service-block_one-heading">
                  <a href="/courses">Kids Quran <br /> Course</a>
                </h4>
                <div className="service-block_one-text">
                  There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="service-block_one-lower">
                <a href="/courses" className="service-block_one-more">
                  Read More
                  <span className="square-icon"></span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARD 5 */}
          <motion.div
            variants={cardVariants}
            className="service-block_one col-lg-4 col-md-6 col-sm-12"
          >
            <div className="service-block_one-inner !bg-gray-200">
              <div className="service-block_one-upper">
                <div className="service-block_one-icon flaticon-pray"></div>
                <div className="service-block_one-big_icon">
                  <img src="/images/icons/service-1.png" alt="" />
                </div>
                <h4 className="service-block_one-heading">
                  <a href="/courses">Hifz Program <br /> Course</a>
                </h4>
                <div className="service-block_one-text">
                  There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="service-block_one-lower">
                <a href="/courses" className="service-block_one-more">
                  Read More
                  <span className="square-icon"></span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARD 6 */}
          <motion.div
            variants={cardVariants}
            className="service-block_one col-lg-4 col-md-6 col-sm-12"
          >
            <div className="service-block_one-inner !bg-gray-200">
              <div className="service-block_one-upper">
                <div className="service-block_one-icon flaticon-quran-2"></div>
                <div className="service-block_one-big_icon">
                  <img src="/images/icons/service-1.png" alt="" />
                </div>
                <h4 className="service-block_one-heading">
                  <a href="/courses">We Value <br /> Our Students</a>
                </h4>
                <div className="service-block_one-text">
                  There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="service-block_one-lower">
                <a href="/courses" className="service-block_one-more">
                  Read More
                  <span className="square-icon"></span>
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
