"use client";
import { useMemo, useRef, useState } from "react";

type Props = { puzzle: string[]; solution: string[]; answerNote: string };

export function Sudoku({ puzzle, solution, answerNote }: Props) {
  const given = puzzle.join("").split("").map(ch => (ch === "." ? "" : ch));
  const sol = solution.join("").split("");
  const [vals, setVals] = useState(given);
  const [checked, setChecked] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  // Cells that repeat a digit within their row, column or box.
  const clashes = useMemo(() => {
    const bad = new Set<number>();
    const groups: number[][] = [];
    for (let k = 0; k < 9; k++) {
      groups.push(Array.from({ length: 9 }, (_, j) => k * 9 + j));
      groups.push(Array.from({ length: 9 }, (_, j) => j * 9 + k));
      groups.push(Array.from({ length: 9 }, (_, j) => (Math.floor(k / 3) * 3 + Math.floor(j / 3)) * 9 + (k % 3) * 3 + (j % 3)));
    }
    for (const g of groups) for (const a of g) for (const b of g) if (a !== b && vals[a] && vals[a] === vals[b]) bad.add(a);
    return bad;
  }, [vals]);

  const solved = vals.every((v, i) => v === sol[i]);
  const filled = vals.every(Boolean);
  const focus = (i: number) => refs.current[i]?.focus();

  return (
    <div className="sudoku">
      <div className="sdk-play">
        <div className="sdk-grid" role="grid" aria-label="Sudoku">
          {vals.map((v, i) => {
            const r = Math.floor(i / 9), c = i % 9, fixed = !!given[i];
            const cls = `sdk-cell${fixed ? " given" : ""}${c % 3 === 2 && c < 8 ? " edge-r" : ""}${r % 3 === 2 && r < 8 ? " edge-b" : ""}${clashes.has(i) && !fixed ? " clash" : ""}${checked && v && !fixed && v !== sol[i] ? " wrong" : ""}`;
            return (
              <span key={i} className={cls}>
                {fixed ? <b aria-label={`Row ${r + 1}, column ${c + 1}: ${v}`}>{v}</b> : (
                  <input
                    ref={el => { refs.current[i] = el; }} value={v} inputMode="numeric" maxLength={2} autoComplete="off" aria-label={`Row ${r + 1}, column ${c + 1}`}
                    onChange={e => { const d = e.target.value.replace(/[^1-9]/g, "").slice(-1); setVals(p => { const n = [...p]; n[i] = d; return n; }); setChecked(false); }}
                    onKeyDown={e => {
                      const m: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 9, ArrowUp: -9 };
                      if (!(e.key in m)) return;
                      e.preventDefault();
                      for (let j = i + m[e.key]; j >= 0 && j < 81; j += m[e.key]) {
                        if (Math.abs(m[e.key]) === 1 && Math.floor(j / 9) !== r) break;
                        if (!given[j]) return focus(j);
                      }
                    }}
                  />
                )}
              </span>
            );
          })}
        </div>
        <div className="sdk-side">
          <div className="xw-actions">
            <button className="btn" onClick={() => setChecked(true)}>Check</button>
            <button className="btn ghost" onClick={() => { setVals(given); setChecked(false); }}>Clear</button>
            <button className="btn ghost" onClick={() => setShowKey(s => !s)} aria-expanded={showKey}>{showKey ? "Hide answer key" : "Answer key"}</button>
          </div>
          <p className="ws-msg" aria-live="polite">{solved ? "Solved. Shabash!" : checked ? (filled ? "Not quite: wrong digits are marked in red." : "Wrong digits so far are marked in red.") : "Type a digit in any empty square. Repeats in a row, column or box turn orange."}</p>
        </div>
      </div>
      {showKey && (
        <div className="answer-key">
          <h4>Sudoku Answer Key</h4>
          <p className="byline">{answerNote}</p>
          <div className="sdk-grid key" role="img" aria-label="Sudoku answer key">
            {sol.map((v, i) => {
              const r = Math.floor(i / 9), c = i % 9;
              return <span key={i} className={`sdk-cell${given[i] ? " given" : " shaded"}${c % 3 === 2 && c < 8 ? " edge-r" : ""}${r % 3 === 2 && r < 8 ? " edge-b" : ""}`}><b>{v}</b></span>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
