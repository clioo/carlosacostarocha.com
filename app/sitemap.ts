import type { MetadataRoute } from "next";
import { posts, selectedProjects, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/start-here/", "/writing/", "/projects/", "/cv/"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-08-17T00:00:00Z"),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : path === "/start-here/" ? 0.9 : 0.8,
  }));
  const projectPages = selectedProjects.map((project) => ({
    url: `${site.url}/projects/${project.slug}/`,
    lastModified: new Date("2026-08-17T00:00:00Z"),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));
  const postPages = posts.map((post) => ({
    url: `${site.url}/writing/${post.slug}/`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...postPages];
}
