import Link from "next/link";
import type { Issue } from "@/lib/types";
import { NAV } from "@/lib/nav";

export function Footer({ issue }: { issue: Issue }) {
  return (
    <footer>
      <div className="wrap foot-main">
        <div className="foot-brand">
          <Link href="/" className="name">The Pakistan Naama</Link>
          <span className="urdu" lang="ur">{issue.urdu}</span>
          <p>{issue.tagline}.</p>
          <small>{issue.credit}</small>
        </div>
        <nav className="foot-col" aria-label="Footer">
          <span className="foot-head">Sections</span>
          <ul>
            {NAV.slice(1).map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            <li><Link href="/editors-note/">Editor&apos;s Note</Link></li>
          </ul>
        </nav>
        <div className="foot-col">
          <span className="foot-head">Follow us</span>
          <ul>
            <li><a href={issue.instagram} target="_blank" rel="noopener">Instagram <span className="handle">@the.pakistan.naama</span></a></li>
            <li><a href={issue.x} target="_blank" rel="noopener">X <span className="handle">@thepakistannama</span></a></li>
            <li><a href={issue.facebook} target="_blank" rel="noopener">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-base"><div className="wrap"><small>© 2026 {issue.name} · {issue.edition}</small></div></div>
    </footer>
  );
}
