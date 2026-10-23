import { team } from "@/content/issue";
import { initial, monoColors } from "@/lib/content";

export function TeamWall() {
  let k = 0;
  return (
    <div className="team">
      {Object.entries(team).map(([role, names]) => (
        <div key={role}>
          <h3>{role}</h3>
          <ul>{names.map(n => <li key={n}><span className="mono" style={{ background: monoColors[k++ % 3] }} aria-hidden="true">{initial(n)}</span>{n}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}
