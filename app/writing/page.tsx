import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, posts } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

const description =
  "The first public engineering note by Jesús Carlos Acosta Rocha, with more writing added as his projects progress.";

export const metadata: Metadata = pageMetadata({
  title: "Writing",
  description,
  path: "/writing/",
});

export default function WritingPage() {
  return (
    <section className="shell page-shell">
      <div className="page-heading">
        <p className="eyebrow">Writing</p>
        <h1>Notes from building.</h1>
        <p>
          The first note is below. Future entries will document production AI, software
          architecture, developer tools, and the decisions behind systems I am actively building.
        </p>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <article key={post.slug}>
            <p className="meta">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span>{post.readingTime}</span>
            </p>
            <h2>
              <Link href={`/writing/${post.slug}/`}>{post.title}</Link>
            </h2>
            <p>{post.summary}</p>
          </article>
        ))}
      </div>
      <a className="text-link writing-rss" href="/rss.xml">
        Follow the RSS feed
      </a>
    </section>
  );
}
