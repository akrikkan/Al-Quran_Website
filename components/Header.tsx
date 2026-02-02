"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();

  const [hideTop, setHideTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
useEffect(() => {
  document.body.style.overflow = mobileOpen ? "hidden" : "";
  return () => {
    document.body.style.overflow = "";
  };
}, [mobileOpen]);


  useEffect(() => {
    const onScroll = () => {
      setHideTop(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
   <header className="fixed top-0 left-0 w-full z-[999]">
      {/* ================= TOP BAR ================= */}
      <div className={`hidden lg:block bg-gradient-to-r from-emerald-700 via-lime-600 to-yellow-500 text-white text-sm transition-all duration-300 ${hideTop ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>
        <div className="container d-flex align-items-center justify-content-between py-0 flex-wrap gap-2">
          {/* Left */}
          <div className="d-flex align-items-center gap-4 flex-wrap">
            <span className="font-poppins text-[12px]">🔲 info@example.com</span>
            <span className="font-poppins text-[12px]">🔲 Suite 80 Golden Street, Germany</span>
          </div>
          {/* Center Image */}
          <div className="d-none align-items-center d-md-block">
            <img src="/images/bismillah.png" alt="Bismillah" width={140} height={30} />
          </div>
          {/* Right */}
          <div className="d-flex align-items-center gap-8 flex-wrap" style={{ paddingLeft: "180px" }}>
            <span className="font-poppins text-[12px]">🔲 Sunrise: 5:15 AM</span>
            <span className="font-poppins text-[12px]">🔲 Sunset: 4:50 PM</span>
            <span className="font-poppins text-[12px]">🔲 Let's Talk +88 01 27 14 101</span>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="bg-white shadow  min-h-[96px] ">
        <div className="max-w-[1840px] mx-auto flex items-center justify-between px-4">

          <div className="flex items-center justify-between w-full h-24">
            {/* ================= LEFT : LOGO ================= */}
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="/images/logo.svg"
                  alt="Al Quran Logo"
                  className="w-[160px] lg:w-[190px] h-auto"
                />
              </Link>
            </div>


            {/* ================= CENTER : MENU ================= */}
            <div className="flex-1 hidden lg:flex items-center justify-center h-full">
              <ul className="flex items-center gap-8 h-full text-green-800 dark:text-green-400 font-semibold">
                {/* ================= HOME (MEGA MENU) ================= */}
                <li className="relative group
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}">
                  {/* Menu Text */}
                  <Link href="/" className="px-1 py-0 !text-green-900 dark:text-green-400 !font-bold !text-lg !no-underline !hover:!no-underline leading-none !cursor-pointer font-poppins">
                    Home
                  </Link>
                  {/* MEGA MENU */}
                 <div className="absolute top-full mt-1 transition-all duration-300 ease-out hidden group-hover:block z-50 w-[1100px] ">
                    <div className="bg-white dark:bg-gray-900 p-6 shadow-xl rounded-lg">
                      <div className="max-w-[1400px] mx-auto px-6 py-10">
                      {/* GRID */}
                      <div className="grid grid-cols-4 gap-6 items-start">
                        {/* Home 01 */}
                        <div className="bg-gray-50 rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
                          <img src="/images/home1.jpg" alt="Home 01" className="w-full h-[220px] object-cover rounded-xl mb-4" />
                          <Link href="/" 
                          
                          onClick={(e) => {
                                if (pathname === "/") {
                                  e.preventDefault();
                                  setMegaOpen(false);
                                }
                              }}
                              className="inline-block !no-underline bg-green-900 text-white px-4 py-2   rounded-lg font-semibold text-sm transition hover:bg-green-600 hover:shadow-lg" >
                              Home 01
                          </Link>

                        </div>
                        {/* Home 02 */}
                        <div className="bg-gray-50 rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
                          <img src="/images/home2.jpg" alt="Home 02" className="w-full h-[220px] object-cover rounded-xl mb-4" />
                          <Link href="/home" className="inline-block !no-underline bg-green-900 text-white px-4 py-2   rounded-lg font-semibold text-sm transition hover:bg-green-600 hover:shadow-lg" >
                              Home 02
                          </Link>
                        </div>
                        {/* Home 03 */}
                        <div className="bg-gray-50 rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
                          <img src="/images/home3.jpg" alt="Home 03" className="w-full h-[220px] object-cover rounded-xl mb-4" />
                          <Link href="/home" className="inline-block !no-underline  bg-green-900 text-white px-4 py-2   rounded-lg font-semibold text-sm transition hover:bg-green-600 hover:shadow-lg" >
                              Home 03
                          </Link>
                        </div>
                        {/* Home 04 */}
                        <div className="bg-gray-50 rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
                          <img src="/images/home4.jpg" alt="Home 04" className="w-full h-[220px] object-cover rounded-xl mb-4" />
                         <Link href="/home" className="inline-block !no-underline bg-green-900 text-white px-4 py-2   rounded-lg font-semibold text-sm transition hover:bg-green-600 hover:shadow-lg" >
                              Home 04
                          </Link>
                        </div>
                        {/* Home 05 */}
                        <div className="bg-gray-50 rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
                          <img src="/images/home5.jpg" alt="Home 05" className="w-full h-[220px] object-cover rounded-xl mb-4" />
                          <Link href="/home" className="inline-block !no-underline  bg-green-900 text-white px-4 py-2   rounded-lg font-semibold text-sm transition hover:bg-green-600 hover:shadow-lg" >
                              Home 05
                          </Link>
                        </div>
                        {/* Home 06 */}
                        <div className="bg-gray-50 rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
                          <img src="/images/home6.jpg" alt="Home 06" className="w-full h-[220px] object-cover rounded-xl mb-4" />
                          {/* NEW badge */}
                          <span className="absolute !top-4 !right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            NEW
                          </span>
                          <Link href="/home" className="inline-block !no-underline bg-green-900 text-white px-4 py-2   rounded-lg font-semibold text-sm transition hover:bg-green-600 hover:shadow-lg" >
                              Home 06
                          </Link>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* ================= SERVICE ================= */}
                <li className="relative group flex items-center h-full">
                  <span className="flex items-center h-12 cursor-pointer hover:text-green-600 transition !text-green-900 dark:!text-green-400 !font-bold !text-lg font-poppins">
                    Service
                  </span>
                  <div className="absolute top-full mt-0 hidden group-hover:block z-50">
                    <div className="bg-white dark:bg-gray-900 !no-underline shadow-lg rounded-xl p-5 w-56 space-y-3 uppercase text-sm font-poppins">
                      <Link href="/services" className="block hover:text-green-600 dark:hover:text-green-400 !text-green-900 dark:!text-green-200 !font-bold !text-lg !no-underline">
                        Services
                      </Link>
                      <Link href="/service-detail" className="block !no-underline hover:text-green-600 dark:hover:text-green-400 !text-green-900 dark:!text-green-200 !font-bold !text-lg font-poppins">
                        Service 1
                      </Link>
                      <Link href="/service-detail" className="block !no-underline hover:text-green-600 dark:hover:text-green-400 !text-green-900 dark:!text-green-200 !font-bold !text-lg font-poppins">
                        Service 2
                      </Link>
                    </div>
                  </div>
                </li>

                {/* ================= COURSES ================= */}
                <li className="relative group flex items-center h-full">
                  <span className="flex items-center h-12 cursor-pointer !no-underline !hover:text-green-600 transition !text-green-900 dark:!text-green-400 !font-bold !text-lg font-poppins">
                    Courses
                  </span>
                  <div className="absolute top-full !items-left mt-0 hidden group-hover:block z-50">
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-5 w-56 space-y-3 uppercase text-sm">
                      <Link href="/courses" className="block hover:text-green-600 dark:hover:text-green-400 !no-underline transition !text-green-900 dark:!text-green-200 !font-bold !text-lg font-poppins">
                        Courses
                      </Link>
                      <Link href="/course-detail" className="block !no-underline hover:text-green-600 dark:hover:text-green-400 transition !text-green-900 dark:!text-green-200 !font-bold !text-lg font-poppins">
                         Courses1
                      </Link>
                      <Link href="/course-detail" className="block !no-underline hover:text-green-600 dark:hover:text-green-400 transition !text-green-900 dark:!text-green-200 !font-bold !text-lg font-poppins">
                         Courses2
                      </Link>       
                    </div>
                  </div>
                </li>

                {/* ================= BLOG ================= */}
                <li className="relative group flex items-center h-full">
                  <span className="flex items-center h-12 cursor-pointer hover:text-green-600 transition !text-green-900 dark:!text-green-400 !font-bold !text-lg font-poppins">
                    Blog
                  </span>
                  <div className="absolute top-full mt-0 hidden group-hover:block z-50">
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-5 w-56 space-y-3 uppercase text-sm">
                      <Link href="/blog" className="block hover:text-green-600 dark:hover:text-green-400 !no-underline transition !text-green-900 dark:!text-green-200 !font-bold !text-lg font-poppins">
                        Our Blog
                      </Link>
                      <Link href="/blog-classic" className="block hover:text-green-600 dark:hover:text-green-400 transition !no-underline !text-green-900 dark:!text-green-200 !font-bold !text-lg font-poppins">
                        Blog Class
                      </Link>
                      <Link href="/blog-detail" className="block hover:text-green-600 dark:hover:text-green-400 !no-underline transition !text-green-900 dark:!text-green-200 !font-bold !text-lg !font-poppins">
                        Blog Detail
                      </Link>
                    </div>
                  </div>
                </li>

                {/* ================= ABOUT ================= */}
                <li className="relative group flex items-center h-full">
                  {/* Menu text */}
                  <span className="flex items-center h-12 cursor-pointer text-green-900 dark:text-green-400 font-bold text-lg hover:text-green-600 dark:hover:text-green-300 transition font-poppins">
                    About
                  </span>
                  {/* Dropdown */}
                  <div className="absolute top-full  mt-0 hidden group-hover:block z-50">
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-5 w-56 space-y-3 uppercase text-sm">
                      <Link href="/about" className="block !text-green-900 dark:text-green-200 font-semibold !no-underline hover:text-green-600 dark:hover:text-green-400 transition !font-bold !text-lg font-poppins">
                        About Us
                      </Link>
                    </div>
                  </div>
                </li>

                {/* ================= CONTACT ================= */}
                <li className="flex items-center h-full">
                  <Link href="/contact" className="flex items-center h-12 !no-underline hover:text-green-600 dark:hover:text-green-300 transition !text-green-900 dark:!text-green-400 !font-bold !text-lg font-poppins">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* ================= RIGHT : ACTIONS ================= */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* 🌙 Dark Mode Toggle */}
              <button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                className="w-11 h-11 rounded-full bg-green-900 dark:bg-gray-800 flex items-center justify-center hover:bg-green-700 dark:hover:bg-gray-700 transition"
              >
                {currentTheme === "dark" ? "🌞" : "🌙"}
              </button>

              {/* 📱 Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-11 h-11 rounded-full bg-green-900 text-white flex items-center justify-center"
              >
                ☰
              </button>

              {/* 🔍 Search (Desktop only) */}
              <button className="hidden lg:flex w-11 h-11 rounded-full bg-green-900 dark:bg-gray-800 items-center justify-center hover:bg-green-700 dark:hover:bg-gray-700 transition">
                🔍
              </button>

              {/* Quick Join (Desktop only) */}
              <Link href="/contact" className="hidden lg:block">
                <button className="px-6 py-3 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-700 transition">
                  Quick Join Now
                </button>
              </Link>

            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
  {mobileOpen && (
    <motion.div
      className="fixed inset-0 z-[9999] lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Drawer */}
      <motion.div
        className="absolute right-0 top-0 h-full w-[280px] bg-white dark:bg-gray-900 shadow-xl"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <img src="/images/logo.svg" alt="Logo" className="w-[140px]" />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <ul className="p-4 space-y-4 font-semibold">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Service", "/services"],
            ["Courses", "/courses"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
          ].map(([label, href], index) => (
            <motion.li
              key={href}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={href}
                onClick={() => setMobileOpen(false)}
                className="!text-green-900 dark:!text-green-400 hover:!text-green-700 font-bold !no-underline"
              >
                🔲 {label}
              </Link>
              <hr className="border-gray-900 dark:border-gray-700 mt-4" />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </header>
  );
}