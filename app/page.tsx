import Link from "next/link";
import { FactPanel } from "@/components/FactPanel";
import { Gallery } from "@/components/Gallery";
import { Inline } from "@/components/Inline";
import { Masthead } from "@/components/Masthead";
import { LeadStory, OpinionCard } from "@/components/StoryCard";
import { editorsNote, entertainment, issue, team } from "@/content/issue";
import { photoEssay } from "@/content/photos";
import { ALL, columns, excerpt, hotTake, href, main, readTime, side } from "@/lib/content";
import { asset } from "@/lib/asset";

/** A small picture of the crossword's shape for the puzzles card. */
function CrosswordPreview() {
  const g = entertainment.crossword.grid;
  return (
    <span className="xw-mini" style={{ gridTemplateColumns: `repeat(${g[0].length}, 1fr)` }} aria-hidden="true">
      {g.flatMap((row, r) => [...row].map((ch, c) => <i key={`${r}-${c}`} className={ch === "." ? undefined : "c"} />))}
    </span>
  );
}

export default function Home() {
  const people = Object.values(team).flat().length;
  const tracks = entertainment.playlist.tracks;
  const feature = side[0];
  return (
    <>
      <Masthead issue={issue} />

      <section className="intro" aria-labelledby="intro-label">
        <div className="wrap">
          <span className="label" id="intro-label">About Pakistan Naama</span>
          {issue.intro.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      </section>

      <section className="block wrap" aria-label="Main story">
        <div className="front">
          <LeadStory a={main} />
          <aside className="rail-box contents" aria-labelledby="contents-label">
            <span className="label" id="contents-label">In this issue</span>
            <ol className="numbered">
              {ALL.map(a => <li key={a.slug}><Link href={href(a)}><span className="label">{a.section}</span>{a.title}</Link></li>)}
            </ol>
            <Link className="more" href="/issue/" style={{ marginLeft: 0 }}>Read it as a magazine →</Link>
          </aside>
        </div>
      </section>

      {feature && (
        <section className="block wrap" aria-labelledby="feature-h">
          <div className="sec-head"><h2 id="feature-h">Features</h2><p>The story beside the main story.</p><Link className="more" href="/section/features/">All features →</Link></div>
          <Link href={href(feature)} className="story feature">
            <span className="feature-text">
              <span className="label">{feature.section}</span>
              <h3>{feature.title}</h3>
              <p><Inline text={excerpt(feature, 56)} /></p>
              <span className="byline">{readTime(feature)}</span>
              <span className="btn">Read the story →</span>
            </span>
            {feature.facts && <FactPanel facts={feature.facts} />}
          </Link>
        </section>
      )}

      <section className="block wrap" aria-labelledby="opinion-h">
        <div className="sec-head"><h2 id="opinion-h">Opinion</h2><p>Opinion, commentary and the occasional bit of satire.</p><Link className="more" href="/section/opinion/">All opinion →</Link></div>
        <div className="op-grid">{columns.map((a, i) => <OpinionCard key={a.slug} a={a} i={i} />)}</div>
      </section>

      <section className="note-band" aria-labelledby="note-h">
        <div className="wrap">
          <span className="label">Editor&apos;s Note</span>
          <h2 id="note-h">{editorsNote.title}</h2>
          <div className="note-body">{editorsNote.body.map((t, i) => <p key={i}>{t}</p>)}</div>
          <p className="signoff">— {editorsNote.author}</p>
        </div>
      </section>

      <section className="block wrap" aria-labelledby="photos-h">
        <div className="sec-head"><h2 id="photos-h">Photo Essay</h2><p>{photoEssay.title}: {photoEssay.photos.length} photographs from the reporting of the main story.</p><Link className="more" href="/photos/">See all photos →</Link></div>
        <Gallery photos={photoEssay.photos.slice(0, 8)} credit={photoEssay.credit} variant="strip" />
      </section>

      <section className="block wrap" aria-labelledby="fun-h">
        <div className="sec-head"><h2 id="fun-h">Entertainment</h2><p>A playlist, a hot take, puzzles and a cartoon for the season.</p><Link className="more" href="/entertainment/">Go to Entertainment →</Link></div>
        <div className="media-cards">
          <Link className="media-card" href="/entertainment/#playlist">
            <span className="media"><img src={asset(entertainment.playlist.poster)} alt="" loading="lazy" /></span>
            <span className="label">{entertainment.playlist.title}</span>
            <h3>Autumn Soundtrack</h3>
            <p>{tracks.slice(0, 3).map(t => t.title).join(", ")} and {tracks.length - 3} more. Play the previews.</p>
          </Link>
          <Link className="media-card" href={href(hotTake)}>
            <span className="media media-quote"><span>“Rewatching is not laziness. It’s quality control.”</span></span>
            <span className="label">{hotTake.section}</span>
            <h3>{hotTake.title}</h3>
            <p>{readTime(hotTake)}</p>
          </Link>
          <Link className="media-card" href="/entertainment/#crossword">
            <span className="media"><CrosswordPreview /></span>
            <span className="label">Puzzles</span>
            <h3>Word search, crossword and sudoku</h3>
            <p>Including a crossword of Pakistan&apos;s archaeological sites.</p>
          </Link>
          <Link className="media-card" href="/entertainment/#cartoon">
            <span className="media media-white"><img src={asset(entertainment.cartoon.src)} alt="" loading="lazy" /></span>
            <span className="label">Political Cartoon</span>
            <h3>Lahore, 2040</h3>
            <p>&ldquo;Now available: one tree per person.&rdquo;</p>
          </Link>
        </div>
      </section>

      <section className="wrap" aria-label="Read the issue">
        <Link href="/issue/" className="issue-promo">
          <span className="promo-cover" aria-hidden="true"><span className="label">{issue.edition}</span><span className="big">The Pakistan Naama</span></span>
          <span className="promo-text">
            <span className="label">Read the Issue</span>
            <strong>Turn the pages of the Fall Edition</strong>
            <span>Every story in this issue, laid out as a magazine you can flip through.</span>
            <span className="btn">Open the magazine →</span>
          </span>
        </Link>
      </section>

      <section className="block wrap" aria-labelledby="team-h" style={{ borderBottom: 0 }}>
        <div className="sec-head"><h2 id="team-h">The Team</h2><p>{people} students made this issue.</p><Link className="more" href="/team/">Meet the team →</Link></div>
        <dl className="credits">
          {Object.entries(team).map(([role, names]) => <div key={role}><dt>{role}</dt><dd>{names.join(", ")}</dd></div>)}
        </dl>
      </section>
    </>
  );
}
