"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/nav";
import { openSearch, useTheme } from "./theme";

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
);
const ThemeIcon = ({ dark }: { dark: boolean }) => dark ? (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 2.5v2.3M12 19.2v2.3M2.5 12h2.3M19.2 12h2.3M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
) : (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
);

/** One slim, translucent bar across the top, in the manner of apple.com: name, evenly spaced sections, search and theme. */
export function SiteNav() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const { dark, toggle } = useTheme();
  const on = (h: string) => path.startsWith(h.replace(/\/$/, ""));

  useEffect(() => setMenu(false), [path]);
  useEffect(() => {
    if (!menu) return;
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false); };
    const wide = matchMedia("(min-width: 961px)");
    const close = () => { if (wide.matches) setMenu(false); };
    addEventListener("keydown", key);
    wide.addEventListener("change", close);
    document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", key); wide.removeEventListener("change", close); document.body.style.overflow = ""; };
  }, [menu]);

  return (
    <nav className={`globalnav${menu ? " open" : ""}`} aria-label="Main">
      <div className="wrap gn-bar">
        <Link href="/" className="gn-brand" aria-current={path === "/" ? "page" : undefined}><span className="the">The</span> Pakistan Naama</Link>
        <ul className="gn-links">
          {NAV.map(l => <li key={l.href}><Link href={l.href} className={on(l.href) ? "on" : undefined} aria-current={on(l.href) ? "page" : undefined}>{l.label}</Link></li>)}
        </ul>
        <div className="gn-actions">
          <button className="gn-icon" onClick={openSearch} aria-label="Search the issue"><SearchIcon /></button>
          <button className="gn-icon" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}><ThemeIcon dark={dark} /></button>
          <button className="gn-icon gn-menu" onClick={() => setMenu(m => !m)} aria-expanded={menu} aria-controls="gn-panel" aria-label={menu ? "Close menu" : "Open menu"}>
            <span className="gn-burger" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </div>
      {menu && (
        <div className="gn-panel" id="gn-panel">
          <ul className="wrap">
            <li style={{ animationDelay: "0ms" }}><Link href="/" className={path === "/" ? "on" : undefined}>Home</Link></li>
            {NAV.map((l, i) => <li key={l.href} style={{ animationDelay: `${(i + 1) * 25}ms` }}><Link href={l.href} className={on(l.href) ? "on" : undefined}>{l.label}</Link></li>)}
          </ul>
        </div>
      )}
    </nav>
  );
}
