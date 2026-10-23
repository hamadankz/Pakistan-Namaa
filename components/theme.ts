"use client";
import { useEffect, useState } from "react";

const isDark = () => getComputedStyle(document.documentElement).colorScheme.includes("dark");
export const openSearch = () => window.dispatchEvent(new Event("naama:search"));

/** Light/dark toggle shared by the top bar and the phone menu; the choice is saved per browser. */
export function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(isDark());
    const sync = () => setDark(isDark());
    addEventListener("naama:theme", sync);
    return () => removeEventListener("naama:theme", sync);
  }, []);
  const toggle = () => {
    const t = isDark() ? "light" : "dark";
    try { localStorage.setItem("naama-theme", t); } catch {}
    document.documentElement.dataset.theme = t;
    dispatchEvent(new Event("naama:theme"));
  };
  return { dark, toggle };
}
