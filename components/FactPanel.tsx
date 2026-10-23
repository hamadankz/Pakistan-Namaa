import type { Facts } from "@/lib/types";

/** Headline figures and meters for a story without photos. Numbers come from the story's own text. */
export function FactPanel({ facts, compact = false }: { facts: Facts; compact?: boolean }) {
  return (
    <figure className={`facts${compact ? " compact" : ""}`}>
      <figcaption className="facts-title">{facts.title}</figcaption>
      <dl className="facts-stats">
        {facts.stats.map(s => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}
      </dl>
      {!compact && (
        <div className="facts-meters">
          {facts.meters.map(m => {
            const pct = Math.round(m.value / m.max * 100);
            return (
              <div key={m.label} className="meter">
                <div className="meter-head"><span>{m.label}</span><strong>{pct}%</strong></div>
                <div className="meter-track" role="meter" aria-valuemin={0} aria-valuemax={m.max} aria-valuenow={m.value} aria-label={`${m.label}: ${m.valueText} of ${m.maxText}`}>
                  <div className="meter-fill" style={{ width: `${pct}%` }} />
                </div>
                <div className="meter-foot">{m.valueText} of {m.maxText}</div>
              </div>
            );
          })}
        </div>
      )}
      <p className="facts-source">{facts.source}</p>
    </figure>
  );
}
