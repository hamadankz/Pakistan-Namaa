import type { Metadata } from "next";
import Link from "next/link";
import { ArticleBody } from "@/components/ArticleBody";
import { editorsNote } from "@/content/issue";

export const metadata: Metadata = { title: editorsNote.title, description: editorsNote.body[0] };

export default function EditorsNote() {
  return (
    <div className="wrap">
      <article className="note-page">
        <header className="article-head">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><span>Editor&apos;s Note</span></nav>
          <span className="label">Editor&apos;s Note</span>
          <h1>{editorsNote.title}</h1>
        </header>
        <ArticleBody body={editorsNote.body} />
        <p className="signoff">— {editorsNote.author}</p>
      </article>
    </div>
  );
}
