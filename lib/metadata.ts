import type { Metadata } from "next";
import { site } from "@/data/site";

type SocialImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: SocialImage;
  type?: "website" | "article";
  publishedTime?: string;
};

const defaultImage: SocialImage = {
  url: "/social-card-v1.jpg",
  width: 1200,
  height: 630,
  alt: "Abstract composition of paper, metal, and blue thread",
};

export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  type = "website",
  publishedTime,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const canonicalUrl = `${site.url}${canonicalPath}`;
  const socialTitle = path === "/" ? `${site.name} — ${site.role}` : `${title} | ${site.shortName}`;
  const sharedOpenGraph = {
    locale: "en_US",
    url: canonicalUrl,
    siteName: site.name,
    title: socialTitle,
    description,
    images: [image],
  };

  return {
    title: path === "/" ? { absolute: socialTitle } : title,
    description,
    alternates: {
      canonical: canonicalPath,
      types: { "application/rss+xml": "/rss.xml" },
    },
    openGraph:
      type === "article"
        ? {
            ...sharedOpenGraph,
            type: "article",
            publishedTime,
            modifiedTime: publishedTime,
            authors: [site.name],
          }
        : { ...sharedOpenGraph, type: "website" },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}
