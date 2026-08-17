import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { evidence, posts, selectedProjects, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Start here to explore the production AI systems, independent products, professional experience, and technical writing of Jesús Carlos Acosta Rocha.";

export const metadata: Metadata = pageMetadata({
  title: "Start Here",
  description,
  path: "/start-here/",
});

const routes = [
  {
    verb: "Build",
    title: "Products with a public surface.",
    description:
      "Medical education software, a visual editor for agent graphs, and a local-first transcription app—each linked to the live product, source, or both.",
    href: "/projects/",
    label: "Explore the projects",
  },
  {
    verb: "Operate",
    title: "Systems that have met production.",
    description:
      "Experience across AI assistants, distributed services, industrial ML, search, asynchronous processing, and cloud infrastructure since 2018.",
    href: "/cv/",
    label: "Review experience",
  },
  {
    verb: "Explain",
    title: "Decisions, limits, and lessons.",
    description:
      "Writing about the architecture and trade-offs behind useful AI systems—not just their final demos.",
    href: "/writing/",
    label: "Read the writing",
  },
];

const focusAreas = [
  {
    title: "Production AI",
    description: "Evaluation, observability, asynchronous workflows, and the path from prototype to operation.",
  },
  {
    title: "Systems for education and health",
    description: "Software where provenance, reviewability, privacy, and human judgment remain part of the product.",
  },
  {
    title: "Developer tools",
    description: "Local-first interfaces and protocols that make complex agent and software workflows easier to inspect.",
  },
  {
    title: "Cloud and distributed systems",
    description: "Python services, queues, search, Kubernetes, AWS, and Azure under real operating constraints.",
  },
];

export default function StartHerePage() {
  const featuredPost = posts[0];
  const startHereSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/start-here/#page`,
    url: `${site.url}/start-here/`,
    name: `Start Here | ${site.name}`,
    description,
    inLanguage: "en-US",
    about: { "@id": `${site.url}/#person` },
    mainEntity: { "@id": `${site.url}/#person` },
    hasPart: selectedProjects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: `${site.url}/projects/${project.slug}/`,
    })),
  };

  return (
    <section className="shell page-shell start-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(startHereSchema) }}
      />

      <header className="page-heading start-heading">
        <p className="eyebrow">Start here</p>
        <h1>A map of what I build and how I think.</h1>
        <p>
          This page is the shortest route through my work: the systems I have operated, the
          products I am building, and the ideas I am documenting in public.
        </p>
      </header>

      <section className="start-profile" aria-labelledby="profile-title">
        <div className="start-portrait">
          <Image
            src={site.photo}
            alt="Jesús Carlos Acosta Rocha smiling beside his dog outdoors"
            fill
            priority
            fetchPriority="high"
            loading="eager"
            sizes="(max-width: 900px) 100vw, 38vw"
          />
        </div>
        <div className="start-profile-copy">
          <p className="start-name">{site.name}</p>
          <h2 id="profile-title">AI engineer, software engineer, and technical founder.</h2>
          <p>
            I have built production software since 2018 across public services, commerce,
            industry, education, and healthcare. My current work centers on AI systems that are
            observable, reviewable, and useful after the demo ends.
          </p>
          <p>
            I use this site to connect claims to evidence: working products, public source,
            operating context, and the writing that explains the decisions behind them.
          </p>
          <ul className="start-proof" aria-label="Selected evidence">
            {evidence.map((item) => (
              <li key={item.area}>
                <span>{item.area}</span>
                <strong>{item.detail}</strong>
              </li>
            ))}
          </ul>
          <div className="profile-links" aria-label="Professional profiles">
            <a href={site.github} target="_blank" rel="me noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href={site.linkedin} target="_blank" rel="me noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="start-routes" aria-labelledby="routes-title">
        <div className="start-section-heading">
          <h2 id="routes-title">Choose a route through the work.</h2>
          <p>Each route leads from a concise overview to the underlying evidence.</p>
        </div>
        <div className="start-route-list">
          {routes.map((route) => (
            <article key={route.verb}>
              <Link className="start-route-link" href={route.href}>
                <p>{route.verb}</p>
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.description}</p>
                </div>
                <span className="start-route-cta">
                  {route.label} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="focus-section" aria-labelledby="focus-title">
        <div className="start-section-heading">
          <h2 id="focus-title">Core threads.</h2>
          <p>These topics connect my professional work, independent projects, and writing.</p>
        </div>
        <dl className="focus-list">
          {focusAreas.map((area) => (
            <div key={area.title}>
              <dt>{area.title}</dt>
              <dd>{area.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="first-stops" aria-labelledby="stops-title">
        <h2 id="stops-title">If you only open three pages.</h2>
        <ol>
          <li>
            <Link href={`/projects/${selectedProjects[0].slug}/`}>
              <span>{selectedProjects[0].title}</span>
              <strong>{selectedProjects[0].summary}</strong>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
          <li>
            <Link href={`/projects/${selectedProjects[1].slug}/`}>
              <span>{selectedProjects[1].title}</span>
              <strong>{selectedProjects[1].summary}</strong>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
          <li>
            <Link href={`/writing/${featuredPost.slug}/`}>
              <span>{featuredPost.title}</span>
              <strong>{featuredPost.summary}</strong>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ol>
      </section>
    </section>
  );
}
