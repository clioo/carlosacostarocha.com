import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-name">{site.name}</p>
          <p className="muted">Writing, projects, and engineering notes in public.</p>
        </div>
        <div className="footer-links">
          <Link href="/writing/">Writing</Link>
          <Link href="/projects/">Projects</Link>
          <Link href="/cv/">Experience</Link>
          <a href="/rss.xml">RSS</a>
          <a href={site.github} rel="me noreferrer" target="_blank">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href={site.linkedin} rel="me noreferrer" target="_blank">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="copyright">© 2026</p>
      </div>
    </footer>
  );
}
