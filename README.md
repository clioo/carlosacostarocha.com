# carlosacostarocha.com

Sitio personal de Jesús Carlos Acosta Rocha. Está construido con Next.js, TypeScript y CSS nativo.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Contenido

La biografía, experiencia, proyectos y enlaces públicos viven en `data/site.ts`. El sitio publica GitHub, trayectoria profesional y métricas de proyectos; no incluye domicilio, teléfono ni correo personal del currículum.

Las entradas editoriales viven en `app/writing/`. Al añadir una entrada, actualiza también su registro en `data/site.ts`, `app/sitemap.ts` y `app/rss.xml/route.ts`.

## SEO incluido

- metadata global y por página
- datos estructurados `Person` en JSON-LD
- `sitemap.xml`
- `robots.txt`
- RSS en `/rss.xml`
- resumen para agentes en `/llms.txt`
- URLs canónicas y Open Graph

Cuando el sitio esté desplegado, agrega `https://carlosacostarocha.com/sitemap.xml` en Google Search Console y solicita la indexación de la portada.

## Despliegue

`npm run build` produce una exportación estática en `out/`. El proyecto de Cloudflare Pages se llama `carlosacostarocha` y sirve el dominio `https://carlosacostarocha.com`.

Para publicar la versión actual:

```bash
npm run deploy
```

El comando construye el sitio y sube `out/` a Cloudflare Pages. La autenticación de Wrangler está guardada en el llavero de macOS; si expira, vuelve a iniciar sesión antes de desplegar.

## Verificación

```bash
npm run lint
npm run build
```
