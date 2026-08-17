"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { href: "/start-here/", label: "Start Here" },
  { href: "/writing/", label: "Writing" },
  { href: "/projects/", label: "Projects" },
  { href: "/cv/", label: "Experience" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="wordmark" href="/" aria-label="JCAR — Home">
          JCAR
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const route = item.href.replace(/\/$/, "");
            const isCurrent = pathname === route || pathname.startsWith(`${route}/`);
            return (
              <Link href={item.href} key={item.href} aria-current={isCurrent ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-utility">
          <div className="header-socials" aria-label="Professional profiles">
            <a href={site.github} target="_blank" rel="me noreferrer">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="me noreferrer">
              LinkedIn
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
