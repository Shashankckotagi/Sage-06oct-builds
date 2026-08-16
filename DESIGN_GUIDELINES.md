# SAGE Website — Design System & Engineering Guidelines

> **Project Target:** `next-saas-starter`
> **Framework:** Next.js, React, Styled-Components, CSS Variables, TinaCMS
> **Brand Owner:** Shastry Associates Global Enterprises, LLC (SAGE)
> **Purpose:** Architectural blueprint, styling guidelines, component conventions, and recommendations for future feature expansions (Tailwind CSS, Chakra UI, Shadcn UI patterns).

---

## 1. Architecture & Design Philosophy

The SAGE platform built on `next-saas-starter` is designed as a **high-trust, engineering-first enterprise portal**. It bridges academic rigor with corporate technical advisory.

### 1.1 Technical Stack Overview

| Layer | Technology | Usage |
|---|---|---|
| **Framework** | Next.js (TypeScript) | SSR/SSG page routing, API routes |
| **Styling** | `styled-components` + `css-in-js-media` | Component-level scoped styling & responsive breakpoints |
| **Theme Engine** | CSS Custom Properties (RGB channels) | Light/Dark theme toggling (`next-dark-theme`, `next-light-theme`) |
| **CMS Layer** | TinaCMS + Local Data (`sage-data.ts`) | Headless content management for courses, blog, and team bios |
| **Typography** | `Sansation` / `Manrope` / `Inter` | Clean, modern technical typography system |

---

## 2. Design Tokens & Styling Architecture

The template uses CSS variable channels (e.g. `var(--primary)`) represented in **raw RGB triplets** (e.g. `251,107,49`). This allows easy opacity manipulation using `rgba(var(--primary), 0.8)` in `styled-components`.

### 2.1 Brand Color Palette (Master Trio)

```css
/* Light Theme Token Mapping */
.next-light-theme {
  --background: 255,255,255;      /* #FFFFFF - SAGE Paper */
  --secondBackground: 248,251,255;/* #F8FBFF - Soft Sky Tint */
  --text: 15,23,42;               /* #0F172A - SAGE Slate Ink */
  --textSecondary: 255,255,255;   /* #FFFFFF - Contrast Text */
  --primary: 251,107,49;          /* #FB6B31 - Vibrant Orange (CTAs, Badges) */
  --brandBlue: 0,106,173;         /* #006AAD - Deep Blue (Authority, Headers, Footer) */
  --skyBlue: 53,169,239;          /* #35A9EF - Sky Blue (Icons, Highlights, Hover) */
  --secondary: 0,106,173;        /* #006AAD - Secondary Brand Anchor */
  --tertiary: 235,246,254;        /* #EBF6FE - Soft Tag Backgrounds */
  --cardBackground: 255,255,255;
  --lineColor: 226,232,240;       /* #E2E8F0 - Borders & Dividers */
  --mutedColor: 100,116,139;      /* #64748B - Muted Subtitles & Captions */
}
```

```css
/* Dark Theme Token Mapping */
.next-dark-theme {
  --background: 15,23,42;         /* #0F172A - SAGE Slate Ink */
  --secondBackground: 30,41,59;   /* #1E293B - Slate Dark Surface */
  --text: 248,250,252;
  --primary: 251,107,49;          /* Keeps high contrast Vibrant Orange */
  --brandBlue: 0,106,173;
  --skyBlue: 53,169,239;
  --tertiary: 30,58,95;
  --cardBackground: 30,41,59;
  --lineColor: 51,65,85;
  --mutedColor: 148,163,184;
}
```

### 2.2 Responsive Breakpoints

Breakpoints are defined in `components/GlobalStyles.tsx` and used via `css-in-js-media` helpers:

| Breakpoint | Pixel Width | Device Target |
|---|---|---|
| `smallPhone` | 320px | Small mobile screens |
| `phone` | 375px | Mobile standard |
| `tablet` | 768px | Tablets / Vertical iPads |
| `desktop` | 1024px | Small laptops / Desktop standard |
| `largeDesktop` | 1440px | High-res monitors |

**Media Query Usage Pattern in Styled-Components:**
```tsx
import media from 'css-in-js-media';

const Card = styled.div`
  padding: 1.5rem;
  ${media('>tablet')} {
    padding: 2.5rem;
  }
`;
```

---

## 3. Template Component Architecture

The template breaks down the layout into three reusable layers:

### 3.1 Primitives (`components/`)

- **`Container.tsx`**: Standard max-width wrapper (`max-width: 130rem; padding: 0 2rem`). Keeps all page content aligned.
- **`AutofitGrid.tsx`**: CSS Grid helper (`grid-template-columns: repeat(auto-fit, minmax(${minWidth}, 1fr))`). Used for responsive card layouts without writing media queries.
- **`Button.tsx`**: Multi-variant button supporting `primary` (Orange), `secondary` (Deep Blue), and outline styles with smooth transform hover states.
- **`OverTitle.tsx` & `SectionTitle.tsx`**: Eyebrow label typography (e.g. `01 / ABOUT SAGE`) paired with bold section headlines.
- **`BasicCard.tsx` / `ArticleCard.tsx`**: Structured content cards with hover elevation (`translateY(-4px)`), rounded borders (`1.6rem`), and subtle box shadows.

