"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

/* =====================
   Animation Variants
===================== */

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CoursesPage() {
  const courses = [
    {
      href: "/courses/quran-reading",
      img: "/images/courses/course-1.jpg",
      title: "Quran Reading Course",
      desc:
        "Develop accurate and fluent Quran reading with correct pronunciation and guided practice.",
    },
    {
      href: "/courses/tajweed",
      img: "/images/courses/course-2.jpg",
      title: "Tajweed Course",
      desc:
        "Master Tajweed rules for beautiful and correct Quran recitation with expert guidance.",
    },
    {
      href: "/courses/tafseer",
      img: "/images/courses/course-3.jpg",
      title: "Tafseer Course",
      desc:
        "Understand Quran meanings, context, and wisdom through structured Tafseer learning.",
    },
    {
      href: "/courses/islamic-studies",
      img: "/images/courses/course-4.jpg",
      title: "Islamic Studies",
      desc:
        "Learn Aqeedah, Fiqh, Hadith, and Seerah to strengthen Islamic knowledge.",
    },
    {
      href: "/courses/hifz",
      img: "/images/courses/course-5.jpg",
      title: "Quran Hifz",
      desc:
        "Memorize the Quran with structured plans and continuous revision support.",
    },
    {
      href: "/courses/kids",
      img: "/images/courses/course-6.jpg",
      title: "Kids Quran Classes",
      desc:
        "Interactive and engaging Quran learning designed especially for children.",
    },
  ];

  return (
    <motion.section
      className="py-16 px-6 md:px-12 bg-gray-50"
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      <div className="container mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold !font-poppins !text-green-900 mb-3">
            Our Courses
          </h1>
          <p className="text-gray-600 !text-green-700">
             Explore our Islamic learning programs designed to help students of all ages strengthen their faith, improve Quran recitation, and gain a clear understanding of essential Islamic beliefs and practices. Our courses combine authentic knowledge with practical guidance, supporting consistent worship, spiritual growth, and lifelong learning in a structured and supportive environment.
             </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {courses.map((c, i) => (
            <motion.div key={i} variants={cardVariants}>
              {/* Card */}
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 overflow-hidden">

                {/* Image with Zoom */}
                <div className="overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Title */}
                  <h4 className="text-xl font-bold !font-poppins !text-green-900 mb-2">
                    <Link
                      href={c.href}
                      className="hover:text-emerald-600 !no-underline !text-green-900 transition"
                    >
                      {c.title}
                    </Link>
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-lg mb-4">
                    {c.desc}
                  </p>

                  {/* Thick Divider */}
                  <hr className="border-2 border-gray-200 my-4" />

                  {/* Stats */}
                  <div className="flex justify-evenly text-base mb-3">
                    <div>
                      <span className="font-bold text-green-700">20</span> lessons
                    </div>
                    <div>
                      <span className="font-bold text-green-700">10</span> weeks
                    </div>
                    <div>
                      <span className="font-bold text-green-700">50</span> enroll
                    </div>
                  </div>

                  {/* Thick Divider */}
                  <hr className="border-2 border-gray-200 my-4" />

                  {/* Extra Text */}
                  <p className="text-gray-500 text-lg mb-5">
                    Structured classes with qualified teachers and practical training.
                  </p>

                  {/* Button + Price */}
                  <div className="flex items-center justify-evenly">

                    {/* Animated Button */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={c.href}
                        className="bg-green-900 !no-underline text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-600 transition"
                      >
                        Study Now
                      </Link>
                    </motion.div>

                    {/* Price */}
                    <div className="font-bold text-lg">
                      <span className="text-gray-400 line-through mr-2">
                        $45.00
                      </span>
                      <span className="text-green-700">$32.00</span>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}
