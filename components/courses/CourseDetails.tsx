"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function CourseDetails() {
  const [tab, setTab] = useState("curriculum");

  // ✅ MUST be inside component
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const course = {
    img: "/images/courses/course-1.jpg",
    title: "Quran Reading Course",
    desc:
      "Develop accurate and fluent Quran reading with correct pronunciation and guided practice."
  };

  return (
    <section className="py-16 font-poppins bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* IMAGE + TITLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-10"
        >
          <img
            src={course.img}
            alt={course.title}
            className="w-1/2 max-h-[420px] object-cover rounded-2xl shadow-md mx-auto"
          />
            <br />
          <h1 className="text-3xl md:text-4xl font-bold mt-6 text-green-900">
            {course.title}
          </h1>

          <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
            {course.desc}
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="bg-white shadow-lg rounded-xl p-6 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <div>
              <p className="text-green-700 font-bold text-2xl">20</p>
              <p className="text-gray-600">Lessons</p>
            </div>
            <div>
              <p className="text-green-700 font-bold text-2xl">10</p>
              <p className="text-gray-600">Weeks</p>
            </div>
            <div>
              <p className="text-green-700 font-bold text-2xl">50</p>
              <p className="text-gray-600">Students</p>
            </div>
            <div>
              <p className="text-yellow-500 font-bold text-2xl">$92</p>
              <p className="text-gray-600">Course Fee</p>
            </div>
          </div>
        </motion.div>

        {/* FEATURES + HELPLINE */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">

          {/* FEATURES */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-white rounded-xl shadow p-6"
          >
            <h3 className="text-xl font-bold mb-4">Course Features</h3>

            <div className="space-y-3">
              {[
                ["Course Fee", "$92.00"],
                ["Lessons", "12"],
                ["Duration", "12 hours"],
                ["Students", "50"],
                ["Category", "Islam"],
                ["Level", "Advanced"]
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between bg-gray-100 rounded-lg px-4 py-3"
                >
                  <span className="text-gray-700">{item[0]}</span>
                  <span className="text-green-700 font-semibold">
                    {item[1]}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-green-900 py-3 text-white rounded-lg font-semibold hover:bg-green-700 transition">
              Apply Now
            </button>
          </motion.div>

          {/* HELPLINE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="rounded-xl shadow-lg p-8 text-center bg-gradient-to-b from-yellow-400 to-green-600 text-white"
          >
            <motion.img
              src="/images/about/badge.png"
              alt="logo"
              className="w-20 h-20 mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />

            <p className="text-xl mb-4">
              If you have any further query <br /> then you can contact our helpline
            </p>
              
            <div className="bg-white text-green-900 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3 text-2xl">
              📞
            </div>
              <br />
            <h4 className="text-xl font-bold">Helpline: 0241-21131</h4>
            <br />
            <p>(10AM-5PM)</p>
          </motion.div>
        </div>

        {/* OVERVIEW */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="space-y-5 text-lg md:text-xl text-gray-600 leading-8">

  <p>
    This course is designed for students who want to improve their Quran reading
    skills with accuracy and confidence. It focuses on correct pronunciation,
    proper articulation of letters, and understanding the basic rules of Tajweed
    through guided learning and regular practice.
  </p>

  <p>
    Students will receive structured lessons from qualified teachers who provide
    continuous support, correction, and feedback. The program helps learners
    gradually improve fluency, avoid common mistakes, and develop a consistent
    and disciplined recitation habit.
  </p>

  <p>
    In addition to reading improvement, the course strengthens the student’s
    connection with the Holy Quran by encouraging regular revision, listening
    practice, and confidence building. Each level is carefully organized to
    ensure steady progress according to the learner’s ability.
  </p>

  <p>
    By the end of the course, students will be able to recite the Quran more
    clearly, apply essential Tajweed rules correctly, and continue their Quran
    learning journey with greater confidence and understanding.
  </p>

</div>

        </motion.div>

        {/* TABS */}
        <div className="mb-6 flex flex-wrap gap-4">
          {["curriculum", "instructor", "review", "faq"].map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t);
                setOpenItem(null); // reset accordion
              }}
              className={`px-6 py-3 rounded-md font-semibold capitalize transition ${
                tab === t
                  ? "bg-green-600 text-white"
                  : "bg-green-900 text-white hover:bg-blue-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <motion.div variants={fadeUp} initial="hidden" animate="show">

          {tab === "curriculum" && (
  <div>

    {/* Curriculum Explanation */}
    <p className="text-gray-600 mb-6 leading-7 text-lg">
      This curriculum is carefully structured to guide students from basic Quran
      reading to advanced recitation. It focuses on correct pronunciation,
      Tajweed application, memorization techniques, and continuous practice
      under qualified teachers. Each level is designed to build confidence,
      accuracy, and a strong connection with the Holy Quran.
    </p>

    {/* Curriculum List */}
    <div className="space-y-4">
      {[
        {
          title: "Quran Literacy Level 1",
          text: "Introduction to Arabic letters, recognition, and basic reading practice for beginners."
        },
        {
          title: "Basic Quran Memorization Level 2",
          text: "Memorization techniques with daily revision plans and teacher supervision."
        },
        {
          title: "Quran Tajweed Level 1",
          text: "Learning articulation points, letter characteristics, and Tajweed rules."
        },
        {
          title: "Intermediate Quran Reading",
          text: "Improving fluency, correcting mistakes, and increasing reading confidence."
        },
        {
          title: "Advanced Recitation Training",
          text: "Advanced Tajweed application and beautification of recitation."
        }
      ].map((item, index) => (
        <div key={index} className="shadow rounded-lg overflow-hidden">
          <div
            onClick={() => toggleItem(index)}
            className="bg-gray-700 text-white p-4 flex justify-between cursor-pointer"
          >
            {item.title}
            <span className="text-xl">
              {openItem === index ? "−" : "+"}
            </span>
          </div>

          {openItem === index && (
            <div className="bg-gray-100 p-4 text-gray-600">
              {item.text}
            </div>
                )}
                </div>
            ))}
            </div>
        </div>
        )}


          {/* Instructor */}
          {tab === "instructor" && (
            <div className="grid md:grid-cols-2 gap-6 ">
              {[
                "Adul Nobi",
                "Ahmed Hany",
                "Osama Gamal",
                "Mohamed Ali",
                "Yusuf Kareem"
              ].map((name, i) => (
                <div key={i} className="bg-gray-300 p-4 rounded-lg shadow">
                  <h4 className="font-bold text-green-900">{name}</h4>
                  <p className="text-gray-600">
                    Experienced Quran teacher specializing in Tajweed and memorization.
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Review */}
          {tab === "review" && (
            <div className="space-y-4">
              {["Excellent course", "Very helpful teachers","Modern Teching Methods","Good Guidences", "Highly recommended"].map((text, i) => (
                <div key={i} className="bg-gray-200 p-4 rounded-lg shadow text-gray-600">
                  {text}
                </div>
              ))}
            </div>
          )}

          {/* FAQ */}
{tab === "faq" && (
  <div>

    {/* FAQ Introduction */}
    <p className="text-gray-600 mb-6 leading-7 text-lg">
      Below are some common questions about the Quran Reading Course. These answers
      will help you understand how the classes are conducted, who can join, and what
      you can expect from the learning process.
    </p>

    {/* FAQ Accordion */}
    <div className="space-y-4">

      {[
        {
          q: "Who can join this course?",
          a: "This course is open to students of all ages and levels, including beginners who want to start Quran reading and advanced learners who want to improve fluency and Tajweed."
        },
        {
          q: "Are the classes conducted online or offline?",
          a: "All classes are conducted online through live sessions with qualified teachers, allowing students to learn from home with full interaction and guidance."
        },
        {
          q: "What is the duration of the course?",
          a: "The course duration depends on the student’s level and progress. On average, it runs for 8 to 12 weeks with regular weekly sessions."
        },
        {
          q: "Will I receive a certificate after completion?",
          a: "Yes, students who successfully complete the course and meet the required standards will receive a course completion certificate."
        },
        {
          q: "Do you provide classes for children?",
          a: "Yes, we offer special teaching methods designed for children, including interactive lessons, patience-based instruction, and personalized attention."
        },
        {
          q: "How are student progress and performance monitored?",
          a: "Teachers regularly assess reading accuracy, Tajweed application, and memorization progress, and provide feedback to help students improve continuously."
        }
      ].map((faq, index) => (
        <div key={index} className="shadow rounded-lg overflow-hidden">

          {/* Question Header */}
          <div
            onClick={() => toggleItem(index)}
            className="bg-gray-700 text-white p-4 flex justify-between items-center cursor-pointer"
          >
            <span className="font-medium">{faq.q}</span>
            <span className="text-xl">
              {openItem === index ? "−" : "+"}
            </span>
          </div>

          {/* Answer */}
          {openItem === index && (
            <div className="bg-gray-100 p-4 text-gray-600 leading-7">
              {faq.a}
            </div>
          )}

        </div>
      ))}

    </div>
  </div>
)}


        </motion.div>

      </div>
    </section>
  );
}
