# Kadz Tech

Landing page for a B2B logistics marketplace (warehousing, transportation and fulfillment), built with React, Vite and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

## Customizing

- Brand name, phone, WhatsApp, email and address: `src/config.js`
- Theme colors and fonts: the CSS variables at the top of `src/index.css` (the site uses a single dark theme)
- Content (partners, warehouses, testimonials, FAQ) lives as arrays at the top of each file in `src/components/`. The current values are placeholders.
- The quote, truck request and newsletter forms only show a confirmation. Connect it to your backend, CRM or email service at the `TODO`.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/warehousing` | Warehousing & Fulfillment |
| `/find-warehouse` | Find a Warehouse (storage picker + listings) |
| `/transportation` | Transportation |
| `/find-transport` | Find Transport (truck request form + load board) |
| `/fulfillment` | E-commerce Fulfillment |
| `/warehouse-management-system` | WMS |
| `/help` | Help Center |
| `/blog` | Blog and News |
| `/about` | About Us |
| `/hackers-program` | Hackers Program |
| `/careers` | Careers |
| `/dictionary` | Logistics Dictionary |
| `/terms-conditions`, `/privacy-policy` | Legal pages (`src/pages/Legal.jsx`) |
| `/contact` | Contact |

Content on these pages is intentionally blank. Each page keeps its data (listings, posts, FAQ answers, terms, legal text, dates, jobs) in arrays at the top of its file in `src/pages/`, and shows a "nothing added yet" placeholder until you fill them. Shared page sections live in `src/components/page/blocks.jsx`.

## Logo

Logo files live in `public/logo/` (shapes, not fonts, so they render the same everywhere):

| File | Use |
| --- | --- |
| `kadz-tech-logo.svg` | Horizontal logo for light backgrounds |
| `kadz-tech-logo-dark.svg` | Horizontal logo for dark backgrounds |
| `kadz-tech-logo-stacked.svg` | Mark above wordmark, for square spaces |
| `kadz-tech-mark.svg` | The amber K badge on its own |
| `kadz-tech-icon.svg` | Full-bleed square icon (favicon, app icon, avatars) |

In the site the logo is the `Logo` / `LogoMark` component in `src/components/Logo.jsx`, which uses the theme colors.

## Deployment

The site is hosted on Vercel at https://kadz-tech.vercel.app and deploys automatically from GitHub:

- Every push to `main` on [Mukshi03/kadz-tech-web](https://github.com/Mukshi03/kadz-tech-web) builds and publishes a new production version.
- Pushes to other branches and pull requests get their own preview URLs.
- `vercel.json` sends every path to `index.html`, so page URLs work when opened or refreshed directly.
