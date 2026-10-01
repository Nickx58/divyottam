# Divyottam — Clinical Psychology website

Next.js 16 (App Router) + Tailwind CSS v4. Fully static, SEO-ready.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All copy, services and contact details live in `src/content/site.ts`.
Fill in `site.contact` (phone / WhatsApp / email) before launch — empty fields are hidden.

Set the production URL (used for canonical, sitemap, robots, Open Graph):

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## SEO features

- Metadata API: title template, description, keywords, canonical, Open Graph, Twitter cards, robots directives
- JSON-LD structured data (`WebSite`, `MedicalBusiness`/`MedicalClinic`, `WebPage`) — `src/components/StructuredData.tsx`
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, SVG favicon, generated OG image (`/opengraph-image`)
- Semantic HTML: one `h1`, ordered `h2`/`h3`, landmarks, skip link, accessible SVG illustration
- `next/font` self-hosted fonts (no layout shift), zero client JavaScript beyond Next.js runtime
