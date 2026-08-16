import type { MetadataRoute } from "next";
import { posts, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/writing", "/projects", "/cv"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-08-15"),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
  const postPages = posts.map((post) => ({
    url: `${site.url}/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));
  return [...staticPages, ...postPages];
}
