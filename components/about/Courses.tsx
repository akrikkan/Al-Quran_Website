"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

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

const cardVariants : Variants ={
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

/* =====================
   Course Card
===================== */
function CourseCard({
  image,
  icon,
  title,
}: {
  image: string;
  icon: string;
  title: string;
}) {
  return (
    <div className="course-block_one">
      <div className="course-block_one-inner">

        {/* IMAGE */}
        <div className="course-block_one-image">
          <Link href="/course-detail">
            <img src={image} alt={title} />
          </Link>
        </div>

        {/* CONTENT */}
        <div className="course-block_one-content">

          {/* ICON */}
          <div className="course-block_one-icon">
            <img src={icon} alt="" />
          </div>

          {/* TITLE */}
          <h4 className="course-block_one-heading">
            <Link href="/courses">{title}</Link>
          </h4>

          {/* STATS */}
          <ul className="course-block_one-list d-flex justify-content-between">
            <li><span>20</span>lessons</li>
            <li><span>10</span>weeks</li>
            <li><span>50</span>enroll</li>
          </ul>

          {/* TEXT */}
          <div className="course-block_one-text">
            There are many variations of lorem class passages of lorem ipsum available online
          </div>

          {/* BUTTON + PRICE */}
          <div className="course-block_one-buttons">
            <Link href="/courses" className="course-block_one-study">
              Study Now
            </Link>
            <div className="course-block_one-price">
              $45.00 <span>$32.00</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* =====================
   Courses Section
===================== */
export default function Courses() {
  return (
    <section
      className="courses-one"
      style={{ backgroundImage: "url(/images/background/courses-one_bg.png)" }}
    >
      <div className="container-fluid courses-container">
        {/* COURSES GRID */}
        <motion.div
          className="row g-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="col-xl-3 col-lg-3 col-md-6"
            variants={cardVariants}
          >
            <CourseCard
              image="/images/resource/course-1.jpg"
              icon="/images/icons/service-1.svg"
              title="Quran Intermediate Course brother"
            />
          </motion.div>

          <motion.div
            className="col-xl-3 col-lg-3 col-md-6"
            variants={cardVariants}
          >
            <CourseCard
              image="/images/resource/course-2.jpg"
              icon="/images/icons/service-2.svg"
              title="Online Quran Classes For Ladies"
            />
          </motion.div>

          <motion.div
            className="col-xl-3 col-lg-3 col-md-6"
            variants={cardVariants}
          >
            <CourseCard
              image="/images/resource/course-3.jpg"
              icon="/images/icons/service-3.svg"
              title="Online Quran Classes for Childrens"
            />
          </motion.div>

          <motion.div
            className="col-xl-3 col-lg-3 col-md-6"
            variants={cardVariants}
          >
            <CourseCard
              image="/images/resource/course-4.jpg"
              icon="/images/icons/service-4.svg"
              title="Hifz Quran (Quran Memorization Course)"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
