"use client";

export default function ImageScroll() {
  const images = [
    "/images/gallery/1.jpeg",
    "/images/gallery/2.jpeg",
    "/images/gallery/3.jpeg",
    "/images/gallery/4.jpeg",
  ];

  return (
    <section className="pt-4 md:pt-8 lg:pt-10 pb-10 md:pb-14 lg:pb-20 bg-gray-50 overflow-hidden">
      <div className="container text-center mb-10">
        <h2 className="text-2xl md:text-3xl !font- poppins font-bold !text-green-900 !font-poppins">
          Our Learning Environment
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 scroll-track">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="min-w-[260px] md:min-w-[320px] lg:min-w-[380px] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
