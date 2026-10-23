import Link from "next/link";
import { excerpt, href, initial, monoColors, readTime } from "@/lib/content";
import type { Article } from "@/lib/types";
import { Inline } from "./Inline";
import { Photo } from "./Photo";

const Byline = ({ a }: { a: Article }) => (
  <span className="byline">
    {a.author && <><span className="by">By <Inline text={a.author} /></span> · </>}
    {readTime(a)}
  </span>
);

/** Stands in for a photo on stories that lead with figures instead. */
const StatMedia = ({ a, className }: { a: Article; className: string }) =>
  a.facts ? <span className={className} aria-hidden="true"><b>{a.facts.stats[0].value}</b><small>{a.facts.stats[0].label}</small></span> : null;

/** A parenthetical in the headline gets the italic accent. */
function accent(title: string) {
  const m = title.match(/^(.*?)\s*(\(.+\))$/);
  return m ? <>{m[1]} <em>{m[2]}</em></> : title;
}

/** The front-page cover story: photo beside a big headline. */
export function LeadStory({ a }: { a: Article }) {
  return (
    <Link href={href(a)} className="story lead">
      {a.image && <Photo src={a.image} alt={a.imageAlt} eager className="lead-photo" />}
      <span className="lead-text">
        <span className="label">{a.section}</span>
        <h2>{accent(a.title)}</h2>
        <p className="dek"><Inline text={excerpt(a, 46)} /></p>
        <Byline a={a} />
        <span className="btn">Read the story →</span>
      </span>
    </Link>
  );
}

/** A standard card. Without a photo it becomes a clean text card. */
export function StoryCard({ a, photo = true }: { a: Article; photo?: boolean }) {
  const pic = photo && a.thumb;
  const stat = photo && !pic && a.facts;
  return (
    <Link href={href(a)} className={`story card${pic || stat ? "" : " text-card"}`}>
      {pic && <Photo src={a.thumb} alt={a.imageAlt} />}
      {stat && <StatMedia a={a} className="stat-media" />}
      <span className="label">{a.section}</span>
      <h3><Inline text={a.title} /></h3>
      <p><Inline text={excerpt(a, 26)} /></p>
      <Byline a={a} />
    </Link>
  );
}

/** A row with the thumbnail on the right, for section listings. */
export function StoryRow({ a }: { a: Article }) {
  return (
    <Link href={href(a)} className="story row">
      <span className="row-text">
        <span className="label">{a.section}</span>
        <h3><Inline text={a.title} /></h3>
        <p><Inline text={excerpt(a, 30)} /></p>
        <Byline a={a} />
      </span>
      {a.thumb ? <Photo src={a.thumb} alt={a.imageAlt} className="thumb" /> : <StatMedia a={a} className="stat-media thumb" />}
    </Link>
  );
}

/** Opinion card with the writer's monogram, as on a newspaper's opinion page. */
export function OpinionCard({ a, i = 0 }: { a: Article; i?: number }) {
  return (
    <Link href={href(a)} className="story op-card">
      <span className="op-top">
        <span className="mono" style={{ background: monoColors[i % 3] }} aria-hidden="true">{initial(a.author ?? "Pakistan Naama")}</span>
        <span className="op-who">
          <span className="label">{a.section}</span>
          <strong>{a.author ?? "The Pakistan Naama"}</strong>
        </span>
      </span>
      <h3><Inline text={a.title} /></h3>
      <p><Inline text={excerpt(a, 30)} /></p>
      <span className="byline">{readTime(a)}</span>
    </Link>
  );
}
