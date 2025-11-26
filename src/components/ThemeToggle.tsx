"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
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

  // применяем тему при изменении state
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`h-4 w-4 transition-opacity ${
          theme === "light" ? "opacity-100" : "opacity-30"
        }`}
      />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      />
      <Moon
        className={`h-4 w-4 transition-opacity ${
          theme === "dark" ? "opacity-100" : "opacity-30"
        }`}
      />
    </div>
  );
}
