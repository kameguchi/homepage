"use client";

import { useTheme } from "./ThemeProvider";
import { themeOptions } from "./theme.config";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <label className="flex items-center gap-2 text-xs md:text-sm">
      <span className="text-[var(--color-sub)]">Design</span>
      <select
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
        className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-white outline-none"
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value} className="text-black">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
