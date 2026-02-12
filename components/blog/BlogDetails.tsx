"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

export default function BlogDetails() {
  return (
    <section className="py-16 bg-yellow-50 font-poppins">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* ========================
            MAIN IMAGE
        ======================== */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <div className="flex justify-center">
  <div className="
      w-[70%] sm:w-[60%] md:w-3/4 lg:w-1/2
      h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px]
      overflow-hidden rounded-2xl shadow-lg
    ">
    <img
      src="/images/resource/news-1.jpg"
      alt="Blog"
      className="w-full h-full object-cover transition duration-500 hover:scale-110"
    />
  </div>
</div>

                <br />

          <h1 className="text-3xl md:text-4xl font-bold text-black mt-6">
            Islamic Studies for kids and the Prophet Sunnah
          </h1>

          <p className="mt-4 text-gray-600 text-lg leading-8">
            This article highlights the importance of teaching Islamic values to
            children through structured learning and practical guidance. It
            helps build strong faith, good character, and a balanced
            understanding of daily Islamic practices.
          </p>
        </motion.div>

        {/* ========================
            BIG DESCRIPTION
        ======================== */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          className="space-y-6 text-lg text-gray-700 leading-8 mb-12"
        >
          <p>
            Islamic education for children focuses on building a strong
            foundation of faith, discipline, and moral values. Through engaging
            lessons and practical examples, students learn how to apply Islamic
            teachings in their daily lives.
          </p>

          <p>
            Teaching the Sunnah helps children understand kindness, patience,
            honesty, and responsibility. It also strengthens their connection
            with Allah and encourages consistent worship and good behavior.
          </p>

          <div className="bg-gray-100 p-6 rounded-xl text-green-700 text-xl italic">
            “Islamic education shapes character, strengthens faith, and guides
            children toward a balanced and purposeful life.”
          </div>
        </motion.div>

        {/* ========================
            SUNNAH SECTION
        ======================== */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          className="mb-14"
        >
          <h2 className="text-2xl font-bold mb-4">
            Sunnah in everyday life: Islamic Studies online
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            Teaching children to follow the Sunnah helps them develop good
            habits, discipline, and strong moral values.
          </p>

          <ul className="space-y-3 text-lg">
            <li>➤ Memorization and revision of short Surahs</li>
            <li>➤ Encouraging regular prayer from a young age</li>
            <li>➤ Learning kindness, honesty, and good manners</li>
          </ul>
        </motion.div>

        {/* ========================
            3 COLUMN SECTIONS
        ======================== */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Section 1 - Categories */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Blog Categories</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex justify-between">Web Design <span>10</span></li>
              <li className="flex justify-between">Online Class <span>07</span></li>
              <li className="flex justify-between">Digital Class <span>09</span></li>
              <li className="flex justify-between">Learn About Islam <span>15</span></li>
              <li className="flex justify-between">Learn Quran <span>02</span></li>
            </ul>
          </div>

          {/* Section 2 - Latest News */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Latest News</h3>

            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3 mb-4">
                <img
                  src={`/images/resource/news-${i}.jpg`}
                  className="w-14 h-14 rounded-full object-cover"
                  alt=""
                />
                <div>
                  <p className="text-sm text-gray-400">12 Sep 2025</p>
                  <p className="font-medium text-sm">
                    Best Online Quran Tutors
                  </p>
                </div>
              </div>
            ))}
          </div>

        {/* Section 3 - Tags */}
<div className="bg-white p-6 rounded-xl shadow">
  <h3 className="text-xl font-bold mb-4">Our Tags</h3>

  <ul className="space-y-3">
    {[
      "Web Design",
      "Quran Class",
      "Online",
      "School",
      "Learning",
      "Arabic"
    ].map((tag, i) => (
      <li
        key={i}
        className="bg-gray-100 px-4 py-2 rounded text-sm text-gray-700 hover:bg-green-100 transition cursor-pointer"
      >
        {tag}
      </li>
    ))}
  </ul>
</div>

        </motion.div>

        {/* ========================
            SOCIAL SHARE
        ======================== */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          className="text-center mb-12"
        >
          <h3 className="font-bold mb-4">Share this post</h3>
          <div className="flex justify-center flex-wrap gap-4">

            <button className="bg-blue-600 text-white px-5 py-2 rounded transition duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-md">
                Facebook
            </button>

            <button className="bg-sky-500 text-white px-5 py-2 rounded transition duration-300 hover:bg-sky-600 hover:-translate-y-1 hover:shadow-md">
                Twitter
            </button>

            <button className="bg-green-600 text-white px-5 py-2 rounded transition duration-300 hover:bg-green-700 hover:-translate-y-1 hover:shadow-md">
                WhatsApp
            </button>

            <button className="bg-red-600 text-white px-5 py-2 rounded transition duration-300 hover:bg-red-700 hover:-translate-y-1 hover:shadow-md">
                Pinterest
            </button>

            </div>

        </motion.div>

        {/* ========================
            COMMENTS
        ======================== */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          className="mb-10"
        >
          <h3 className="text-2xl font-bold mb-6">2 Comments</h3>

          {[1, 2].map((c) => (
            <div key={c} className="flex gap-4 mb-6">
              <img
                src="/images/resource/author-2.png"
                className="w-16 h-16 rounded-full object-cover"
                alt=""
              />
              <div>
                <h4 className="font-semibold">User Name</h4>
                <p className="text-sm text-gray-400">Nov 05, 2025</p>
                <p className="text-gray-600">
                  This article is very helpful and informative for Islamic
                  learning.
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ========================
            COMMENT FORM
        ======================== */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Leave a Reply</h3>

          <form className="max-w-2xl mx-auto space-y-4">

        <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-0"
        />

        <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-0"
        />

        <textarea
            placeholder="Enter your comment"
            rows={5}
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-0"
        />

        <button className="bg-green-900 text-white px-8 py-3 rounded hover:bg-green-700 transition">
            Post Comment
        </button>

        </form>

        </motion.div>

      </div>
    </section>
  );
}
