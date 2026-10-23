"use client";
import { useEffect, useRef, useState } from "react";
import type { GalleryPhoto } from "@/content/photos";
import { asset } from "@/lib/asset";

/** A photo grid that opens each picture full screen. Arrow keys or swipe to move, Esc to close. */
export function Gallery({ photos, credit, variant = "grid" }: { photos: GalleryPhoto[]; credit: string; variant?: "grid" | "strip" }) {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const n = photos.length;
  const go = (d: number) => setOpen(i => (i === null ? i : (i + d + n) % n));

  useEffect(() => {
    if (open === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => { removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [open === null]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (open === null) opener.current?.focus(); }, [open]);

  const p = open === null ? null : photos[open];
  return (
    <>
      <ul className={`gallery gallery-${variant}`}>
        {photos.map((ph, i) => (
          <li key={ph.src}>
            <button onClick={e => { opener.current = e.currentTarget; setOpen(i); }} aria-label={`Open photo ${i + 1} of ${n}: ${ph.alt}`}>
              <img src={asset(ph.thumb)} alt="" width={ph.w} height={ph.h} loading="lazy" decoding="async" />
            </button>
          </li>
        ))}
      </ul>
      {p && (
        <div
          className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer"
          onClick={e => { if (e.target === e.currentTarget) setOpen(null); }}
          onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={e => { if (touchX.current !== null) { const dx = e.changedTouches[0].clientX - touchX.current; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); touchX.current = null; } }}
        >
          <div className="lb-bar">
            <span aria-live="polite">{open! + 1} / {n}</span>
            <button ref={closeBtn} className="lb-close" onClick={() => setOpen(null)}>Close ✕</button>
          </div>
          <figure className="lb-figure">
            <img src={asset(p.src)} alt={p.alt} width={p.w} height={p.h} />
            <figcaption>{p.alt}<span> · {credit}</span></figcaption>
          </figure>
          <button className="lb-nav prev" onClick={() => go(-1)} aria-label="Previous photo">‹</button>
          <button className="lb-nav next" onClick={() => go(1)} aria-label="Next photo">›</button>
        </div>
      )}
    </>
  );
}
