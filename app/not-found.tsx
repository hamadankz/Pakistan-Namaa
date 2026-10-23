import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page-head" style={{ paddingBlock: "60px 80px" }}>
      <h1>Page not found</h1>
      <p>That page isn&apos;t in this issue.</p>
      <p style={{ marginTop: 16 }}><Link className="btn" href="/">Back to the front page</Link></p>
    </div>
  );
}
