import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.shortName}` },
  description: site.description,
  alternates: { canonical: "/", types: { "application/rss+xml": "/rss.xml" } },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.description,
    images: [{ url: "/hero-editorial.png", width: 1456, height: 1088, alt: "Composición abstracta de papel, metal e hilo azul" }],
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/hero-editorial.png"] },
};

const themeScript = `
  try {
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = saved || (systemDark ? 'dark' : 'light');
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Autónoma de Sinaloa",
    },
    worksFor: [
      { "@type": "Organization", name: "McGraw Hill" },
      { "@type": "Organization", name: "GliaMediQ" },
    ],
    knowsAbout: [
      "Artificial Intelligence Engineering",
      "Large Language Models",
      "MLOps",
      "Kubernetes",
      "Python",
      "Distributed Systems",
      "Cloud Infrastructure",
    ],
    sameAs: [site.github, site.linkedin].filter(Boolean),
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body className={`${geist.variable} ${mono.variable}`}>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
