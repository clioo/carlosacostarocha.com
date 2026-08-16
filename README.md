# carlosacostarocha.com

Sitio personal de Jesús Carlos Acosta Rocha. Está construido con Next.js, TypeScript y CSS nativo.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Contenido que debes completar

Los datos personales y enlaces viven en `data/site.ts`. Añade ahí:

- URL de GitHub
- URL de LinkedIn
- correo público

La experiencia y los proyectos públicos viven en `data/site.ts`. Los datos privados del currículum no se publican.

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

`npm run build` produce una exportación estática en `out/`. Cloudflare puede servir ese directorio directamente y volver a construirlo en cada push a GitHub.

## Verificación

```bash
npm run lint
npm run build
```
