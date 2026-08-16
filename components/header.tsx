import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="wordmark" href="/" aria-label="Inicio">
          JCAR
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link href="/writing">Ideas</Link>
          <Link href="/projects">Proyectos</Link>
          <Link href="/cv">Currículum</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