### 3.2 Layout & Shell

- **`Navbar.tsx`**: Fixed blur top bar with brand logo, nav links dropdown, color theme switcher, and direct contact CTA.
- **`Footer.tsx`**: High-trust corporate footer with Quick Links, Contact details, Newsletter subscription, and social media handles.
- **`NavigationDrawer.tsx`**: Mobile menu overlay triggered via hamburger menu icon.

### 3.3 Page Views (`views/HomePage/`)

- **`Hero.tsx`**: High-impact introduction featuring headline, value proposition, twin action buttons, and animated visual assets.
- **`MissionVision.tsx`**: Two-column layout showcasing SAGE's founding purpose and core values.
- **`ServicesPortal.tsx`**: Interactive tabbed portal to explore Courses, Consulting, and R&D Advisory.
- **`Testimonials.tsx`**: Review cards from corporate partners, university participants, and engineering managers.
- **`Cta.tsx`**: Full-width high-contrast conversion section at the bottom of pages.

---

## 4. Recommendations & Component Patterns from Tailwind & Chakra UI

To enhance SAGE with modern SaaS UI patterns, here are recommended component integrations drawn from **Tailwind CSS**, **Shadcn UI**, and **Chakra UI**:

### 4.1 Component Patterns to Adopt

#### 1. Mega Menu Navigation (Inspired by Tailwind UI / Stripe)
- **Use Case:** Expand the top navigation to display structured submenus for **Courses** (RF, Microwave, Wireless, Antenna) and **Advisory Services**.
- **Implementation:** Add a popover menu grid with icon badges, course difficulty tags, and a featured course highlight banner inside the navbar hover state.

#### 2. Filterable Course & Resource Grid (Inspired by Chakra UI / Radix)
- **Use Case:** Allow users to filter courses or blog posts by **Discipline** (e.g., *Antenna Theory*, *5G/6G*, *Microwave Circuits*, *Corporate Advisory*) and **Format** (*Live Workshops*, *Self-paced*, *On-site*).
- **Implementation:** Segmented filter buttons with dynamic active pill animations.

#### 3. Interactive Curriculum Accordion (Inspired by Shadcn UI Accordion)
- **Use Case:** Course detail pages displaying module breakdown, prerequisites, bench lab exercises, and downloadable syllabus PDFs.
- **Implementation:** Collapsible accordion with checkmark status icons and estimated module durations.

#### 4. Corporate Consultation Calculator / Estimator
- **Use Case:** Allow prospective enterprise clients to estimate advisory timeline and scope (e.g., number of engineers to train, on-site vs. remote, custom lab setup).
- **Implementation:** Range sliders and step-by-step wizard UI.

#### 5. Command Palette (`Cmd + K` Search)
- **Use Case:** Instant search across all SAGE course catalogs, technical articles, and faculty profiles.
- **Implementation:** Integration with `Kbar` or `cmdk` library.

---

## 5. Page Expansion Roadmap

To turn `next-saas-starter` into the complete SAGE Enterprise Portal, implement the following pages using the design system:

### 5.1 Course Catalog & Detail (`/courses` & `/courses/[slug]`)
- **Hero:** Course title, difficulty tag, duration, and instructor badge.
- **Main Body:** Two-column layout with left sticky enrollment card (price, date, CTA) and right detailed curriculum accordion.
- **Prerequisites & Target Audience:** Bullet points tailored to R&D engineers, graduate students, and lab managers.

### 5.2 Consulting & Corporate Advisory (`/advisory`)
- **Value Prop:** Custom R&D training, specialized lab setups, and technical audit services.
- **Client Logos & Case Studies:** Highlight enterprise impact across defense, telecom, and semiconductor clients.
- **Direct Lead Form:** Form with dropdowns for team size, technical domain, and desired start date.

### 5.3 Faculty & Expert Directory (`/team`)
- **Expert Cards:** Headshots, credentials (Ph.D., IEEE Senior Member), specialization pills, and published paper references.
- **Bio Modal:** Expandable drawer/modal with full research background and advisory focus.

### 5.4 Technical Publications & Blog (`/blog` & `/blog/[slug]`)
- **MDX Support:** Syntax-highlighted code blocks, mathematical LaTeX formulas, schematic diagrams, and downloadable dataset attachments.

---

## 6. Code Style & Quality Guidelines

1. **Strict Token Usage:** Always use CSS variables (`var(--primary)`, `var(--brandBlue)`) instead of hardcoded hex values in component styling.
2. **Type Safety:** Define shared props in `types.ts` or co-located interface files.
3. **Accessibility (a11y):**
   - Use semantic HTML tags (`<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`).
   - Ensure all interactive elements have descriptive `aria-label` or focus rings.
   - Maintain color contrast ratios above 4.5:1 for body copy.
4. **Performance:**
   - Optimize images using Next.js `<Image />` component with correct `width`, `height`, and `sizes` attributes.
   - Dynamic import heavy components or interactive widgets (`next/dynamic`).
