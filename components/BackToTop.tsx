"use client";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(scrollY > 900);
    f(); addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  if (!show) return null;
  return <button className="to-top" onClick={() => scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑ Top</button>;
}
