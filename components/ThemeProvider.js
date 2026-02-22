"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultTheme, themeSet } from "./theme.config";

const ThemeContext = createContext({
  theme: defaultTheme,
  setTheme: () => {}
});

function resolveTheme(candidate) {
  return themeSet.has(candidate) ? candidate : defaultTheme;
}

export default function ThemeProvider({ children, initialTheme = defaultTheme }) {
  const [theme, setTheme] = useState(resolveTheme(initialTheme));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("theme");
    const fromStorage = window.localStorage.getItem("site-theme");
    const resolvedInitialTheme = resolveTheme(fromQuery || fromStorage || initialTheme);
    setTheme(resolvedInitialTheme);
  }, [initialTheme]);

  useEffect(() => {
    const appliedTheme = resolveTheme(theme);
    document.documentElement.setAttribute("data-theme", appliedTheme);
    window.localStorage.setItem("site-theme", appliedTheme);

    const url = new URL(window.location.href);
    url.searchParams.set("theme", appliedTheme);
    window.history.replaceState({}, "", url.toString());
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (nextTheme) => setTheme(resolveTheme(nextTheme))
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
