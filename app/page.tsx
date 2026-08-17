import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { evidence, formatPostDate, posts, selectedProjects, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

export default function Home() {
  const post = posts[0];
  const project = selectedProjects[0];

  return (
    <>
      <section className="shell hero">
        <div className="hero-copy">
          <p className="eyebrow">{site.name}</p>
          <h1>
            Production AI.
            <br />
            Clear decisions.
          </h1>
          <p className="hero-summary">
            I’m an AI engineer and technical founder. I build software for education and healthcare,
            then write about the architecture, trade-offs, and operating lessons behind it.
          </p>
          <div className="actions">
            <Link className="button primary" href="/projects/">
              Explore my projects
            </Link>
            <Link className="text-link" href="/writing/">
              Read my writing
            </Link>
          </div>
          <div className="profile-links" aria-label="Professional profiles">
            <a href={site.github} target="_blank" rel="me noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href={site.linkedin} target="_blank" rel="me noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-media">
          <Image
            src="/hero-editorial-v1.webp"
            alt="Paper and metal pieces connected by a blue thread"
            fill
            priority
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="evidence-band" aria-labelledby="evidence-title">
        <div className="shell evidence-layout">
          <div className="evidence-heading">
            <p className="eyebrow">Selected evidence</p>
            <h2 id="evidence-title">Systems beyond the prototype.</h2>
          </div>
          <ol className="evidence-list">
            {evidence.map((item, index) => (
              <li key={item.area}>
                <span className="evidence-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{item.area}</strong>
                  <p>{item.detail}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.linkLabel} <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell intro-section">
        <p className="section-lead">
          I have worked on production software since 2018, across public services, commerce,
          industry, education, and health.
        </p>
        <div className="principles">
          <p>
            <strong>Production.</strong> Models matter when they survive traffic, failure, and change.
          </p>
          <p>
            <strong>Context.</strong> I document the decisions that make each result possible.
          </p>
        </div>
      </section>

      <section className="project-feature" aria-labelledby="featured-project-title">
        <div className="shell project-feature-grid">
          <div className="project-feature-copy">
            <p className="project-type">{project.type}</p>
            <h2 id="featured-project-title">{project.title}</h2>
            <p>{project.summary}</p>
            <strong>{project.outcome}</strong>
            <a className="text-link" href={project.links[0].href} target="_blank" rel="noreferrer">
              {project.links[0].label} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="project-feature-stack" aria-label="Core technologies">
            {project.stack.split(", ").map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="writing-feature" aria-labelledby="featured-writing-title">
        <div className="shell feature-grid">
          <div className="feature-image">
            <Image
              src="/writing-editorial-v1.webp"
              alt="Layers of translucent paper crossed by a blue line"
              fill
              sizes="(max-width: 767px) 100vw, 42vw"
            />
          </div>
          <div className="feature-copy">
            <p className="meta">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span>{post.readingTime}</span>
            </p>
            <h2 id="featured-writing-title">{post.title}</h2>
            <p>{post.summary}</p>
            <Link className="text-link" href={`/writing/${post.slug}/`}>
              Read the post
            </Link>
          </div>
        </div>
      </section>

      <section className="shell work-section" aria-labelledby="work-title">
        <h2 id="work-title">Three ways into my work.</h2>
        <div className="work-index">
          <Link href="/writing/">
            <span>Writing</span>
            <strong>Field notes on AI systems, engineering decisions, and production trade-offs.</strong>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/projects/">
            <span>Projects</span>
            <strong>Independent products and open-source tools, linked to the live work and source.</strong>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/cv/">
            <span>Experience</span>
            <strong>Software engineering, cloud infrastructure, and applied AI since 2018.</strong>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
