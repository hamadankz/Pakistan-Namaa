import type { Metadata, Viewport } from "next";
import { Inter, Noto_Nastaliq_Urdu, Playfair_Display, Source_Serif_4 } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { SearchOverlay } from "@/components/SearchOverlay";
import { SiteNav } from "@/components/SiteNav";
import { issue } from "@/content/issue";
import { ALL, summary } from "@/lib/content";
import "./globals.css";

/* Playfair Display for the masthead and headlines, Source Serif 4 for reading, Inter for menus and labels. */
const display = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const body = Source_Serif_4({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--font-body", display: "swap" });
const ui = Inter({ subsets: ["latin"], variable: "--font-ui", display: "swap" });
const urdu = Noto_Nastaliq_Urdu({ weight: ["500"], subsets: ["arabic"], variable: "--font-urdu", display: "swap", preload: false });

export const metadata: Metadata = {
  title: { default: issue.name, template: `%s | ${issue.name}` },
  description: "The Pakistan Naama: a student news magazine from Lahore. Fall Edition.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

// Applies the saved light/dark choice and text size before first paint.
const prefsScript = `try{var t=localStorage.getItem("naama-theme");if(t)document.documentElement.dataset.theme=t;var s=localStorage.getItem("naama-size");if(s)document.documentElement.style.setProperty("--reader-size",s+"px")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={[display, body, ui, urdu].map(f => f.variable).join(" ")}>
      <head><script dangerouslySetInnerHTML={{ __html: prefsScript }} /></head>
      <body>
        <a className="skip" href="#content">Skip to content</a>
        <SiteNav />
        <main id="content">{children}</main>
        <Footer issue={issue} />
        <SearchOverlay items={ALL.map(summary)} />
        <BackToTop />
      </body>
    </html>
  );
}
