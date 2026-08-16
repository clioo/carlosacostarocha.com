import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/site";

export const metadata: Metadata = { title: "Ideas", description: "Artículos y notas de Jesús Carlos Acosta Rocha sobre IA, ingeniería y proyectos." };

export default function WritingPage() {
  return (
    <section className="shell page-shell">
      <div className="page-heading">
        <p className="eyebrow">Ideas</p>
        <h1>Escribir para pensar mejor.</h1>
        <p>Notas sobre inteligencia artificial, decisiones técnicas y el trabajo de llevar una idea a algo que funciona.</p>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <article key={post.slug}>
            <p className="meta"><time dateTime={post.date}>15 agosto 2026</time><span>{post.readingTime}</span></p>
            <h2><Link href={`/writing/${post.slug}`}>{post.title}</Link></h2>
            <p>{post.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
