"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* =====================
   Framer Motion Variants
===================== */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
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

const NewsSection = () => {
  const newsData = [
    {
      image: "/images/resource/news-1.jpg",
      title: "Abandoning Prayer – Why to Avoid at all Costs?",
      authorImg: "/images/resource/author-2.png",
      slug: "abandoning-prayer",
    },
    {
      image: "/images/resource/news-2.jpg",
      title: "What Are The Conditions Of The Shahadah In Islam",
      authorImg: "/images/resource/author-3.png",
      slug: "conditions-of-shahadah",
    },
    {
      image: "/images/resource/news-3.jpg",
      title: "Types Of Khawf (Fear) And Tawakkul (Reliance) In Islam",
      authorImg: "/images/resource/author-4.png",
      slug: "khawf-and-tawakkul",
    },
  ];

  return (
    <section className="news-one pt-[50px] pb-[60px]">
      <div className="container">

        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="text-sm tracking-widest text-green-900 text-[16px] font-bold font-poppins">
            OUR NEWS UPDATES
          </div>
          <h2 className="text-4xl font-bold mt-2 leading-tight font-poppins !text-[45px]">
            Latest News & Articles From <br /> The Blog
          </h2>
        </div>

        {/* News Grid */}
        <motion.div
          className="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
            >
              <div className="news-block_one-inner rounded-[10px] overflow-hidden">

                {/* Image */}
                <div className="news-block_one-image relative overflow-hidden">
                  <Link href="/blog">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full block transition-all duration-500 cursor-pointer"
                    />
                  </Link>
                </div>

                {/* Content */}
                <div className="border border-gray-200 p-6 rounded-b-[10px] bg-white">

                  {/* Meta */}
                  <ul className="flex gap-6 text-[15px] text-gray-500 font-poppins">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[5px] w-4 h-4 bg-gray-300 rounded"></span>
                      03 Comment
                    </li>
                    <li className="relative pl-6 text-green-600">
                      <span className="absolute left-0 top-[5px] w-4 h-4 bg-green-600 rounded"></span>
                      October 18 2025
                    </li>
                  </ul>

                  {/* Title */}
                  <h5 className="mt-4 text-lg font-semibold font-poppins transition">
                    <Link href="/blog" className="!text-green-700 !no-underline">
                      {item.title}
                    </Link>
                  </h5>

                  {/* Text */}
                  <p className="mt-4 text-gray-500 leading-7 font-poppins">
                    There are many beneficial lessons in Islam that strengthen
                    faith, encourage consistent prayer, deepen understanding of
                    belief, and teach reliance upon Allah while nurturing
                    spiritual growth through authentic learning.
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-5 border border-gray-200 p-2 rounded-md">
                    <div className="flex items-center gap-3 font-poppins capitalize">
                      <img
                        src={item.authorImg}
                        alt="Author"
                        className="w-[45px] h-[45px] rounded-full object-cover"
                      />
                      Amir Khan
                    </div>

                    <Link
                      href="/blog"
                      className="news-btn px-6 py-2 !no-underline text-white"
                    >
                      Read More
                    </Link>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
