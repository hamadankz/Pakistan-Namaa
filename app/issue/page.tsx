import type { Metadata } from "next";
import Link from "next/link";
import { Book } from "@/components/Book";
import { editorsNote, issue, main } from "@/content/issue";
import { ALL, summary } from "@/lib/content";

export const metadata: Metadata = { title: "Read the Issue", description: "Turn the pages of the Fall Edition." };

export default function IssuePage() {
  return (
    <>
      <div className="wrap page-head">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><span>Read the Issue</span></nav>
        <h1>Read the Issue</h1>
        <p>Turn the pages of the Fall Edition. Arrow keys work too; on a phone, swipe.</p>
      </div>
      <section className="block issue"><div className="wrap">
        <Book items={ALL.map(summary)} name={issue.name} edition={issue.edition} coverLine={main.title} note={editorsNote} />
      </div></section>
    </>
  );
}
