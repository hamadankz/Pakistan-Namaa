"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ArticleSummary } from "@/lib/types";

export function SearchOverlay({ items }: { items: ArticleSummary[] }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const show = () => { setQ(""); setOpen(true); };
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      const typing = /INPUT|TEXTAREA/.test((document.activeElement as HTMLElement | null)?.tagName ?? "");
      if (!typing && (e.key === "/" || (e.key.toLowerCase() === "k" && (e.ctrlKey || e.metaKey)))) { e.preventDefault(); show(); }
    };
    addEventListener("naama:search", show);
    addEventListener("keydown", key);
    return () => { removeEventListener("naama:search", show); removeEventListener("keydown", key); };
  }, []);
  useEffect(() => { if (open) input.current?.focus(); document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const term = q.trim().toLowerCase();
  const hits = useMemo(() => items.filter(a => !term || a.text.includes(term)), [items, term]);
  if (!open) return null;
  return (
    <div className="overlay" onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="search" role="dialog" aria-modal="true" aria-label="Search the issue">
        <label className="label" htmlFor="q">Search the issue</label>
        <input id="q" ref={input} type="search" placeholder="Try: chai, Harvard, leopards" autoComplete="off" value={q} onChange={e => setQ(e.target.value)} />
        <ul>
          {hits.length ? hits.map(a => (
            <li key={a.slug}><Link href={`/stories/${a.slug}/`} onClick={() => setOpen(false)}>
              <span className="label">{a.section}</span><strong>{a.title}</strong><span className="byline">{a.dek}</span>
            </Link></li>
          )) : <li className="byline">Nothing in this issue matches &ldquo;{q}&rdquo;.</li>}
        </ul>
        <span className="byline">Press / or Ctrl K to search from anywhere. Esc closes.</span>
      </div>
    </div>
  );
}
