import type { Metadata } from "next";
import { experience, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Professional experience of Jesús Carlos Acosta Rocha across artificial intelligence, software engineering, distributed systems, and cloud infrastructure.";

export const metadata: Metadata = pageMetadata({
  title: "CV & Experience",
  description,
  path: "/cv/",
});

export default function CVPage() {
  return (
    <section className="shell page-shell cv-page">
      <div className="cv-heading">
        <p className="eyebrow">Professional experience</p>
        <h1>{site.name}</h1>
        <p>AI engineer and software engineer</p>
      </div>

      <div className="cv-summary">
        <p>
          I build and operate production systems across education, healthcare, commerce, and
          industrial software. My recent work focuses on LLM workflows, retrieval, evaluation,
          observability, asynchronous processing, and cloud infrastructure on AWS and Azure.
        </p>
        <div className="cv-profile-links" aria-label="Professional profiles">
          <a className="text-link" href={site.github} target="_blank" rel="me noreferrer">
            View my code on GitHub <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href={site.linkedin} target="_blank" rel="me noreferrer">
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-entry" key={`${item.company}-${item.period}`}>
            <div className="experience-place">
              <p>{item.period}</p>
              <h2>{item.company}</h2>
              <strong>{item.role}</strong>
            </div>
            <div className="experience-detail">
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="education">
        <p>Education</p>
        <h2>Bachelor’s degree in Software Engineering</h2>
        <span>Autonomous University of Sinaloa, 2019</span>
      </section>
    </section>
  );
}
