import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <section className="shell not-found">
      <p className="eyebrow">404</p>
      <h1>This page is not here.</h1>
      <p>The address may have changed, or the page may never have existed.</p>
      <div className="not-found-links">
        <Link className="button primary" href="/">
          Return home
        </Link>
        <Link className="text-link" href="/start-here/">
          Start here
        </Link>
        <Link className="text-link" href="/projects/">
          Explore projects
        </Link>
        <Link className="text-link" href="/writing/">
          Read the writing
        </Link>
      </div>
    </section>
  );
}
