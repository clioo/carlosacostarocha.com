import type { Metadata } from "next";
import Link from "next/link";
import { selectedProjects, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Independent products and open-source AI tools built by Jesús Carlos Acosta Rocha, with direct links to live work and source code.";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description,
  path: "/projects/",
});

export default function ProjectsPage() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Jesús Carlos Acosta Rocha",
    description,
    itemListElement: selectedProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: project.links[0].href,
        creator: { "@id": `${site.url}/#person` },
        sameAs: project.links.map((link) => link.href),
      },
    })),
  };

  return (
    <section className="shell page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <div className="page-heading">
        <p className="eyebrow">Selected work</p>
        <h1>Products and tools I have built.</h1>
        <p>
          Independent products and open-source projects, described by what they do, how they work,
          and where to explore them.
        </p>
      </div>

      <div className="project-list">
        {selectedProjects.map((project) => (
          <article className="project-row" key={project.slug}>
            <div className="project-row-heading">
              <p>{project.type}</p>
              <h2>{project.title}</h2>
            </div>
            <div className="project-row-body">
              <p>{project.summary}</p>
              <strong>{project.outcome}</strong>
              <p className="project-stack">{project.stack}</p>
              <div className="project-links" aria-label={`${project.title} links`}>
                {project.links.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="social-cta">
        <div>
          <h2>The source is part of the work.</h2>
          <p>
            Browse the code, tests, and implementation notes behind my public projects, or connect
            with me professionally.
          </p>
        </div>
        <div className="social-cta-links">
          <a className="button primary" href={site.github} target="_blank" rel="me noreferrer">
            View my GitHub profile <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href={site.linkedin} target="_blank" rel="me noreferrer">
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <Link className="text-link projects-back" href="/writing/">
        Read how I work
      </Link>
    </section>
  );
}
