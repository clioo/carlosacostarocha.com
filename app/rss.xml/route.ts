import { posts, site } from "@/data/site";

export const dynamic = "force-static";

function cdata(value: string) {
  return value.replaceAll("]]>", "]]]]><![CDATA[>");
}

export function GET() {
  const latestPostDate = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))[0]?.date;
  const lastBuildDate = new Date(`${latestPostDate ?? "2026-08-16"}T00:00:00Z`).toUTCString();
  const items = posts
    .map((post) => {
      const postUrl = `${site.url}/writing/${post.slug}/`;
      return `
    <item>
      <title><![CDATA[${cdata(post.title)}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description><![CDATA[${cdata(post.summary)}]]></description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${cdata(site.name)}]]></title>
    <link>${site.url}/</link>
    <description><![CDATA[${cdata(site.description)}]]></description>
    <language>en-US</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
