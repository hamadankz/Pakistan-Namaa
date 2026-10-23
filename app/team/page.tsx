import type { Metadata } from "next";
import Link from "next/link";
import { TeamWall } from "@/components/TeamWall";

export const metadata: Metadata = { title: "The Team", description: "The people behind the paper." };

export default function Team() {
  return (
    <>
      <div className="wrap page-head">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><span>Team</span></nav>
        <h1>The Team</h1>
        <p>The people behind the paper.</p>
      </div>
      <section className="block wrap" style={{ borderBottom: 0, paddingTop: 16 }}><TeamWall /></section>
    </>
  );
}
