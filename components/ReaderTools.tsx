"use client";
import { useEffect, useState } from "react";

const SIZE_KEY = "naama-size";
const setSize = (px: number) => document.documentElement.style.setProperty("--reader-size", px + "px");

/** Reading progress bar along the top of the window. */
export function ReadingProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = document.getElementById("article");
    const f = () => {
      if (!el) return;
      const r = el.getBoundingClientRect(), total = r.height - innerHeight;
      setW(total > 0 ? Math.min(100, Math.max(0, -r.top / total * 100)) : 100);
    };
    f(); addEventListener("scroll", f, { passive: true }); addEventListener("resize", f);
    return () => { removeEventListener("scroll", f); removeEventListener("resize", f); };
  }, []);
  return <div className="progress" style={{ width: w + "%" }} aria-hidden="true" />;
}

/** Share links, copy link and text size, like a newspaper story page. */
export function ReaderTools({ title }: { title: string }) {
  const [url, setUrl] = useState("");
  const [toast, setToast] = useState("");
  useEffect(() => {
    setUrl(location.href);
    try { const s = Number(localStorage.getItem(SIZE_KEY)); if (s) setSize(s); } catch {}
  }, []);
  const size = (d: number) => {
    const cur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--reader-size")) || 19;
    const next = Math.min(26, Math.max(15, cur + d * 2));
    setSize(next);
    try { localStorage.setItem(SIZE_KEY, String(next)); } catch {}
  };
  const say = (m: string) => { setToast(m); setTimeout(() => setToast(""), 2200); };
  const copy = () => navigator.clipboard?.writeText(location.href).then(() => say("Link copied"), () => say("Copy this link from the address bar")) ?? say("Copy this link from the address bar");
  const u = encodeURIComponent(url), t = encodeURIComponent(title);
  return (
    <div className="reader-tools">
      <div className="share" aria-label="Share">
        <a className="pill" href={`https://www.facebook.com/sharer/sharer.php?u=${u}`} target="_blank" rel="noopener">Facebook</a>
        <a className="pill" href={`https://x.com/intent/post?url=${u}&text=${t}`} target="_blank" rel="noopener">X</a>
        <a className="pill" href={`https://wa.me/?text=${t}%20${u}`} target="_blank" rel="noopener">WhatsApp</a>
        <button className="pill" onClick={copy}>Copy link</button>
      </div>
      <div className="size">
        <button className="pill" onClick={() => size(-1)} aria-label="Smaller text">A−</button>
        <button className="pill" onClick={() => size(1)} aria-label="Larger text">A+</button>
      </div>
      {toast && <div className="toast" role="status">{toast}</div>}
    </div>
  );
}
