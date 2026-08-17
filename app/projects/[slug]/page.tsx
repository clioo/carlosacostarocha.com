import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { selectedProjects, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return selectedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = selectedProjects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return pageMetadata({
    title: project.title,
    description: `${project.summary} A project by ${site.name}.`,
    path: `/projects/${project.slug}/`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = selectedProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `${site.url}/projects/${project.slug}/`;
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl}#project`,
    url: projectUrl,
    name: project.title,
    description: project.summary,
    creator: { "@id": `${site.url}/#person` },
    author: { "@id": `${site.url}/#person` },
    keywords: project.stack.split(", "),
    sameAs: project.links.map((link) => link.href),
    isPartOf: { "@id": `${site.url}/#website` },
  };

  return (
    <article className="shell project-case">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <Link className="back-link" href="/projects/">
        ← All projects
      </Link>

      <header className="project-case-header">
        <p>{project.type}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>

      <dl className="project-facts">
        <div>
          <dt>My role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{project.status}</dd>
        </div>
        <div>
          <dt>Core stack</dt>
          <dd>{project.stack}</dd>
        </div>
      </dl>

      <div className="project-case-body">
        <section aria-labelledby="context-title">
          <h2 id="context-title">Why it exists</h2>
          <p>{project.context}</p>
        </section>

        <section aria-labelledby="built-title">
          <h2 id="built-title">What I built</h2>
          <ul>
            {project.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="evidence-title">
          <h2 id="evidence-title">Evidence</h2>
          <p>{project.evidence}</p>
          <p>{project.outcome}</p>
        </section>
      </div>

      <div className="project-case-links" aria-label={`${project.title} public links`}>
        {project.links.map((link, index) => (
          <a
            className={index === 0 ? "button primary" : "text-link"}
            href={link.href}
            key={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <nav className="project-next" aria-label="Continue exploring">
        <Link href="/start-here/">Start Here</Link>
        <Link href="/writing/">Read the writing</Link>
        <Link href="/cv/">Review experience</Link>
      </nav>
    </article>
  );
}
