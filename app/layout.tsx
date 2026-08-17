import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.role}`, template: `%s | ${site.shortName}` },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f6" },
    { media: "(prefers-color-scheme: dark)", color: "#18191b" },
  ],
};

const themeScript = `
  try {
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (systemDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        alternateName: "Carlos Acosta Rocha",
        url: `${site.url}/`,
        jobTitle: site.role,
        description: site.description,
        image: {
          "@type": "ImageObject",
          url: site.photoUrl,
          caption: `${site.name} with his dog outdoors`,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Autonomous University of Sinaloa",
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
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.name,
        description: site.description,
        inLanguage: "en-US",
        publisher: { "@id": `${site.url}/#person` },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`${geist.variable} ${mono.variable}`}>
        <a className="skip-link" href="#content">Skip to content</a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
