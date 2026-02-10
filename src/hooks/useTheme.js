import { useEffect, useState, useCallback } from "react";

const THEME_KEY = "theme";
const THEMES = ["light", "dark"];

/* ================================
   Safe helpers
================================ */
const canUseDOM = typeof window !== "undefined";

const safeStorage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* ignore */
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
  },
};

const getSystemTheme = () =>
  canUseDOM &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const getInitialTheme = () => {
  if (!canUseDOM) return "light";

  const stored = safeStorage.get(THEME_KEY);
  if (THEMES.includes(stored)) return stored;

  return getSystemTheme();
};

/* ================================
   Hook
================================ */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  /* ================================
     Apply theme (single side-effect)
  ================================ */
  useEffect(() => {
    if (!canUseDOM) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);
    safeStorage.set(THEME_KEY, theme);
  }, [theme]);

  /* ================================
     Sync with OS theme (only if no override)
  ================================ */
  useEffect(() => {
    if (!canUseDOM) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const stored = safeStorage.get(THEME_KEY);
      if (!stored) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    media.addEventListener
      ? media.addEventListener("change", handleChange)
      : media.addListener(handleChange);

    return () => {
      media.removeEventListener
        ? media.removeEventListener("change", handleChange)
        : media.removeListener(handleChange);
    };
  }, []);

  /* ================================
     Public API
  ================================ */
  const setThemeSafe = useCallback((nextTheme) => {
    if (!THEMES.includes(nextTheme)) return;
    setTheme(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return {
    theme,
    setTheme: setThemeSafe,
    toggleTheme,
  };
}
