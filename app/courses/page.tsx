"use client";

import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      href: "/courses/quran-reading",
      img: "/images/courses/course-1.jpg",
      title: "Quran Reading",
      desc:
        "This course is designed to develop accurate and fluent Quran readingthrough structured instruction and disciplined practice.Students learn correct pronunciation, proper articulation of letters,and consistent reading flow under the guidance of qualified instructors.Emphasis is placed on precision, confidence, and respect for the sacred text,ensuring a strong foundation for higher Quranic studies.",
    },
    {
      href: "/courses/tajweed",
      img: "/images/courses/course-2.jpg",
      title: "Tajweed Course",
      desc:
        "This course focuses on mastering the rules of Tajweed to ensure correct and dignified recitation of the Holy Quran.Students learn precise articulation points, characteristics of letters,and the correct application of Tajweed principles in practical recitation.Through guided instruction and regular practice, learners develop clarity, beauty, and consistency in their Quranic recitation.",
    },
    {
      href: "/courses/tafseer",
      img: "/images/courses/course-3.jpg",
      title: "Tafseer (Quran Explanation)",
      desc:
        "This course provides a structured and in-depth understanding of the Quran through authentic Tafseer derived from reliable classical sources.Students explore the meanings, context, and wisdom behind Quranic verses,gaining insight into linguistic, historical, and thematic dimensions.The course aims to deepen comprehension, strengthen faith, and guide learners in applying Quranic teachings thoughtfully in daily life.",
    },
    {
      href: "/courses/islamic-studies",
      img: "/images/courses/course-4.jpg",
      title: "Islamic Studies",
      desc:
        "This program offers a comprehensive study of core Islamic disciplines,including Aqeedah, Fiqh, Hadith, and Seerah, through a structured curriculum.Students gain a clear understanding of Islamic beliefs, legal principles,and the life of the Prophet ﷺ based on authentic scholarly sources.The course strengthens religious knowledge, moral awareness, and practical guidance,enabling learners to apply Islamic teachings with confidence and clarity.",
    },
    {
      href: "/courses/hifz",
      img: "/images/courses/course-5.jpg",
      title: "Quran Hifz (Memorization)",
      desc:
        "This course is designed to support students in memorizing the Holy Quran through a systematic and carefully paced learning approach.Learners receive personalized guidance, structured lesson planning,and regular revision to strengthen accuracy and long-term retention.Emphasis is placed on consistency, discipline, and proper recitation,ensuring a strong and reliable foundation in Quran memorization.",
    },
    {
      href: "/courses/kids",
      img: "/images/courses/course-6.jpg",
      title: "Kids Quran Classes",
      desc:
        "These classes are specially designed to introduce children to Quran and essential Islamic teachings in a supportive and engaging environment.Lessons are structured to suit young learners, combining clear instruction with encouragement, patience, and positive interaction.Through age-appropriate methods and caring guidance, children develop a strong connection to the Quran while building confidence and good character.",
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
            Explore our Islamic learning programs designed to help students of all ages strengthen their faith, improve Quran recitation, and gain a clear understanding of essential Islamic beliefs and practices. Our courses combine authentic knowledge with practical guidance, supporting consistent worship, spiritual growth, and lifelong learning in a structured and supportive environment.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="row g-4">
          {courses.map((c, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="h-100 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-100 object-cover"
                />
                <div className="p-4">
                  <h4 className="fw-bold !mb-2">
                    <Link
                      href={c.href}
                      className="hover:text-emerald-600 !no-underline !text-green-900 transition"
                    >
                      {c.title}
                    </Link>
                  </h4>
                  <p className="text-gray-600 !text-sm !mb-4">
                    {c.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="btn btn-success px-4 py-2
                               hover:opacity-90 transition"
                  >
                    Contact US!
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
