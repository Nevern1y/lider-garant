"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";

    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return stored || (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`h-5 w-5 transition-opacity ${
          theme === "light" ? "opacity-100 text-primary" : "opacity-30"
        }`}
      />

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
        className="relative flex h-6 w-11 items-center rounded-full transition-colors
        duration-300 bg-primary"
      >
        <span
          className={`absolute left-1 h-4 w-4 rounded-full bg-white 
          transition-all duration-300
          ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
        />
      </button>

      <Moon
        className={`h-5 w-5 transition-opacity ${
          theme === "dark" ? "opacity-100 text-primary" : "opacity-30"
        }`}
      />
    </div>
  );
}
