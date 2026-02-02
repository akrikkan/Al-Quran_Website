"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="rounded-md border px-3 py-2 text-sm
                 bg-gray-200 dark:bg-gray-800
                 text-black dark:text-white"
    >
      {currentTheme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
