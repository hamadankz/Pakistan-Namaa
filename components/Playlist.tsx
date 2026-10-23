"use client";
import { useEffect, useRef, useState } from "react";

type Track = { title: string; artist: string; preview: string; apple: string; art: string };

const PlayIcon = () => <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>;
const PauseIcon = () => <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" /></svg>;

/** Plays Apple's official 30-second previews of each song in order; "Full song" opens the track in Apple Music. */
export function Playlist({ tracks }: { tracks: Track[] }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const currentRef = useRef<number | null>(null);
  useEffect(() => { currentRef.current = current; }, [current]);

  const play = (i: number) => {
    const a = audio.current; if (!a) return;
    if (i === current) { if (a.paused) a.play().catch(() => setError(true)); else a.pause(); return; }
    setCurrent(i); setProgress(0); setError(false);
    a.src = tracks[i].preview;
    a.play().catch(() => setError(true));
  };

  useEffect(() => {
    const a = audio.current; if (!a) return;
    const onTime = () => setProgress(a.duration ? a.currentTime / a.duration : 0);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      // Move on to the next song, like a playlist.
      const c = currentRef.current;
      const n = c !== null && c + 1 < tracks.length ? c + 1 : null;
      setCurrent(n); setProgress(0);
      if (n !== null) { a.src = tracks[n].preview; a.play().catch(() => setError(true)); }
    };
    a.addEventListener("timeupdate", onTime); a.addEventListener("play", onPlay); a.addEventListener("pause", onPause); a.addEventListener("ended", onEnded);
    return () => { a.removeEventListener("timeupdate", onTime); a.removeEventListener("play", onPlay); a.removeEventListener("pause", onPause); a.removeEventListener("ended", onEnded); };
  }, [tracks]);

  const now = current === null ? null : tracks[current];
  return (
    <div className="player">
      <div className="player-head">
        <button className="btn" onClick={() => play(current ?? 0)} aria-label={playing ? "Pause" : current === null ? "Play all previews" : "Resume"}>
          {playing ? <PauseIcon /> : <PlayIcon />} {playing ? "Pause" : current === null ? "Play all" : "Resume"}
        </button>
        <span className="byline" aria-live="polite">
          {error ? "Couldn't play this preview. Try the Full song link." : now ? `${playing ? "Now playing" : "Paused"}: ${now.title} · ${now.artist}` : "30-second previews of each song"}
        </span>
      </div>
      <ol className="tracks">
        {tracks.map((t, i) => {
          const on = i === current;
          return (
            <li key={t.title} className={on ? "on" : undefined}>
              <button className="track-play" onClick={() => play(i)} aria-label={`${on && playing ? "Pause" : "Play"} ${t.title} by ${t.artist}`} aria-pressed={on && playing}>
                <img src={t.art} alt="" width={48} height={48} loading="lazy" />
                <span className="track-icon">{on && playing ? <PauseIcon /> : <PlayIcon />}</span>
              </button>
              <span className="track-text">
                <span className="track-title"><span className="track-no">{String(i + 1).padStart(2, "0")}</span>{t.title}</span>
                <span className="track-artist">{t.artist}</span>
                {on && <span className="track-bar" aria-hidden="true"><i style={{ width: `${progress * 100}%` }} /></span>}
              </span>
              <a className="track-full" href={t.apple} target="_blank" rel="noopener" aria-label={`Full song: ${t.title} on Apple Music`}>Full song ↗</a>
            </li>
          );
        })}
      </ol>
      <p className="byline player-note">Previews courtesy of Apple Music.</p>
      <audio ref={audio} preload="none" />
    </div>
  );
}
