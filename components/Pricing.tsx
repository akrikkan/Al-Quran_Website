"use client";

import { motion,Variants } from "framer-motion";

const pricingData = [
  { price: 32, title: "2 Classes Per Week", students: "2,000+", classes: 8 },
  { price: 48, title: "3 Classes Per Week", students: "3,000+", classes: 12 },
  { price: 60, title: "4 Classes Per Week", students: "5,000+", classes: 16 },
  { price: 80, title: "5 Classes Per Week", students: "6,000+", classes: 20 },
];

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

const cardVariants : Variants = {
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

export default function Pricing() {
  return (
    <section className="py-24">
      <div className="container">

        {/* =====================
           Section Title
        ===================== */}
        <div className="text-center mb-14">
          <div className="text-green-700 font-poppins text-[20px] font-semibold tracking-wide">
            WHY TO CHOOSE US
          </div>
          <h2 className="text-4xl font-poppins !text-[50px] font-bold mt-2">
            Why Choose Our Islamic <br /> Institute
          </h2>
        </div>

        {/* =====================
           Pricing Cards
        ===================== */}
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingData.map((item, index) => (
            <motion.div
              key={index}
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
              variants={cardVariants}
            >
              <motion.div
                whileHover="hover"
                className="relative bg-[#FBF8EE] border border-black rounded-[46px] px-5 pt-14 pb-8 text-center h-full"
              >
                {/* Price Circle */}
                <motion.div
                  variants={{ hover: { y: -14 } }}
                  transition={{ type: "spring", stiffness: 320, damping: 14 }}
                  className="mx-auto w-[104px] h-[104px] rounded-full bg-[#FFD35A] border border-black flex flex-col justify-center items-center leading-tight"
                >
                  <span className="text-[18px] font-semibold -mb-1">$</span>
                  <span className="text-[40px] font-extrabold">
                    {item.price}
                  </span>
                  <span className="text-[14px] font-medium mt-[-2px]">/Mo</span>
                </motion.div>

                {/* Title */}
                <h4 className="mt-6 text-[22px] font-bold leading-[1.3]">
                  {item.title.split(" ").slice(0, 3).join(" ")} <br />
                  {item.title.split(" ").slice(3).join(" ")}
                </h4>

                {/* Students */}
                <div className="mt-4 bg-[#FFE7A3] py-2 px-4 rounded-md text-[14px] font-medium inline-block">
                  • {item.students} Students Enrolled
                </div>

                {/* List */}
                <ul className="mt-5 text-[14px] font-poppins text-gray-600 space-y-1 list-disc text-left ml-10">
                  <li>8 Classes per Month</li>
                  <li>6 Months = US$ 178</li>
                  <li>Save 7%</li>
                  <li>12 Months = US$ 345</li>
                  <li>Save 10%</li>
                </ul>

                {/* Button */}
                <a
                  href="/contact"
                  className="inline-block mt-6 price-btn"
                >
                  Free Trial
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
