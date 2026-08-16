import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const socialLinks = [
    site.github ? { label: "GitHub", href: site.github } : null,
    site.linkedin ? { label: "LinkedIn", href: site.linkedin } : null,
    site.email ? { label: "Correo", href: `mailto:${site.email}` } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-name">{site.name}</p>
          <p className="muted">Ideas, proyectos y aprendizaje en público.</p>
        </div>
        <div className="footer-links">
          <Link href="/writing">Ideas</Link>
          <Link href="/projects">Proyectos</Link>
          <Link href="/cv">Currículum</Link>
          <a href="/rss.xml">RSS</a>
          {socialLinks.map((link) => (
            <a href={link.href} key={link.label} rel="me noreferrer" target="_blank">
              {link.label}
            </a>
          ))}
        </div>
        <p className="copyright">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
