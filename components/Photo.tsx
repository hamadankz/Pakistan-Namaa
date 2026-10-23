"use client";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

/** A photo that falls back to the patterned placeholder when the file is missing. */
export function Photo({ src, alt = "", cap = "Photo: media team", className = "", eager = false }: { src?: string; alt?: string; cap?: string; className?: string; eager?: boolean }) {
  const [failed, setFailed] = useState(!src);
  const img = useRef<HTMLImageElement>(null);
  // The error can fire before hydration attaches onError, so check once mounted too.
  useEffect(() => { const el = img.current; if (el && el.complete && el.naturalWidth === 0) setFailed(true); }, []);
  return (
    <div className={`photo${failed ? " empty" : ""} ${className}`}>
      {!failed && <img ref={img} src={src && asset(src)} alt={alt} loading={eager ? "eager" : "lazy"} onError={() => setFailed(true)} />}
      {failed && <span className="cap">{cap}</span>}
    </div>
  );
}
