"use client";
import { useMemo, useRef, useState } from "react";

type Props = { grid: string[]; numbers: Record<string, number>; words: string[]; answers: string[] };
type Dir = "across" | "down";

/** The crossword from the entertainment section, playable: type in the grid, check, or open the answer key. */
export function Crossword({ grid, numbers, words, answers }: Props) {
  const R = grid.length, C = grid[0].length;
  const isCell = (r: number, c: number) => r >= 0 && c >= 0 && r < R && c < C && grid[r][c] !== ".";
  const [vals, setVals] = useState<string[]>(() => Array(R * C).fill(""));
  const [active, setActive] = useState<[number, number] | null>(null);
  const [dir, setDir] = useState<Dir>("across");
  const [checked, setChecked] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const focus = (r: number, c: number) => refs.current[r * C + c]?.focus();
  const step = (d: Dir) => (d === "across" ? [0, 1] : [1, 0]);
  const hasRun = (r: number, c: number, d: Dir) => { const [dr, dc] = step(d); return isCell(r + dr, c + dc) || isCell(r - dr, c - dc); };

  // The cells of the word under the cursor, for highlighting.
  const word = useMemo(() => {
    if (!active) return new Set<number>();
    const [dr, dc] = step(dir); let [r, c] = active;
    while (isCell(r - dr, c - dc)) { r -= dr; c -= dc; }
    const s = new Set<number>();
    while (isCell(r, c)) { s.add(r * C + c); r += dr; c += dc; }
    return s;
  }, [active, dir]); // eslint-disable-line react-hooks/exhaustive-deps

  const select = (r: number, c: number) => {
    if (active && active[0] === r && active[1] === c && hasRun(r, c, dir === "across" ? "down" : "across")) setDir(dir === "across" ? "down" : "across");
    else if (!hasRun(r, c, dir)) setDir(dir === "across" ? "down" : "across");
    setActive([r, c]);
  };
  const move = (r: number, c: number, dr: number, dc: number) => {
    for (let k = 1; k < Math.max(R, C); k++) if (isCell(r + dr * k, c + dc * k)) return focus(r + dr * k, c + dc * k);
  };
  const set = (i: number, v: string) => { setVals(p => { const n = [...p]; n[i] = v; return n; }); setChecked(false); };

  const filled = vals.every((v, i) => !isCell(Math.floor(i / C), i % C) || v);
  const solved = filled && vals.every((v, i) => !isCell(Math.floor(i / C), i % C) || v === grid[Math.floor(i / C)][i % C]);

  const board = (key: boolean) => (
    <div className="xw-grid" style={{ gridTemplateColumns: `repeat(${C}, var(--xw))` }} role={key ? "img" : "grid"} aria-label={key ? "Crossword answer key" : "Crossword grid"}>
      {grid.flatMap((row, r) => [...row].map((ch, c) => {
        const i = r * C + c, n = numbers[`${r},${c}`];
        if (ch === ".") return <span key={i} className="xw-block" />;
        if (key) return <span key={i} className="xw-cell">{n && <small>{n}</small>}<b>{ch}</b></span>;
        const wrong = checked && vals[i] && vals[i] !== ch;
        return (
          <span key={i} className={`xw-cell${word.has(i) ? " in-word" : ""}${wrong ? " wrong" : ""}`}>
            {n && <small>{n}</small>}
            <input
              ref={el => { refs.current[i] = el; }} value={vals[i]} maxLength={2} inputMode="text" autoCapitalize="characters" autoComplete="off" spellCheck={false}
              aria-label={`Row ${r + 1}, column ${c + 1}${n ? `, clue ${n}` : ""}`}
              onFocus={() => { if (!active || active[0] !== r || active[1] !== c) select(r, c); }}
              onMouseDown={() => { if (document.activeElement === refs.current[i]) select(r, c); }}
              onChange={e => {
                const v = e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(-1);
                set(i, v);
                if (v) { const [dr, dc] = step(dir); if (isCell(r + dr, c + dc)) focus(r + dr, c + dc); }
              }}
              onKeyDown={e => {
                const arrows: Record<string, [number, number, Dir]> = { ArrowRight: [0, 1, "across"], ArrowLeft: [0, -1, "across"], ArrowDown: [1, 0, "down"], ArrowUp: [-1, 0, "down"] };
                if (arrows[e.key]) { e.preventDefault(); const [dr, dc, d] = arrows[e.key]; setDir(d); move(r, c, dr, dc); }
                else if (e.key === "Backspace" && !vals[i]) { e.preventDefault(); const [dr, dc] = step(dir); if (isCell(r - dr, c - dc)) { set((r - dr) * C + c - dc, ""); focus(r - dr, c - dc); } }
              }}
            />
          </span>
        );
      }))}
    </div>
  );

  return (
    <div className="crossword">
      <div className="xw-play">
        <div className="xw-wrap">{board(false)}</div>
        <div className="xw-side">
          <h4 className="label">Words</h4>
          <ul className="xw-words">{words.map(w => <li key={w}>{w}</li>)}</ul>
          <div className="xw-actions">
            <button className="btn" onClick={() => setChecked(true)}>Check</button>
            <button className="btn ghost" onClick={() => { setVals(Array(R * C).fill("")); setChecked(false); }}>Clear</button>
            <button className="btn ghost" onClick={() => setShowKey(s => !s)} aria-expanded={showKey}>{showKey ? "Hide answer key" : "Answer key"}</button>
          </div>
          <p className="ws-msg" aria-live="polite">{solved ? "Solved. Shabash!" : checked ? (filled ? "Some letters are off; they're marked in red." : "So far so good where marked. Keep going.") : "Click a square and type. Click again to switch between across and down."}</p>
        </div>
      </div>
      {showKey && (
        <div className="answer-key">
          <h4>Answer Key</h4>
          <div className="xw-wrap">{board(true)}</div>
          <ul className="xw-answers">{answers.map(a => <li key={a}>{a}</li>)}</ul>
        </div>
      )}
    </div>
  );
}
