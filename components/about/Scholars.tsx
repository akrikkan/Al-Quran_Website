"use client";

import { motion,Variants } from "framer-motion";

const scholars = [
  {
    name: "Osama Gamal",
    role: "Quran & Arabic Teacher",
    image: "/images/scholars/Scholars1.jpeg",
  },
  {
    name: "Ahmed Hany",
    role: "Quran & Arabic Teacher",
    image: "/images/scholars/Scholars2.jpeg",
  },
  {
    name: "Yusuf Samir",
    role: "Quran & Arabic Teacher",
    image: "/images/scholars/Scholars3.jpeg",
  },
];

/* Animation */
const containerVariants : Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants : Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Scholars() {
  return (
    <section className="pt-10 pb-24 bg-[#d6d0c2] relative font-poppins">
      <div className="max-w-7xl mx-auto px-6">

        {/* Small Title */}
        <p className="text-green-900 font-bold uppercase tracking-wider mb-3">
          OUR SCHOLARS
        </p>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
            All Our Teachers Are Graduates From College Of Arabic
          </h2>

          <button className="mt-6 lg:mt-0 bg-green-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Our Scholars
          </button>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative"
        >
          {scholars.map((teacher, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[40px]">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Bottom Shape */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 w-[85%] bg-gradient-to-b from-[#e7e2c8] to-[#cfe3d7] rounded-t-[40px] rounded-b-[120px] px-6 py-8 text-center shadow-lg transition-all duration-500 group-hover:-bottom-16">
                <h3 className="text-xl font-semibold">
                  {teacher.name}
                </h3>

                <p className="text-green-900 text-sm mb-4">
                  {teacher.role}
                </p>

                <div className="flex justify-center gap-4">
                  <SocialIcon icon="facebook" />
                  <SocialIcon icon="instagram" />
                  <SocialIcon icon="twitter" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Social Icons */
function SocialIcon({ icon }: { icon: string }) {
  const icons: any = {
    facebook: "fab fa-facebook-f",
    instagram: "fab fa-instagram",
    twitter: "fab fa-twitter",
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
