"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ArticleSummary } from "@/lib/types";
import { Photo } from "./Photo";

type Page = { kind: "cover" | "contents" | "note" | "fun" | "end" } | { kind: "story"; a: ArticleSummary };
type Props = { items: ArticleSummary[]; name: string; edition: string; coverLine: string; note: { body: string[]; author: string } };

function PageView({ p, n, props }: { p: Page; n: number; props: Props }) {
  if (p.kind === "cover") return (
    <div className="pg coverpg"><span className="label">{props.edition}</span><div className="big">{props.name}</div><p>{props.coverLine}</p><span className="pno">Pakistan Naama · Lahore</span></div>
  );
  if (p.kind === "end") return (
    <div className="pg endpg"><div className="big">Shukriya</div><p>Thanks for reading the Fall Edition.</p><Link className="btn" href="/entertainment/">Play the puzzles</Link></div>
  );
  let inner: React.ReactNode;
  if (p.kind === "contents") inner = <>
    <span className="label">Contents</span><h3>In this issue</h3>
    <ol>{props.items.map(a => <li key={a.slug}><Link className="linky" href={`/stories/${a.slug}/`}>{a.title}</Link> <span className="byline">· {a.section}</span></li>)}</ol>
  </>;
  else if (p.kind === "note") inner = <>
    <span className="label">Editor&apos;s Note</span><h3>A Note from the Editor</h3>
    {props.note.body.map((t, i) => <p key={i} className="note-text">{t}</p>)}
    <span className="byline">— {props.note.author}</span>
  </>;
  else if (p.kind === "fun") inner = <>
    <span className="label">Entertainment</span><h3>Puzzles, a playlist and a cartoon</h3>
    <p>An autumnal playlist, a hot take on rewatching, a word search, a crossword of Pakistan&apos;s archaeological sites, a sudoku and this issue&apos;s political cartoon.</p>
    <Link className="btn ghost" href="/entertainment/">Go to Entertainment</Link>
  </>;
  else if (p.kind === "story") {
    const a = p.a;
    inner = <>
      {a.image && <Photo src={a.image} />}
      <span className="label">{a.section}</span><h3>{a.title}</h3><p>{a.dek}</p>
      <span className="byline">{a.author ? `By ${a.author} · ` : ""}{a.readTime}</span>
      <Link className="btn ghost" href={`/stories/${a.slug}/`}>Read in full</Link>
    </>;
  }
  return <div className="pg">{inner}<span className="pno">Page {n}</span></div>;
}

/** The issue as a book: 3D page-turning leaves on wide screens, one page at a time on phones. */
export function Book(props: Props) {
  const [mode, setMode] = useState<"3d" | "mobile">("3d");
  const [pos, setPos] = useState(0);
  const [turning, setTurning] = useState(-1);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const mq = matchMedia("(max-width: 800px)");
    const f = () => { setMode(mq.matches ? "mobile" : "3d"); setPos(0); };
    f(); mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);

  const pages = useMemo(() => {
    const p: Page[] = [{ kind: "cover" }, { kind: "contents" }, { kind: "note" }, ...props.items.map(a => ({ kind: "story" as const, a })), { kind: "fun" }, { kind: "end" }];
    if (p.length % 2) p.splice(p.length - 1, 0, { kind: "note" });
    return p;
  }, [props.items]);
  const leaves = pages.length / 2;
  const max = mode === "3d" ? leaves : pages.length - 1;

  const turn = (d: number) => {
    const next = Math.max(0, Math.min(max, pos + d));
    if (next === pos) return;
    if (mode === "3d") { setTurning(d > 0 ? pos : next); clearTimeout(timer.current); timer.current = setTimeout(() => setTurning(-1), 1000); }
    setPos(next);
  };

  const info = mode === "3d"
    ? pos === 0 ? "Cover" : pos === leaves ? "Back cover" : `Pages ${2 * pos - 1}–${2 * pos}`
    : `${pos + 1} / ${pages.length}`;

  return (
    <>
      <div
        className="book-host" tabIndex={0} aria-label="Magazine. Use left and right arrow keys to turn pages."
        onKeyDown={e => { if (e.key === "ArrowRight") turn(1); if (e.key === "ArrowLeft") turn(-1); }}
        onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={e => { if (touchX.current !== null) { const dx = e.changedTouches[0].clientX - touchX.current; if (Math.abs(dx) > 50) turn(dx < 0 ? 1 : -1); touchX.current = null; } }}
      >
        {mode === "3d" ? (
          <div className="book3d">
            {Array.from({ length: leaves }, (_, k) => {
              const flipped = k < pos;
              return (
                <div key={k} className={`leaf${flipped ? " flipped" : ""}`} style={{ zIndex: k === turning ? 999 : flipped ? k + 1 : leaves - k }} inert={Math.abs(k - pos) > 1 || undefined}>
                  <div className="face front"><PageView p={pages[2 * k]} n={2 * k} props={props} /></div>
                  <div className="face back"><PageView p={pages[2 * k + 1]} n={2 * k + 1} props={props} /></div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="book-mobile"><PageView p={pages[pos]} n={pos} props={props} /></div>
        )}
      </div>
      <div className="flip">
        <button className="btn" onClick={() => turn(-1)} disabled={pos === 0}>‹ Prev</button>
        <span aria-live="polite">{info}</span>
        <button className="btn" onClick={() => turn(1)} disabled={pos === max}>Next ›</button>
      </div>
    </>
  );
}
