"use client";

import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      href: "/courses/quran-reading",
      img: "/images/courses/course-1.jpg",
      title: "Quran Reading",
      desc:
        "Develop accurate and fluent Quran reading with correct pronunciation, proper articulation, and guided practice under qualified instructors.",
    },
    {
      href: "/courses/tajweed",
      img: "/images/courses/course-2.jpg",
      title: "Tajweed Course",
      desc:
        "Master Tajweed rules to ensure correct and beautiful Quran recitation through practical training and regular guidance.",
    },
    {
      href: "/courses/tafseer",
      img: "/images/courses/course-3.jpg",
      title: "Tafseer (Quran Explanation)",
      desc:
        "Understand Quran meanings, context, and wisdom through authentic Tafseer and structured learning.",
    },
    {
      href: "/courses/islamic-studies",
      img: "/images/courses/course-4.jpg",
      title: "Islamic Studies",
      desc:
        "Study Aqeedah, Fiqh, Hadith, and Seerah to strengthen Islamic knowledge and practical understanding.",
    },
    {
      href: "/courses/hifz",
      img: "/images/courses/course-5.jpg",
      title: "Quran Hifz (Memorization)",
      desc:
        "Memorize the Quran with structured planning, regular revision, and personalized guidance for strong retention.",
    },
    {
      href: "/courses/kids",
      img: "/images/courses/course-6.jpg",
      title: "Kids Quran Classes",
      desc:
        "Engaging Quran learning for children using age-appropriate methods and supportive teaching.",
    },
  ];

  return (
    <section className="py-14 px-14 bg-white">
      <div className="container">

        {/* Page Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl fw-bold text-gray-800 mb-3 !text-green-900">
            Our Courses
          </h2>
          <p className="text-gray-600 !text-green-700">
            Explore our Islamic learning programs designed to help students of all ages strengthen their faith and improve Quran understanding.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="row g-4">
          {courses.map((c, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="h-100 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                
                {/* Image */}
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-100 object-cover"
                />

                <div className="p-4">

                  {/* Title */}
                  <h4 className="fw-bold !mb-2">
                    <Link
                      href={c.href}
                      className="hover:text-emerald-600 !no-underline !text-green-900 transition"
                    >
                      {c.title}
                    </Link>
                  </h4>

                  {/* Description (50% reduced) */}
                  <p className="text-gray-600 !text-sm !mb-4">
                    {c.desc}
                  </p>

                  {/* STATS */}
                  <ul className="course-block_one-list d-flex justify-content-between mb-3 list-unstyled">
                    <li><span className="fw-bold text-success">20</span> lessons</li>
                    <li><span className="fw-bold text-success">10</span> weeks</li>
                    <li><span className="fw-bold text-success">50</span> enroll</li>
                  </ul>

                  {/* TEXT */}
                  <div className="course-block_one-text text-muted mb-3">
                    There are many variations of class passages available online
                  </div>

                  {/* BUTTON + PRICE */}
                  <div className="course-block_one-buttons d-flex justify-content-between align-items-center">
                    <Link href={c.href} className="course-block_one-study btn btn-success px-3 py-2">
                      Study Now
                    </Link>

                    <div className="course-block_one-price fw-bold">
                      $45.00 <span className="text-success">$32.00</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
