import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  experience,
  openSource,
  profile,
  type CompanyMark,
  type EvidenceItem,
} from "@/data/experience";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import "./home.css";

export const metadata: Metadata = pageMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

const featured = experience.filter((role) => role.featured);
const earlier = experience.filter((role) => !role.featured);

function Mark({
  mark,
  slug,
  mini = false,
}: {
  mark: CompanyMark;
  slug: string;
  mini?: boolean;
}) {
  return (
    <span className={`mark-chip${mini ? " mini" : ""}`} data-brand={slug} aria-hidden="true">
      {mark.kind === "file" ? (
        // Company-owned press assets are intentionally rendered as ordinary images.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={mark.src} alt="" />
      ) : (
        <span className="mark-word">{mark.text}</span>
      )}
    </span>
  );
}

function ExternalNote() {
  return <span className="p2-sr-only"> (opens in a new tab)</span>;
}

function Evidence({ evidence }: { evidence: EvidenceItem }) {
  return (
    <div className="p2-evidence">
      <p className="p2-evidence-label">Documented evidence</p>
      <strong>{evidence.value}</strong>
      <p>{evidence.label}</p>
      {evidence.sourceHref ? (
        <a href={evidence.sourceHref} target="_blank" rel="noreferrer">
          {evidence.sourceLabel} <span aria-hidden="true">↗</span>
          <ExternalNote />
        </a>
      ) : (
        <span className="p2-evidence-source">{evidence.sourceLabel}</span>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="p2-home p2-page">
      <header className="p2-head">
        <div className="shell p2-head-row">
          <Link className="p2-wordmark" href="/" aria-label={`${site.name} — Home`}>
            JCAR
          </Link>
          <nav className="p2-nav" aria-label="Primary navigation">
            <a href="#experience">Experience</a>
            <a href="#open-source">Open source</a>
            <Link href="/writing/">Writing</Link>
            <Link href="/projects/">Projects</Link>
            <a href={site.linkedin} target="_blank" rel="me noreferrer">
              Contact <span aria-hidden="true">↗</span>
              <ExternalNote />
            </a>
          </nav>
        </div>
      </header>

      <div className="p2-content">
        <section className="p2-hero">
          <div className="p2-glow" aria-hidden="true" />
          <div className="shell">
            <p className="p2-kicker">
              {site.name} — {profile.headline}
            </p>
            <h1>
              I build AI products that hold up in production.
            </h1>
            <p className="p2-sub">{profile.summary}</p>
            <div className="p2-cta-row">
              <a className="p2-btn" href="#experience">
                Explore selected work <span aria-hidden="true">↓</span>
              </a>
              <a className="p2-btn ghost" href={profile.cvUrl} target="_blank" rel="noreferrer">
                Download the CV <span aria-hidden="true">↘</span>
                <ExternalNote />
              </a>
            </div>
            <dl className="p2-proof-strip">
              <div>
                <dt>Education AI</dt>
                <dd>Teacher and student products in production</dd>
              </div>
              <div>
                <dt>Medical training</dt>
                <dd>Founder-built platform with 9,000+ published cases</dd>
              </div>
              <div>
                <dt>Distributed systems</dt>
                <dd>Marketplace and industrial platforms at multi-country scale</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="p2-index" aria-labelledby="career-index-title">
          <div className="shell">
            <div className="p2-section-intro">
              <p className="p2-eyebrow">Career index</p>
              <h2 id="career-index-title">Selected experience, in context.</h2>
              <p>
                Featured roles are selected for relevance, not strict chronology. Founder work at
                GliaMediQ continued alongside full-time engineering roles.
              </p>
            </div>
            <div className="p2-index-grid">
              {experience.map((role) => (
                <a className="p2-index-item" href={`#experience-${role.slug}`} key={role.slug}>
                  <Mark mark={role.mark} slug={role.slug} mini />
                  <span>
                    <strong>{role.company}</strong>
                    <small>{role.role}</small>
                  </span>
                  <time>{role.period}</time>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div id="experience">
          {featured.map((role, index) => (
            <section
              className="p2-chapter"
              data-side={index % 2 === 0 ? "left" : "right"}
              id={`experience-${role.slug}`}
              key={role.slug}
            >
              <div className="shell p2-chapter-grid">
                <div className="p2-copy">
                  <p className="p2-chapter-meta">
                    {role.period} · {role.location}
                  </p>
                  <div className="p2-copy-head">
                    <Mark mark={role.mark} slug={role.slug} />
                    <div>
                      <h2>{role.company}</h2>
                      <p>{role.companyNote ?? role.role}</p>
                    </div>
                  </div>
                  {role.companyNote ? <p className="p2-role">{role.role}</p> : null}
                  <p className="p2-ownership">{role.ownership}</p>
                  {role.product ? <Evidence evidence={role.evidence} /> : null}
                  <ul className="p2-highlights">
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <details className="p2-stack-details">
                    <summary>Implementation stack</summary>
                    <ul className="p2-stack" aria-label={`${role.company} implementation stack`}>
                      {role.stack.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </details>
                  {role.href ? (
                    <div className="p2-actions">
                      <a
                        className="p2-text-link"
                        href={role.product?.href ?? role.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {role.product?.label ?? "Visit company site"} <span aria-hidden="true">↗</span>
                        <ExternalNote />
                      </a>
                    </div>
                  ) : null}
                </div>

                {role.product ? (
                  <figure className="p2-monitor">
                    <div className="p2-monitor-bar" aria-hidden="true">
                      <span className="p2-monitor-dots"><i /><i /><i /></span>
                      <span className="p2-monitor-url">
                        {role.product.href.replace("https://", "").replace(/\/$/, "")}
                      </span>
                    </div>
                    <Image
                      src={role.product.image}
                      alt={role.product.imageAlt}
                      width={1440}
                      height={900}
                      sizes="(max-width: 980px) 92vw, 620px"
                    />
                    <figcaption>Public product · captured from the live platform</figcaption>
                  </figure>
                ) : (
                  <aside className="p2-record-card" aria-label={`${role.company} documented evidence`}>
                    <p className="p2-eyebrow">Documented evidence</p>
                    <strong>{role.evidence.value}</strong>
                    <p>{role.evidence.label}</p>
                    <dl>
                      <div><dt>Role</dt><dd>{role.role}</dd></div>
                      <div><dt>Location</dt><dd>{role.location}</dd></div>
                      <div><dt>Period</dt><dd>{role.period}</dd></div>
                    </dl>
                  </aside>
                )}
              </div>
            </section>
          ))}
        </div>

        <section className="p2-exp" aria-labelledby="earlier-title">
          <div className="shell">
            <div className="p2-section-intro compact">
              <p className="p2-eyebrow">Earlier work</p>
              <h2 id="earlier-title">The systems underneath the résumé.</h2>
              <p>Production ML, technical leadership, quality engineering, and public-sector delivery.</p>
            </div>
            <ol className="p2-timeline">
              {earlier.map((role) => (
                <li id={`experience-${role.slug}`} key={role.slug}>
                  <Mark mark={role.mark} slug={role.slug} mini />
                  <div className="p2-timeline-main">
                    <div className="p2-timeline-heading">
                      <h3>{role.company}</h3>
                      <span>{role.period}</span>
                    </div>
                    <p className="p2-timeline-role">{role.role} · {role.location}</p>
                    <p className="p2-timeline-ownership">{role.ownership}</p>
                    <p className="p2-timeline-evidence">
                      <strong>{role.evidence.value}</strong>
                      <span>{role.evidence.label}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="p2-oss" id="open-source" aria-labelledby="open-source-title">
          <div className="shell p2-section-intro">
            <p className="p2-eyebrow">Independent work</p>
            <h2 id="open-source-title">Open source, with the source visible.</h2>
            <p>Public products that make the engineering inspectable, not merely described.</p>
          </div>
          {openSource.map((project, index) => (
            <article className="p2-project" data-side={index % 2 === 0 ? "left" : "right"} key={project.slug}>
              <div className="shell p2-project-grid">
                <div className="p2-project-copy">
                  <p className="p2-chapter-meta">{project.status} · {project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="p2-line-copy">{project.line}</p>
                  <div className="p2-project-evidence">
                    <strong>{project.signal}</strong>
                    <span>{project.signalLabel}</span>
                  </div>
                  <ul className="p2-stack" aria-label={`${project.title} implementation stack`}>
                    {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <div className="p2-actions">
                    {project.links.map((link, linkIndex) => (
                      <a
                        className={linkIndex === 0 ? "p2-btn" : "p2-btn ghost"}
                        href={link.href}
                        key={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label} <span aria-hidden="true">↗</span>
                        <ExternalNote />
                      </a>
                    ))}
                  </div>
                </div>
                <figure className="p2-monitor">
                  <div className="p2-monitor-bar" aria-hidden="true">
                    <span className="p2-monitor-dots"><i /><i /><i /></span>
                    <span className="p2-monitor-url">
                      {project.links[0].href.replace("https://", "").replace(/\/$/, "")}
                    </span>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    sizes="(max-width: 980px) 92vw, 620px"
                  />
                </figure>
              </div>
            </article>
          ))}
        </section>

        <section className="p2-closing" aria-labelledby="closing-title">
          <div className="shell">
            <p className="p2-eyebrow">Next conversation</p>
            <h2 id="closing-title">Need an engineer who can own the path to production?</h2>
            <p>
              I am open to senior engineering, AI platform, technical leadership, and product-building conversations.
            </p>
            <div className="p2-cta-row">
              <a className="p2-btn" href={site.linkedin} target="_blank" rel="me noreferrer">
                Start a conversation <span aria-hidden="true">↗</span>
                <ExternalNote />
              </a>
              <a className="p2-btn ghost" href={profile.cvUrl} target="_blank" rel="noreferrer">
                Review the CV <span aria-hidden="true">↘</span>
                <ExternalNote />
              </a>
            </div>
          </div>
        </section>
      </div>

      <nav className="p2-mobile-nav" aria-label="Mobile navigation">
        <a href="#experience">Work</a>
        <a href="#open-source">Open source</a>
        <Link href="/writing/">Writing</Link>
      </nav>

      <footer className="p2-foot">
        <div className="shell p2-foot-row">
          <span>© 2026 {site.name} · {profile.education}</span>
          <div className="p2-foot-links">
            <a href={profile.cvUrl} target="_blank" rel="noreferrer">CV <ExternalNote /></a>
            <a href={site.github} target="_blank" rel="me noreferrer">GitHub <ExternalNote /></a>
            <a href={site.linkedin} target="_blank" rel="me noreferrer">LinkedIn <ExternalNote /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
