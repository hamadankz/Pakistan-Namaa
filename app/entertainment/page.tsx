import type { Metadata } from "next";
import Link from "next/link";
import { ArticleBody } from "@/components/ArticleBody";
import { Crossword } from "@/components/Crossword";
import { Playlist } from "@/components/Playlist";
import { Sudoku } from "@/components/Sudoku";
import { WordSearch } from "@/components/WordSearch";
import { entertainment as E } from "@/content/issue";
import { hotTake, href } from "@/lib/content";
import { asset } from "@/lib/asset";

export const metadata: Metadata = { title: "Entertainment", description: "An autumnal playlist, a hot take, a word search, a crossword, a sudoku and a political cartoon." };

const JUMP = [["playlist", "Playlist"], ["hot-take", "Hot Take"], ["word-search", "Word Search"], ["crossword", "Crossword"], ["sudoku", "Sudoku"], ["cartoon", "Political Cartoon"]];

export default function Entertainment() {
  return (
    <>
      <div className="wrap page-head ent-page">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><span>Entertainment</span></nav>
        <h1>Entertainment</h1>
        <p>Puzzles, a playlist and a cartoon for the season.</p>
      </div>
      <div className="wrap ent-page">
        <nav className="ent-jump" aria-label="On this page">{JUMP.map(([id, t]) => <a key={id} className="pill" href={`#${id}`}>{t}</a>)}</nav>

        <section className="ent-block" id="playlist">
          <h2>{E.playlist.title}</h2>
          <p className="sub">Autumn Soundtrack</p>
          <div className="playlist-wrap">
            <figure className="poster" style={{ margin: 0 }}><img src={asset(E.playlist.poster)} alt={`Autumn Soundtrack poster listing: ${E.playlist.tracks.map(t => `${t.title} by ${t.artist}`).join("; ")}`} loading="lazy" /></figure>
            <Playlist tracks={E.playlist.tracks} />
          </div>
        </section>

        <section className="ent-block hot-take" id="hot-take">
          <span className="label">Hot Take</span>
          <h3><Link href={href(hotTake)} style={{ color: "inherit", textDecoration: "none" }}>{hotTake.title}</Link></h3>
          <ArticleBody body={hotTake.body} />
        </section>

        <section className="ent-block" id="word-search">
          <h2>Word Search</h2>
          <p className="sub">Drag across a word, or tap its first and last letters.</p>
          <WordSearch puzzles={E.puzzles} />
        </section>

        <section className="ent-block" id="crossword">
          <h2>{E.crossword.title}</h2>
          <p className="sub">{E.crossword.instructions}</p>
          <Crossword grid={E.crossword.grid} numbers={E.crossword.numbers} words={E.crossword.words} answers={E.crossword.answers} />
        </section>

        <section className="ent-block" id="sudoku">
          <h2>{E.sudoku.title}</h2>
          <p className="sub">{E.sudoku.difficulty}</p>
          <p style={{ marginBottom: 18 }}>{E.sudoku.instructions}</p>
          <Sudoku puzzle={E.sudoku.puzzle} solution={E.sudoku.solution} answerNote={E.sudoku.answerNote} />
        </section>

        <section className="ent-block" id="cartoon" style={{ borderBottom: 0 }}>
          <h2>Political Cartoon</h2>
          <figure className="cartoon-frame"><img src={asset(E.cartoon.src)} alt={E.cartoon.alt} loading="lazy" /><figcaption>Lahore, 2040: &ldquo;Now available: one tree per person.&rdquo;</figcaption></figure>
        </section>
      </div>
    </>
  );
}
