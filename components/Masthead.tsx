"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Issue } from "@/lib/types";
import { asset } from "@/lib/asset";

/** A few autumn leaves drifting behind the masthead on the front page. */
function useLeaves(ref: React.RefObject<HTMLCanvasElement | null>, on: boolean) {
  useEffect(() => {
    const cv = ref.current;
    if (!on || !cv || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = cv.getContext("2d")!;
    const root = document.documentElement;
    let W = 0, H = 0, visible = true, raf = 0, tick = 0, colors: Record<string, string> = {};
    const readColors = () => { const s = getComputedStyle(root); colors = Object.fromEntries(["--burgundy", "--orange", "--olive"].map(n => [n, s.getPropertyValue(n).trim()])); };
    const size = () => { const d = devicePixelRatio || 1; W = cv.clientWidth; H = cv.clientHeight; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
    size(); readColors();
    addEventListener("resize", size);
    const mk = (y?: number) => ({ x: Math.random() * W, y: y ?? -20, s: 5 + Math.random() * 7, v: .2 + Math.random() * .4, a: Math.random() * 6.28, sp: (Math.random() - .5) * .03, sw: Math.random() * 6.28, c: ["--burgundy", "--orange", "--olive"][Math.floor(Math.random() * 3)] });
    const L = Array.from({ length: Math.max(8, Math.round(W / 110)) }, () => mk(Math.random() * H));
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(cv);
    const frame = () => {
      if (visible) {
        if (++tick % 60 === 0) readColors(); // picks up a theme switch
        ctx.clearRect(0, 0, W, H);
        for (const l of L) {
          l.y += l.v; l.sw += .02; l.x += Math.sin(l.sw) * .5; l.a += l.sp;
          if (l.y > H + 20) Object.assign(l, mk());
          ctx.save(); ctx.translate(l.x, l.y); ctx.rotate(l.a); ctx.globalAlpha = .16; ctx.fillStyle = colors[l.c];
          ctx.beginPath(); ctx.moveTo(0, -l.s); ctx.quadraticCurveTo(l.s * .8, 0, 0, l.s); ctx.quadraticCurveTo(-l.s * .8, 0, 0, -l.s); ctx.fill();
          ctx.restore();
        }
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", size); io.disconnect(); ctx.clearRect(0, 0, W, H); };
  }, [ref, on]);
}

/** The front-page masthead: date, the paper's name, its Urdu name and the edition. */
export function Masthead({ issue }: { issue: Issue }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [logo, setLogo] = useState(false);
  const [today, setToday] = useState("");
  useLeaves(canvas, true);
  useEffect(() => { const i = new Image(); i.onload = () => setLogo(true); i.src = asset(issue.logo); }, [issue.logo]);
  useEffect(() => setToday(new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })), []);
  return (
    <header className="masthead" id="masthead">
      <canvas ref={canvas} aria-hidden="true" />
      <div className="inner wrap">
        <div className="mast-line"><span>{today}</span><span>{issue.edition}</span></div>
        {logo && <img className="logo" src={asset(issue.logo)} alt="" />}
        <h1 className="wordmark"><span className="the">The</span> Pakistan Naama</h1>
        <div className="mast-sub">
          <span className="urdu" lang="ur">{issue.urdu}</span>
          <span className="dot" aria-hidden="true">◆</span>
          <span className="tag">{issue.tagline}</span>
        </div>
      </div>
    </header>
  );
}
