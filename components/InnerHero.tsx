"use client";

type InnerHeroProps = {
  title: string;
  breadcrumb: string;
};

export default function InnerHero({ title, breadcrumb }: InnerHeroProps) {
  return (
    <section
      className="relative w-full  h-[180px] sm:h-[220px] md:h-[260px] lg:h-[360px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/background/background-main.jpeg')",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* text */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-8xl md:text-5xl font-bold mb-3">
          {title}
        </h1>
        <p className="text-sm md:text-base opacity-90">
          {breadcrumb}
        </p>
      </div>
    </section>
  );
}
