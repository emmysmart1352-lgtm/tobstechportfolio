# Tob's Tech — Cybersecurity Expert Personal Brand Site

Next.js 14 (App Router) + TypeScript + Tailwind CSS scaffold for Tob's Tech.

## Design system

- **Colors:** deep navy base (`#050B14`), electric cyan (`#4CD3FF`) and blue
  (`#2F6BFF`) accents, soft white text — dark/premium/technical, deliberately
  avoiding green Matrix-style cliches.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels,
  eyebrows, data — reinforces the "security dashboard" feel).
- **Signature element:** `components/NetworkGrid.tsx` — an abstract, softly
  pulsing node graph used in the hero, standing in for "live monitoring"
  without the hacker-movie tropes.

All tokens live in `tailwind.config.ts` and `app/globals.css`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included

- All 6 pages from the site plan: Home, About, Services, Projects, Blog,
  Contact — with placeholder copy marked `[Placeholder]` where real content
  (bio, certifications, case studies, blog posts) is still needed.
- `/api/contact` route stub — currently just logs submissions. Wire it up to
  an email provider (e.g. Resend) or Supabase before going live.
- SEO: metadata + Open Graph tags in `app/layout.tsx`, per-page metadata,
  `sitemap.ts`, `robots.ts`, and JSON-LD schema markup for a `ProfessionalService`.

## Next steps

1. Replace all `[Placeholder]` content with real bio, certifications, and
   case studies.
2. Add a real Open Graph image at `public/og-image.png` (1200×630).
3. Wire `/api/contact` to an email service or Supabase table.
4. Update `siteUrl` in `app/layout.tsx`, `sitemap.ts`, and `robots.ts` once
   the real domain is set.
5. Add Google Search Console verification + analytics (e.g. Vercel Analytics
   or Plausible) once deployed.
6. Deploy via Vercel, connected to the GitHub repo.
