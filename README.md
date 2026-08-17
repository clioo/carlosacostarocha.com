# carlosacostarocha.com

The personal website of Jesús Carlos Acosta Rocha, built with Next.js, TypeScript, and native CSS.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content

Biography, experience, projects, and public links live in `data/site.ts`. The site intentionally omits the home address, phone number, and personal email contained in the source résumé.

Editorial posts live in `app/writing/`. When adding a post, add its record to `data/site.ts`; the sitemap and RSS feed derive their entries from that data.

## Search and agent discovery

- Global and per-page metadata
- `Person`, `WebSite`, `ItemList`, and `BlogPosting` structured data
- `sitemap.xml`
- `robots.txt`
- RSS at `/rss.xml`
- Agent summary at `/llms.txt`
- Canonical URLs and page-specific Open Graph cards

Submit `https://carlosacostarocha.com/sitemap.xml` in Google Search Console after a production deployment.

## Deployment

`npm run build` creates a static export in `out/`. The Cloudflare Pages project is named `carlosacostarocha` and serves `https://carlosacostarocha.com`.

Publish the current version with:

```bash
npm run deploy
```

Wrangler authentication is stored in the macOS keychain. Re-authenticate before deploying if the token expires.

## Verification

```bash
npm run lint
npm run build
```
