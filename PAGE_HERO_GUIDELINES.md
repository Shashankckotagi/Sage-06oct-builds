# PageHero Implementation Guidelines

## Overview
Create a single reusable **`components/PageHero.tsx`** component for all public pages **except Home**. The hero is a compact, responsive band (≈320 px height on desktop, stacked on mobile) with a blurred full‑bleed image on the right and breadcrumb‑eyebrow‑title‑description text on the left.

## Component Specs
- **Height**: 320 px (desktop), scales down on tablets, stacks on ≤ 768 px.
- **Layout**:
  - Left column: Breadcrumbs (`Home › About`), Eyebrow, `<h1>`, one‑line description, optional extra line.
  - Right column: Image/illustration, blurred (`filter: blur(10px)`) with overlay `rgba(var(--secondBackground), 0.78)` (dark mode 0.72, light mode 0.85).
- **Props (`PageHeroData`):**
  ```ts
  interface Crumb { label: string; href: string; }
  interface PageHeroData {
    breadcrumbs?: Crumb[];
    eyebrow: string;
    title: string;
    description: string;
    extra?: React.ReactNode;
    imageSrc: string; // local `/hero/...` or external URL
  }
  ```
- **Breadcrumbs**: Simple list separated by `›` using `components/Breadcrumbs.tsx`.
- **Styling**: Pure `styled-components`, using existing CSS tokens (`--secondBackground`, `--text`, etc.). No Chakra or Tailwind.

## Data Layer (`sage-data.ts`)
Add a `pageHeroes` export mapping routes to `PageHeroData`:
```ts
export const pageHeroes: Record<string, PageHeroData> = {
  '/about': {
    breadcrumbs: [{ label: 'Home', href: '/' }],
    eyebrow: 'ABOUT SAGE',
    title: 'Applied electromagnetics, taught with engineering rigor.',
    description: 'Founded by RF and microwave veterans to bridge graduate theory with the industry bench.',
    extra: <StatsInline />, // placeholder for stats line
    imageSrc: '/hero/about.jpg',
  },
  '/mission': { /* ... */ },
  '/team': { /* ... */ },
  // add entries for /services, /courses, /news, /events, /gallery, /contact, /404
};
```
Both local images (`public/hero/...`) and external URLs are accepted.

## Page Integration
Replace existing hero sections with:
```tsx
import { pageHeroes } from 'sage-data';
import PageHero from 'components/PageHero';

export default function AboutPage() {
  return (
    <PageHero {...pageHeroes['/about']} />
    {/* existing page body stays unchanged */}
  );
}
```
Create thin wrappers for new routes (`mission.tsx`, `news.tsx`, `events.tsx`, `gallery.tsx`) that render only the `PageHero` plus a placeholder body.

## Navigation Updates (`Navbar.tsx` & `NavigationDrawer.tsx`)
- **About Us** → `/about`, `/mission`, `/team`
- **Services** → `/services#workshops`, `#training`, `#consulting`
- **Courses** → `/courses`, `#tutorials`
- **News** → `/news`, `/events`, `/gallery`
- **Contact Us** button unchanged
- Remove hidden links to `/features` and `/pricing`.

## Routing & Redirects (`next.config.js`)
Add permanent redirects for legacy blog URLs:
```js
module.exports = {
  async redirects() {
    return [
      { source: '/blog', destination: '/news', permanent: true },
      { source: '/blog/:slug*', destination: '/news/:slug*', permanent: true },
    ];
  },
};
```

## SEO (Title & Meta)
In each page’s `<Head>`:
```tsx
<title>{pageHeroes[router.pathname].title} | SAGE</title>
<meta name="description" content={pageHeroes[router.pathname].description} />
```
Ensures consistent `{Title} | SAGE` format.

## Footer Adjustments
- Update the footer’s **News** link to `/news` (instead of `/blog`).
- Bottom CTA remains only on **Home**, **Services**, and **Courses**.

## Verification Checklist
1. Run `npm run dev` and view every public page – hero visible, correct image, blurred overlay, and text.
2. Resize browser – hero stacks on mobile.
3. Breadcrumb links work and display `›` separator.
4. Check page source for proper `<title>` and `<meta description>`.
5. Verify `/blog` redirects to `/news` (301) and `/blog/:slug` to `/news/:slug`.
6. Navbar and NavigationDrawer show the updated hierarchy.
7. Footer News link points to `/news`.
8. Bottom CTA appears only on Home, Services, Courses.

---
*This file serves as a concise, reusable guideline for adding or updating inner‑page heroes across the SAGE site.*
