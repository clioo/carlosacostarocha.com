import type { Metadata } from "next";
import Link from "next/link";
import { selectedProjects, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Productos y sistemas de IA, datos e infraestructura construidos por Jesús Carlos Acosta Rocha.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="shell page-shell">
      <div className="page-heading">
        <p className="eyebrow">Trabajo seleccionado</p>
        <h1>Sistemas que llegaron a producción.</h1>
        <p>Una selección de productos y plataformas explicados por el problema, la arquitectura y el resultado que produjeron.</p>
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
            </div>
          </article>
        ))}
      </div>

      <div className="github-cta">
        <div>
          <h2>El código también cuenta la historia.</h2>
          <p>Repositorios, experimentos y contribuciones públicas están disponibles en GitHub.</p>
        </div>
        <a className="button primary" href={site.github} target="_blank" rel="me noreferrer">Abrir GitHub</a>
      </div>
      <Link className="text-link projects-back" href="/writing">Leer cómo trabajo <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
