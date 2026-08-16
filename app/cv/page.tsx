import type { Metadata } from "next";
import { experience, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Currículum",
  description: "Trayectoria profesional de Jesús Carlos Acosta Rocha en ingeniería de software, inteligencia artificial e infraestructura.",
  alternates: { canonical: "/cv" },
};

export default function CVPage() {
  return (
    <section className="shell page-shell cv-page">
      <div className="cv-heading">
        <p className="eyebrow">Experiencia profesional</p>
        <h1>{site.name}</h1>
        <p>AI Engineer, fundador técnico y Software Engineer</p>
      </div>

      <div className="cv-summary">
        <p>Construyo y opero plataformas de software desde 2018. Mi trabajo reciente se concentra en asistentes de IA, flujos LLM, búsqueda, evaluación, observabilidad e infraestructura cloud.</p>
        <a className="text-link" href={site.github} target="_blank" rel="me noreferrer">GitHub <span aria-hidden="true">↗</span></a>
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
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="education">
        <p>Educación</p>
        <h2>Ingeniería de Software</h2>
        <span>Universidad Autónoma de Sinaloa, 2019</span>
      </section>
    </section>
  );
}
