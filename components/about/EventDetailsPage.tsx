"use client";

import Image from "next/image";
import { motion,Variants } from "framer-motion";
import { useState } from "react";

/* Animation */
const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* Extended FAQ Data */
const faqs = [
  {
    q: "Who can join this event?",
    a: "This event is suitable for students aged 7 years and above who want to improve their Quran recitation, revision, and memorization. Both beginners and intermediate learners are welcome.",
  },
  {
    q: "Do I need prior knowledge of Tajweed?",
    a: "Basic knowledge is helpful but not required. Our teachers will guide each student according to their level and provide corrections step by step.",
  },
  {
    q: "Will I receive personal feedback?",
    a: "Yes. Each participant receives individual correction and personalized guidance to improve pronunciation, fluency, and memorization quality.",
  },
  {
    q: "Is the class conducted online or offline?",
    a: "The event is conducted online through a secure and interactive virtual classroom where students can communicate directly with the teacher.",
  },
  {
    q: "Will class recordings be available?",
    a: "Yes. Registered students will have access to session recordings so they can revise and practice anytime.",
  },
  {
    q: "Is there a refund or reschedule option?",
    a: "If you are unable to attend due to a valid reason, you may request rescheduling or credit for a future session according to our policy.",
  },
];

/* Speakers */
const speakers = [
  { name: "Abdullah Habib", image: "/images/speakers/sp1.jpeg" },
  { name: "Abdul Kaiyoom", image: "/images/speakers/sp2.jpeg" },
  { name: "Abdullah Hasan", image: "/images/speakers/sp3.jpeg" },
];


export default function EventDetailsPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16  font-poppins">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* HERO IMAGE */}
        <motion.div
          variants={fadeLeftVariants}
          initial="hidden"
          animate="visible"
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/events/event1.jpeg"
            alt="Event"
            width={1200}
            height={600}
            className="w-full h-[380px] md:h-[450px] object-cover"
          />
        </motion.div>

        {/* EVENT HEADER */}
        <motion.div
          variants={fadeLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="space-y-5">
            <p className="text-gray-500">Fiolveien 230, Norway</p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Learning Quranic Arabic For Beginners
            </h1>

            <div className="flex items-center gap-4  p-5 rounded-xl w-fit shadow-sm">
              <span className="font-semibold">Upcoming Event Price</span>
              <span className="bg-black text-white px-6 py-2 rounded font-bold">
                $12.00
              </span>
            </div>
          </div>

          <div className="flex md:justify-end">
            <button className="inline-flex items-center justify-center bg-gray-300 border-2 border-green-900 text-green-900 hover:bg-green-600 hover:text-white px-10 py-4 rounded-xl font-semibold transition">
              Get Tickets
            </button>
          </div>
        </motion.div>

        {/* ABOUT EVENT */}
        <motion.div
          variants={fadeLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            About This Event
          </h2>

          <p className="text-gray-600 leading-relaxed">
            This event is specially designed to help students strengthen their
            Quran memorization and improve recitation through structured and
            guided learning. The program focuses on revision of previously
            memorized Surahs while enhancing fluency, Tajweed accuracy, and
            pronunciation under the supervision of qualified teachers.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Participants will learn effective techniques to retain memorized
            verses, avoid common mistakes, and develop confidence in their
            recitation. The sessions also aim to build discipline,
            consistency, and a deeper spiritual connection with the words of
            the Holy Quran.
          </p>

          <ul className="space-y-3 pt-2">
            <li className="flex gap-3">
              <span className="bg-green-600 text-white px-2 rounded">✓</span>
              Structured memorization and revision plan
            </li>
            <li className="flex gap-3">
              <span className="bg-green-600 text-white px-2 rounded">✓</span>
              Personal teacher guidance and correction
            </li>
            <li className="flex gap-3">
              <span className="bg-green-600 text-white px-2 rounded">✓</span>
              Improvement in Tajweed and pronunciation
            </li>
            <li className="flex gap-3">
              <span className="bg-green-600 text-white px-2 rounded">✓</span>
              Supportive and motivating learning environment
            </li>
          </ul>
        </motion.div>

        {/* ORGANIZER */}
        <motion.div
          variants={fadeLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              About The Organiser
            </h3>

            <p className="text-gray-600">
              Al Quran Institute is a dedicated online Islamic learning
              platform committed to providing authentic Quran education to
              students worldwide. Our programs combine traditional Islamic
              teaching methods with modern online learning to ensure both
              academic excellence and spiritual growth.
            </p>

            <p><b>Name:</b> Abdullah Hasan</p>
            <p><b>Email:</b> abcd@gmail.com</p>
            <p><b>Phone:</b> +880172232132</p>
            <p><b>Date:</b> 21 November 2025</p>
          </div>

          <Image
            src="/images/speakers/sp3.jpeg"
            alt="Organizer"
            width={400}
            height={300}
            className="rounded-xl object-cover w-full h-[260px]"
          />
        </motion.div>

        {/* FAQ */}
        <motion.div
          variants={fadeLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          {faqs.map((item, index) => (
            <div key={index} className="bg-gray-700 text-white rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold"
              >
                {item.q}
                <span>{open === index ? "-" : "+"}</span>
              </button>

              {open === index && (
                <div className="px-6 pb-4 text-gray-200">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </motion.div>
{/* SPEAKERS */}
<motion.div
  variants={fadeLeftVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="space-y-12"
>
  {/* Small Title */}
  <p className="text-green-900 font-bold uppercase tracking-wider">
    EVENT SPEAKERS
  </p>

  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white max-w-2xl">
    Meet Our Expert Quran Instructors
  </h2>

  {/* Cards Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pt-6">
    {speakers.map((sp, index) => (
      <motion.div
        key={index}
        variants={fadeLeftVariants}
        className="relative group transition-all duration-500 hover:-translate-y-3"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-[40px]">
          <Image
            src={sp.image}
            alt={sp.name}
            width={400}
            height={500}
            className="w-full h-[460px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

       {/* Bottom Card */}
<div
  className="
    absolute left-1/2 -translate-x-1/2

    /* Position */
    -bottom-16 sm:-bottom-18 md:-bottom-22 lg:-bottom-28

    /* Width */
    w-[90%] sm:w-[85%] md:w-[82%]

    /* Height */
    min-h-[160px] sm:min-h-[180px] md:min-h-[200px]


    /* Shape */
    rounded-t-[28px] sm:rounded-t-[32px] md:rounded-t-[40px]
    rounded-b-[70px] sm:rounded-b-[90px] md:rounded-b-[120px]

    /* Padding */
    px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-8

    text-center shadow-lg
    transition-all duration-500

    /* Hover */
    group-hover:-bottom-14 sm:group-hover:-bottom-16 md:group-hover:-bottom-18
  "
>

          {/* Name */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {sp.name}
          </h3>

          {/* Role */}
          <p className="text-green-900 text-sm mb-4">
            Quran & Arabic Speaker
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-4">
            <SocialIcon icon="facebook" />
            <SocialIcon icon="instagram" />
            <SocialIcon icon="twitter" />
            <SocialIcon icon="linkedin" />
          </div>

          {/* Join Button */}
          <button className="inline-flex items-center justify-center bg-green-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
            Join Now
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

      </div>
    </section>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const icons: any = {
    facebook: "fab fa-facebook-f",
    instagram: "fab fa-instagram",
    twitter: "fab fa-twitter",
    linkedin: "fab fa-linkedin-in",
  };

  return (
    <a
      href="#"
      className="w-10 h-10 bg-[#0f2f2a] text-white rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300"
    >
      <i className={icons[icon]}></i>
    </a>
  );
}

