"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as "light" | "dark" | null;
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = stored || (prefersDark ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", initial);

      requestAnimationFrame(() => setTheme(initial));
    } catch {
      requestAnimationFrame(() => setTheme("light"));
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    document.documentElement.setAttribute("data-theme", next);
  };

  if (!theme) return null;

  return (
    <button
      onClick={toggle}
      className="inline-flex h-9 items-center gap-2 rounded-xl border border-foreground/20 bg-background px-3 text-sm text-foreground hover:bg-foreground/10"
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      type="button"
    >
      <span className="relative inline-block h-4 w-4 text-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          fill="none"
          className={`absolute inset-0 h-4 w-4 transition-opacity ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l-1.4-1.4M20.4 19.4 19 18M5 19l-1.4 1.4M20.4 4.6 19 6" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          fill="none"
          className={`absolute inset-0 h-4 w-4 transition-opacity ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
