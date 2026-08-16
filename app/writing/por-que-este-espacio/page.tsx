import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Por qué existe este espacio",
  description: "Un lugar propio para pensar en público, documentar proyectos y compartir lo aprendido construyendo con IA.",
  alternates: { canonical: "/writing/por-que-este-espacio" },
};

export default function FirstPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Por qué existe este espacio",
    datePublished: "2026-08-15",
    dateModified: "2026-08-15",
    inLanguage: "es-MX",
    mainEntityOfPage: `${site.url}/writing/por-que-este-espacio`,
    author: { "@type": "Person", name: site.name, url: site.url },
    publisher: { "@type": "Person", name: site.name, url: site.url },
    image: `${site.url}/writing-editorial.png`,
  };

  return (
    <article className="article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <header className="shell article-header">
        <Link className="back-link" href="/writing">← Todas las ideas</Link>
        <p className="meta"><time dateTime="2026-08-15">15 agosto 2026</time><span>3 min</span></p>
        <h1>Por qué existe este espacio</h1>
        <p className="article-deck">Quiero un lugar propio para ordenar ideas, mostrar lo que construyo y compartir lo aprendido trabajando con inteligencia artificial.</p>
      </header>
      <div className="shell article-image">
        <Image src="/writing-editorial.png" alt="Capas de papel translúcido atravesadas por una línea azul" fill priority sizes="(max-width: 767px) 100vw, 980px" />
      </div>
      <div className="article-body">
        <p>Este sitio empieza sin un catálogo de logros perfectamente empacado. Empieza con una intención más útil: tener un lugar donde pensar en público y dejar un registro honesto del trabajo.</p>
        <h2>De consumir a explicar</h2>
        <p>En inteligencia artificial aparecen herramientas, modelos y enfoques nuevos todo el tiempo. Es fácil quedarse en la superficie. Escribir obliga a separar lo que entiendo de lo que solo reconozco, y a explicar las decisiones detrás de cada resultado.</p>
        <h2>Los proyectos también cuentan una historia</h2>
        <p>Quiero documentar mis proyectos personales con más profundidad que una captura y una lista de tecnologías. El problema, las restricciones, los intentos que no funcionaron y las decisiones finales son parte del proyecto.</p>
        <h2>Construir una presencia propia</h2>
        <p>Después de tres años trabajando como AI Engineer, tengo experiencias que vale la pena ordenar y compartir. Este espacio reunirá mi currículum, mi trabajo, mi código y las preguntas que sigo explorando.</p>
        <p>No espero que todo empiece terminado. La idea es que el sitio crezca al mismo tiempo que el trabajo.</p>
      </div>
    </article>
  );
}
