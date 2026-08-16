# AQUA Innovations Website

Production-oriented React/Vite website for AQUA Innovations.

## Stack

- React 19
- React Router
- Vite
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Vercel SPA deployment

## Local development

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run lint
npm run build
npm run preview
```

## Routes

- `/` — Homepage
- `/services` — Capabilities
- `/work` — Work index
- `/work/:slug` — Project case study
- `/team` — Team
- `/about` — About
- `/testimonials` — Client reviews / testimonials
- `/contact` — Contact
- `/faqs` — FAQs
- `/privacy` — Privacy
- `/terms` — Terms
- `/blog` — legacy redirect to `/testimonials`

## Content editing

Core repeatable content is centralized in `src/data/`:

- `services.js`
- `projects.js`
- `team.js`
- `industries.js`
- `testimonials.js`

## SEO / AEO

- Route metadata and dynamic canonical URLs: `src/hooks/usePageMeta.js`
- JSON-LD helper: `src/hooks/useStructuredData.js`
- Organization + WebSite structured data on the root document
- Visible FAQ answers + FAQPage JSON-LD for machine-readable context
- Dedicated semantic Client Reviews route without fabricated rating markup
- Descriptive image alt text and stronger internal linking
- `public/robots.txt` and `public/sitemap.xml` provide crawl infrastructure

Update the sitemap whenever permanent routes are added or removed.

## Motion and accessibility

Motion should communicate state, direction, hierarchy, story or feedback. Desktop pointer effects do not initialize on coarse-pointer devices, reduced-motion preferences are respected, and the slide-out menu includes keyboard focus management plus internal scrolling for short viewports.

## Deployment

`vercel.json` and `public/_redirects` preserve SPA routing. Vercel serves `index.html` for client-side routes.
