import type { Config } from "tailwindcss";
import clipPath from "tailwind-clip-path";

const config: Config = {
  darkMode: "class", // required for next-themes

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
    'spin-slow': 'spin 15s linear infinite',
    'bounce-slow': 'bounce 6s infinite',
    },
      
      colors: {
        primary: "#2ea873",
      },

      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        amiri: ["var(--font-amiri)"],
      },

      clipPath: {
        hidden: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        full: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
    },
  },

  plugins: [
    clipPath, // cleaner import
  ],
};

export default config;
