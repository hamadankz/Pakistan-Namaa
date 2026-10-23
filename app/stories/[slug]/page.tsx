import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { FactPanel } from "@/components/FactPanel";
import { Gallery } from "@/components/Gallery";
import { Inline } from "@/components/Inline";
import { Photo } from "@/components/Photo";
import { ReaderTools, ReadingProgress } from "@/components/ReaderTools";
import { StoryCard } from "@/components/StoryCard";
import { editorsNote, issue } from "@/content/issue";
import { photoEssay } from "@/content/photos";
import { ALL, excerpt, getArticle, href, initial, main, readTime, related, sectionOf } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => ALL.map(a => ({ slug: a.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return { title: a.title, description: excerpt(a), openGraph: { title: a.title, description: excerpt(a), type: "article" } };
}

export default async function Story({ params }: Params) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const sec = sectionOf(a);
  const i = ALL.indexOf(a), prev = ALL[i - 1], next = ALL[(i + 1) % ALL.length];
  const imageInBody = a.body.some(b => typeof b !== "string" && b.type === "image" && b.src === a.image);
  const showEssay = a.slug === main.slug;

  return (
    <>
      <ReadingProgress />
      <div className="wrap story-layout">
        <article id="article" className="story-main">
          <header className="article-head">
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><Link href={sec.href}>{sec.title}</Link></nav>
            <span className="label">{a.section}</span>
            <h1><Inline text={a.title} /></h1>
            {a.dek && <p className="dek"><Inline text={a.dek} /></p>}
            <div className="byline-row">
              <span className="mono" aria-hidden="true">{initial(a.author ?? "Pakistan Naama")}</span>
              <span className="who">
                <strong>{a.author ? <>By <Inline text={a.author} /></> : issue.name}</strong>
                <span className="byline">{issue.edition} · {readTime(a)}</span>
              </span>
            </div>
            <ReaderTools title={a.title} />
          </header>
          {a.facts && <FactPanel facts={a.facts} />}
          {a.image && !imageInBody && <figure className="fig hero"><Photo src={a.image} alt={a.imageAlt} eager /><figcaption>Photo: media team</figcaption></figure>}
          <ArticleBody body={a.body} />

          {showEssay && (
            <section className="essay-inline" aria-labelledby="essay-h">
              <span className="label">Photo Essay</span>
              <h2 id="essay-h">{photoEssay.title}</h2>
              <p className="byline">{photoEssay.photos.length} photographs from the reporting of this story. Tap any photo to enlarge it.</p>
              <Gallery photos={photoEssay.photos.slice(2, 11)} credit={photoEssay.credit} variant="strip" />
              <Link className="more" href="/photos/" style={{ marginLeft: 0 }}>See all {photoEssay.photos.length} photos →</Link>
            </section>
          )}

          <footer className="article-end">
            <span className="byline">Published in {issue.name} · {issue.edition}</span>
            <Link href={href(next)} className="up-next">
              {next.thumb && <Photo src={next.thumb} alt="" className="thumb" />}
              <span>
                <span className="label">Up next · {next.section}</span>
                <strong>{next.title}</strong>
                <span className="byline">{next.author ? `By ${next.author} · ` : ""}{readTime(next)}</span>
              </span>
            </Link>
            {prev && <Link className="more" href={href(prev)} style={{ marginLeft: 0 }}>‹ Previous: {prev.title}</Link>}
          </footer>
        </article>

        <aside className="rail" aria-label="More from this issue">
          <div className="sticky">
            <div className="rail-box">
              <span className="label">In this issue</span>
              <ol className="numbered">
                {ALL.map(x => (
                  <li key={x.slug} className={x === a ? "current" : undefined}>
                    {x === a ? <span aria-current="page"><span className="label">{x.section} · Reading now</span>{x.title}</span>
                      : <Link href={href(x)}><span className="label">{x.section}</span>{x.title}</Link>}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rail-box">
              <span className="label">Editor&apos;s Note</span>
              <p className="note-text">{editorsNote.body[0]}</p>
              <Link className="more" href="/editors-note/" style={{ marginLeft: 0 }}>Read the note →</Link>
            </div>
          </div>
        </aside>
      </div>

      <section className="block wrap related" aria-labelledby="related-h">
        <div className="sec-head"><h2 id="related-h">More from this issue</h2></div>
        <div className="cards">{related(a, 4).map(x => <StoryCard key={x.slug} a={x} />)}</div>
      </section>
    </>
  );
}
