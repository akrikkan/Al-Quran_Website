import "./globals.css";

/* Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "swiper/css";
import "swiper/css/pagination";

import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/CustomCursor";


/* Bootstrap JS */
import Script from "next/script";

/* Google Fonts (FIXED) */
import { Inter, Amiri, Poppins } from "next/font/google";

/* Inter font (body text) */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["600", "800"], // ✅ Inter supports 800
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});


/* Amiri font (Arabic text) */
const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-amiri",
  weight: ["400", "700"], // ✅ ONLY valid weights
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Quran Institute",
  description: "Online Quran Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} ${poppins.className} ${amiri.className}`}
    >
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>


        {/* 🌙 Theme Provider */}
        <ThemeProvider>

           <CustomCursor />

          {/* Header */}
          <Header />

          {/* Page Content */}
          <main className="min-h-screen pt-[106px] ">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </ThemeProvider>

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        
      </body>
    </html>
  );
}
