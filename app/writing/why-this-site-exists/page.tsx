import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatPostDate, posts, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

const post = posts[0];
const articleUrl = `${site.url}/writing/${post.slug}/`;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.summary,
  path: `/writing/${post.slug}/`,
  type: "article",
  publishedTime: post.date,
  image: {
    url: "/writing-social-v1.jpg",
    width: 1200,
    height: 630,
    alt: "Layers of translucent paper crossed by a blue line",
  },
});

export default function FirstPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    url: articleUrl,
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    isPartOf: { "@id": `${site.url}/#website` },
    author: { "@id": `${site.url}/#person` },
    publisher: { "@id": `${site.url}/#person` },
    image: `${site.url}/writing-social-v1.jpg`,
    articleSection: "Engineering",
    keywords: ["AI engineering", "production AI", "software architecture", "developer tools"],
  };

  return (
    <article className="article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <header className="shell article-header">
        <Link className="back-link" href="/writing/">
          ← All writing
        </Link>
        <p className="meta">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span>{post.readingTime}</span>
        </p>
        <h1>{post.title}</h1>
        <p className="article-deck">
          I want a place to document what I build, explain the decisions behind it, and keep an
          accurate public record of my work.
        </p>
      </header>
      <div className="shell article-image">
        <Image
          src="/writing-editorial-v1.webp"
          alt="Layers of translucent paper crossed by a blue line"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 1080px"
        />
      </div>
      <div className="article-body">
        <p>
          This site is not a finished archive. It is a working record: a place to explain what I am
          building, why I made particular decisions, and what changed once the software met real
          users.
        </p>

        <h2>A résumé is useful, but incomplete</h2>
        <p>
          A résumé compresses years of work into titles, technologies, and short results. A project
          list has the same limitation. It can show what exists without explaining why it was built
          or what made it difficult.
        </p>
        <p>
          I want this site to hold that missing context: the original problem, the constraints, the
          alternatives I considered, and the lessons that appeared only after deployment.
        </p>

        <h2>Writing is part of the engineering work</h2>
        <p>
          AI tooling changes quickly. New models and frameworks appear faster than most teams can
          evaluate them. Writing forces me to separate what I understand from what I merely
          recognize, and to be precise about where a technique is useful.
        </p>
        <p>
          I plan to write about retrieval, LLM orchestration, evaluation, observability,
          asynchronous systems, cloud infrastructure, and the product decisions that shape them.
          The goal is not to predict every trend. It is to document what survives contact with real
          requirements.
        </p>

        <h2>Projects should be inspectable</h2>
        <p>
          Each project on this site should lead somewhere concrete: a live product, a public
          repository, an implementation note, or a clear account of the work. Not every project
          will be finished, and not every experiment will succeed. Both are worth documenting when
          the reasoning is useful.
        </p>
        <p>
          <a href="https://www.opengraph.work/" target="_blank" rel="noreferrer">
            OpenGraph
          </a>
          ,{" "}
          <a href="https://github.com/clioo/write-that-down-patrick" target="_blank" rel="noreferrer">
            Write That Down
          </a>
          , and <a href="https://gliamediq.com/" target="_blank" rel="noreferrer">GliaMediQ</a>{" "}
          represent different parts of my work: developer tooling, local-first software, and an
          independently built product. This site gives me room to explain each one beyond a
          screenshot or a technology list.
        </p>

        <h2>A first-party record</h2>
        <p>
          When someone searches for my name—or asks a search engine or AI system about my work—I
          want the answer to point back to an accurate source I control. That means using my full
          name consistently, linking to GitHub and LinkedIn, and keeping project information
          current.
        </p>
        <p>
          Visibility is not the point by itself. Clarity is. This site should make it easy to
          understand what I work on, how I approach engineering, and where to inspect the work
          directly.
        </p>
        <p>It will grow alongside the projects.</p>

        <nav className="article-next" aria-label="Continue exploring">
          <Link href="/start-here/">Start here</Link>
          <Link href="/projects/">Explore the projects</Link>
          <Link href="/writing/">All writing</Link>
        </nav>
      </div>
    </article>
  );
}
