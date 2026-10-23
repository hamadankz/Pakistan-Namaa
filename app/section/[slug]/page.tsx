import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OpinionCard, StoryRow } from "@/components/StoryCard";
import { SECTIONS } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(SECTIONS).map(slug => ({ slug }));
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = SECTIONS[(await params).slug];
  return s ? { title: s.title, description: s.blurb } : {};
}

export default async function Section({ params }: Params) {
  const slug = (await params).slug, s = SECTIONS[slug];
  if (!s) notFound();
  return (
    <>
      <div className="wrap page-head">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><span>{s.title}</span></nav>
        <h1>{s.title}</h1>
        <p>{s.blurb}</p>
      </div>
      <section className="block wrap" style={{ borderBottom: 0, paddingTop: 16 }}>
        {slug === "opinion"
          ? <div className="cards">{s.articles.map((a, i) => <OpinionCard key={a.slug} a={a} i={i} />)}</div>
          : <div className="list">{s.articles.map(a => <StoryRow key={a.slug} a={a} />)}</div>}
      </section>
    </>
  );
}
