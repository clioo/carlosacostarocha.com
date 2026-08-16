import Image from "next/image";
import Link from "next/link";
import { evidence, posts, selectedProjects, site } from "@/data/site";

export default function Home() {
  const post = posts[0];
  const project = selectedProjects[0];

  return (
    <>
      <section className="shell hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">{site.name}</p>
          <h1>IA en producción.<br />Ideas claras.</h1>
          <p className="hero-summary">Soy AI Engineer y fundador técnico. Construyo sistemas que operan a escala y documento cómo llegan a producción.</p>
          <div className="actions">
            <Link className="button primary" href="/projects">Ver proyectos</Link>
            <Link className="text-link" href="/writing">Leer ideas <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-media reveal delay-one">
          <Image src="/hero-editorial.png" alt="Piezas de papel y metal conectadas por un hilo azul" fill priority sizes="(max-width: 767px) 100vw, 50vw" />
        </div>
      </section>

      <section className="evidence-band" aria-label="Resultados seleccionados">
        <div className="shell evidence-grid">
          {evidence.map((item) => (
            <div className="evidence-item" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="shell intro-section">
        <p className="section-lead">Desde 2018 convierto problemas operativos en software. Hoy mi foco está en sistemas de IA confiables, observables y útiles.</p>
        <div className="principles">
          <p><strong>Producción.</strong> Los modelos importan cuando sobreviven al tráfico, los errores y el cambio.</p>
          <p><strong>Contexto.</strong> Documento las decisiones que hacen posible cada resultado.</p>
        </div>
      </section>

      <section className="project-feature">
        <div className="shell project-feature-grid">
          <div className="project-feature-copy">
            <p className="project-type">{project.type}</p>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <strong>{project.outcome}</strong>
            <Link className="text-link" href="/projects">Conocer el proyecto <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="project-feature-stack" aria-label="Tecnologías principales">
            {project.stack.split(", ").map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
      </section>

      <section className="writing-feature">
        <div className="shell feature-grid">
          <div className="feature-image">
            <Image src="/writing-editorial.png" alt="Capas de papel translúcido atravesadas por una línea azul" fill sizes="(max-width: 767px) 100vw, 42vw" />
          </div>
          <div className="feature-copy">
            <p className="meta"><time dateTime={post.date}>15 agosto 2026</time><span>{post.readingTime}</span></p>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <Link className="text-link" href={`/writing/${post.slug}`}>Leer el texto <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="shell now-section">
        <h2>Tres formas de conocer mi trabajo</h2>
        <div className="now-grid">
          <Link href="/writing"><span>Ideas</span><strong>Decisiones sobre IA, ingeniería y producción.</strong></Link>
          <Link href="/projects"><span>Proyectos</span><strong>Problemas, arquitectura, resultados y aprendizajes.</strong></Link>
          <Link href="/cv"><span>Trayectoria</span><strong>Experiencia desde software público hasta IA educativa.</strong></Link>
        </div>
      </section>
    </>
  );
}
