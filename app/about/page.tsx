"use client";

export default function AboutPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl fw-bold !text-green-900 mb-3">
            About Us
          </h2>
          <p className="text-green-800">
            Welcome to our Islamic Madrasa
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4 leading-relaxed">

          <p>
            Welcome to <strong className="text-green-900">Al Quran Institute</strong>, an
            Islamic online madrasa dedicated to spreading authentic Islamic education
            worldwide. We provide high-quality Quran learning, Tafseer, Tajweed, and
            Islamic studies for students of all ages.
          </p>

          <p>
            Our mission is to make Quran learning easy, accessible, and meaningful by
            combining traditional Islamic values with modern online teaching methods.
            Our certified scholars ensure every student receives personal guidance and
            proper understanding of the Quran and Sunnah.
          </p>

          <p>
            Whether you are a beginner or looking to deepen your knowledge,
            Al Quran Institute is here to guide you on your spiritual journey.
          </p>

        </div>
      </div>
    </section>
  );
}
