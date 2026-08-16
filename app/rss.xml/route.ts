import { posts, site } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const items = posts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${site.url}/writing/${post.slug}</link>
      <guid>${site.url}/writing/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.summary}]]></description>
    </item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0"><channel>
      <title>${site.name}</title>
      <link>${site.url}</link>
      <description>${site.description}</description>
      <language>es-MX</language>${items}
    </channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
