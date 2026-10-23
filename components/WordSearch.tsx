"use client";
import { useEffect, useMemo, useRef, useState } from "react";

/* Word search: drag across letters, or tap the first and last letter. */
type Cell = [number, number];
const SIZE = 12, DIRS = [[0, 1], [1, 0], [1, 1], [-1, 1]];
const HELP = "Drag across a word, or tap its first and last letters.";

function rng(seed: number) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }
function buildPuzzle(list: string[], seed: number) {
  const r = rng(seed), g: string[][] = Array.from({ length: SIZE }, () => Array(SIZE).fill(""));
  for (const w of [...list].sort((a, b) => b.length - a.length)) {
    for (let t = 0; t < 800; t++) {
      const [dr, dc] = DIRS[Math.floor(r() * 4)], row = Math.floor(r() * SIZE), col = Math.floor(r() * SIZE);
      const er = row + dr * (w.length - 1), ec = col + dc * (w.length - 1);
      if (er < 0 || er >= SIZE || ec >= SIZE) continue;
      let ok = true;
      for (let k = 0; k < w.length; k++) { const ch = g[row + dr * k][col + dc * k]; if (ch && ch !== w[k]) { ok = false; break; } }
      if (!ok) continue;
      for (let k = 0; k < w.length; k++) g[row + dr * k][col + dc * k] = w[k];
      break;
    }
  }
  const AB = "ABCDEFGHIKLMNOPRSTUY";
  return g.map(row => row.map(ch => ch || AB[Math.floor(r() * AB.length)]));
}
function lineCells([r0, c0]: Cell, [r, c]: Cell): Cell[] | null {
  const dr = Math.sign(r - r0), dc = Math.sign(c - c0);
  if (!(r === r0 || c === c0 || Math.abs(r - r0) === Math.abs(c - c0))) return null;
  const len = Math.max(Math.abs(r - r0), Math.abs(c - c0)) + 1;
  return Array.from({ length: len }, (_, k) => [r0 + dr * k, c0 + dc * k] as Cell);
}
const key = ([r, c]: Cell) => `${r},${c}`;

export function WordSearch({ puzzles }: { puzzles: Record<string, string[]> }) {
  const names = Object.keys(puzzles);
  const [name, setName] = useState(names[0]);
  const list = useMemo(() => puzzles[name].map(w => w.toUpperCase().replace(/[^A-Z]/g, "")).filter(w => w.length > 1 && w.length <= SIZE), [puzzles, name]);
  const grid = useMemo(() => buildPuzzle(list, 7 + name.length * 131), [list, name]);
  const [found, setFound] = useState<Map<string, Cell[]>>(new Map());
  const [sel, setSel] = useState<Cell[]>([]);
  const [msg, setMsg] = useState(HELP);
  const start = useRef<Cell | null>(null);
  const drag = useRef({ on: false, moved: false });
  const gridEl = useRef<HTMLDivElement>(null);

  useEffect(() => { setFound(new Map()); setSel([]); setMsg(HELP); start.current = null; }, [name]);

  const finish = (end: Cell) => {
    const cells = start.current && lineCells(start.current, end);
    start.current = null; setSel([]);
    if (!cells || cells.length < 2) { setMsg("Pick letters in a straight line."); return; }
    const str = cells.map(([r, c]) => grid[r][c]).join("");
    const hit = list.find(w => !found.has(w) && (w === str || w === [...str].reverse().join("")));
    if (!hit) { setMsg(`"${str}" isn't on the list. Try again.`); return; }
    const next = new Map(found).set(hit, cells);
    setFound(next);
    setMsg(next.size === list.length ? `All ${list.length} words found. Shabash!` : `Found ${hit}. ${list.length - next.size} to go.`);
  };
  const cellAt = (e: { clientX: number; clientY: number }): Cell | null => {
    const el = (document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null)?.closest?.("[data-r]") as HTMLElement | null;
    return el && gridEl.current?.contains(el) ? [+el.dataset.r!, +el.dataset.c!] : null;
  };

  useEffect(() => {
    const up = (e: PointerEvent) => {
      if (!drag.current.on) return;
      drag.current.on = false;
      const p = cellAt(e);
      if (drag.current.moved && p) finish(p); // a plain tap keeps the first letter selected
    };
    addEventListener("pointerup", up);
    return () => removeEventListener("pointerup", up);
  });

  const foundCells = new Set([...found.values()].flat().map(key));
  const selCells = new Set(sel.map(key));
  return (
    <div className="wordsearch">
      <div className="tabs">
        {names.map(n => <button key={n} className="btn" aria-pressed={n === name} onClick={() => setName(n)}>{n}</button>)}
      </div>
      <div className="ws-wrap">
        <div
          ref={gridEl} className="ws-grid" style={{ gridTemplateColumns: `repeat(${SIZE}, auto)` }}
          onPointerDown={e => {
            const p = cellAt(e); if (!p) return; e.preventDefault();
            if (start.current && !drag.current.on) { finish(p); return; }
            start.current = p; drag.current = { on: true, moved: false }; setSel([p]);
          }}
          onPointerMove={e => {
            if (!drag.current.on || !start.current) return;
            const p = cellAt(e); if (!p) return;
            if (key(p) !== key(start.current)) drag.current.moved = true;
            setSel(lineCells(start.current, p) || [start.current]);
          }}
          onKeyDown={e => {
            if (e.key !== "Enter" && e.key !== " ") return;
            const b = (e.target as HTMLElement).closest("[data-r]") as HTMLElement | null; if (!b) return;
            e.preventDefault();
            const p: Cell = [+b.dataset.r!, +b.dataset.c!];
            if (start.current) finish(p); else { start.current = p; setSel([p]); }
          }}
        >
          {grid.flatMap((row, r) => row.map((ch, c) => {
            const k = `${r},${c}`;
            return <button key={k} data-r={r} data-c={c} className={selCells.has(k) ? "sel" : foundCells.has(k) ? "found" : undefined} aria-label={`${ch}, row ${r + 1} column ${c + 1}`}>{ch}</button>;
          }))}
        </div>
      </div>
      <p className="ws-msg" aria-live="polite">{msg}</p>
      <ul className="ws-words">{list.map(w => <li key={w} className={found.has(w) ? "done" : undefined}>{w}</li>)}</ul>
    </div>
  );
}
