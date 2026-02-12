"use client";

import Image from "next/image";
import { motion,Variants } from "framer-motion";

const events = [
  {
    id: 1,
    image: "/images/events/event1.jpeg",
    time: "10:00 pm - 11:45 pm",
    location: "Fiolveien 230, Norway",
    title: "Learning Quranic Arabic For Beginners",
    price: "$12.00",
  },
  {
    id: 2,
    image: "/images/events/event2.jpeg",
    time: "10:00 pm - 11:45 pm",
    location: "Fiolveien 230, Norway",
    title: "Learning Quranic Arabic For Beginners",
    price: "$12.00",
  },
  {
    id: 3,
    image: "/images/events/event3.jpeg",
    time: "10:00 pm - 11:45 pm",
    location: "Fiolveien 230, Norway",
    title: "Learning Quranic Arabic For Beginners",
    price: "$12.00",
  },
  {
    id: 4,
    image: "/images/events/event1.jpeg",
    time: "10:00 pm - 11:45 pm",
    location: "Fiolveien 230, Norway",
    title: "Learning Quranic Arabic For Beginners",
    price: "$12.00",
  },
  {
    id: 5,
    image: "/images/events/event2.jpeg",
    time: "10:00 pm - 11:45 pm",
    location: "Fiolveien 230, Norway",
    title: "Learning Quranic Arabic For Beginners",
    price: "$12.00",
  },
  {
    id: 6,
    image: "/images/events/event3.jpeg",
    time: "10:00 pm - 11:45 pm",
    location: "Fiolveien 230, Norway",
    title: "Learning Quranic Arabic For Beginners",
    price: "$12.00",
  },
];

// Animation for container (stagger)
const containerVariants :Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animation for each card (from left)
const cardVariants : Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function EventsGrid() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-white">
            Upcoming Events
          </h2>
        </div>

        {/* Animated Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              className="bg-gray-300 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"

            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />

                {/* Time badge */}
                <span className="absolute bottom-0 left-0 bg-green-900 text-white text-sm px-4 py-1 rounded-lg font-semibold">
                  {event.time}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">
                  {event.location}
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {event.title}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Upcoming Event Price
                  </span>

                  <span className="bg-black text-white px-4 py-2 font-bold rounded">
                    {event.price}
                  </span>
                </div>

                {/* Button */}
                <div className="mt-6 flex justify-center">
                <button className="inline-flex items-center justify-center bg-green-900 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Join Now
                </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
