import type { Block } from "@/lib/types";
import { Inline } from "./Inline";
import { Photo } from "./Photo";
import { asset } from "@/lib/asset";

export function ArticleBody({ body, credit = "Photo: media team" }: { body: Block[]; credit?: string }) {
  return (
    <div className="article-body">
      {body.map((b, i) => {
        if (typeof b === "string") {
          return b.startsWith("> ") ? <blockquote key={i}><Inline text={b.slice(2)} /></blockquote> : <p key={i}><Inline text={b} /></p>;
        }
        if (b.type === "pull") {
          // Repeats a line from the text, so screen readers skip it.
          return <aside key={i} className="pull" aria-hidden="true"><Inline text={b.text} /></aside>;
        }
        if (b.type === "image") {
          const tweet = b.align === "tweet";
          // A photo that opens the article runs wide and cropped, so the first paragraph stays near the top of the screen.
          if (i === 0 && !tweet) return (
            <figure key={i} className="fig lead-fig">
              <Photo src={b.src} alt={b.alt} eager />
              <figcaption>{b.caption ?? credit}</figcaption>
            </figure>
          );
          return (
            <figure key={i} className={tweet ? "fig fig-tweet" : "fig"}>
              <img src={asset(b.src)} alt={b.alt} loading="lazy" decoding="async" />
              {!tweet && <figcaption>{b.caption ?? credit}</figcaption>}
            </figure>
          );
        }
        return (
          <figure key={i} className="verse">
            <blockquote lang={b.lang} dir={b.lang === "ur" ? "rtl" : undefined}>
              {b.lines.map((l, k) => <span key={k}>{l}</span>)}
            </blockquote>
            {b.translit && <figcaption>{b.translit}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}
