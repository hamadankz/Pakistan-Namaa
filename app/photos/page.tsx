import type { Metadata } from "next";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { photoEssay } from "@/content/photos";
import { href, main } from "@/lib/content";
import { asset } from "@/lib/asset";

export const metadata: Metadata = { title: `Photo Essay: ${photoEssay.title}`, description: photoEssay.dek };

export default function Photos() {
  return (
    <>
      <div className="wrap page-head">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><span>Photos</span></nav>
        <span className="label">Photo Essay</span>
        <h1>{photoEssay.title}</h1>
        <p>{photoEssay.dek}</p>
        <p className="byline">{photoEssay.credit} · {photoEssay.photos.length} photographs · Tap any photo to enlarge it</p>
      </div>
      <section className="block wrap" style={{ paddingTop: 12 }}>
        <Gallery photos={photoEssay.photos} credit={photoEssay.credit} />
      </section>
      <section className="wrap" style={{ paddingBlock: "8px 48px" }}>
        <Link href={href(main)} className="up-next">
          {main.thumb && <img className="thumb" src={asset(main.thumb)} alt="" />}
          <span>
            <span className="label">Read the story behind the photos</span>
            <strong>{main.title}</strong>
            <span className="byline">By {main.author}</span>
          </span>
        </Link>
      </section>
    </>
  );
}
