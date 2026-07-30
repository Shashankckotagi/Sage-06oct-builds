# Project Architecture & Repository Guide

This document provides a comprehensive overview of the **next-saas-starter** codebase to enable AI agents and developers to quickly understand the project structure, design patterns, data flows, and technical stack.

---

## 1. Executive Summary

- **Repository**: `Blazity/next-saas-starter`
- **Purpose**: A production-ready, performant Next.js marketing landing page and blog template designed for SaaS startups.
- **Key Features**:
  - Static site generation (SSG) with Next.js & MDX blog support.
  - Headless CMS integration via **TinaCMS** for live visual content editing.
  - Dark mode support using `nextjs-color-mode` without layout shift or flickering.
  - Form & backend integration: SendGrid for email contact forms, Mailchimp for newsletter subscriptions.
  - Comprehensive SEO: Meta tags, OpenGraph dynamic image support, JSON-LD structured data.
  - Design system powered by **Styled Components** with CSS variables.

---

## 2. Technology Stack

| Domain | Technology | Notes |
| :--- | :--- | :--- |
| **Framework** | [Next.js 12.1](https://nextjs.org/) | SSG static page generation & API routes |
| **UI Library** | [React 17](https://reactjs.org/) | Component-driven frontend architecture |
| **Language** | [TypeScript 5.1](https://www.typescriptlang.org/) | Strict type definitions (`types.ts`) |
| **Styling** | [Styled Components 5.3](https://styled-components.com/) | CSS-in-JS + Theme CSS Variables |
| **CMS** | [TinaCMS 1.5](https://tina.io/) | Local & Tina Cloud live visual editing (`.tina/`) |
| **Content Processing** | `gray-matter`, `next-mdx-remote`, `reading-time` | Parsing MDX blog posts with custom components |
| **State & Modals** | React Context (`contexts/`) | Global modal management |
| **Email & Newsletters** | `@sendgrid/mail`, `react-mailchimp-subscribe` | API endpoints & newsletter modals |
| **SEO & Metadata** | `react-schemaorg`, `schema-dts` | JSON-LD schema generation for articles |

---

## 3. Directory Structure Map

```
next-saas-starter/
├── .github/                 # GitHub workflows & issue templates
├── .tina/                   # TinaCMS schema definitions & code generation
│   ├── __generated__/       # Auto-generated GraphQL client/schema by Tina
│   └── schema.ts            # Schema rules for blog collection & custom block templates
├── components/              # Reusable UI component library (40+ components)
│   ├── Accordion.tsx        # Accordion container & items
│   ├── ArticleCard.tsx      # Blog article preview card
│   ├── BasicCard.tsx        # Styled generic card container
│   ├── BasicSection.tsx     # Standard section layout with image & text
│   ├── Button.tsx           # Button UI component with variants
│   ├── ColorSwitcher.tsx    # Light/Dark mode toggle button
│   ├── Footer.tsx           # Site footer with links & newsletter prompt
│   ├── GlobalStyles.tsx     # Theme CSS variable declarations & resets
│   ├── MDXRichText.tsx      # MDX component map for rendering post bodies
│   ├── Navbar.tsx           # Desktop header navigation
│   ├── NavigationDrawer.tsx # Mobile drawer navigation
│   ├── NewsletterModal.tsx  # Mailchimp email subscription popup
│   ├── WaveCta.tsx          # Bottom CTA section with wave graphic
│   └── ...                  # Additional icons, illustrations, and primitives
├── contexts/                # React Context Providers
│   └── newsletter-modal.context.tsx # Modal state (open/closed)
├── hooks/                   # Custom Utility React Hooks
│   ├── useEscKey.ts         # Event listener for Escape key
│   ├── useScrollPosition.ts # Scroll position tracking
│   └── ...                  # Re-exported hooks for resize observation & clipboard
├── pages/                   # Next.js File-system Router
│   ├── _app.tsx             # Global Application Wrapper (Providers, Layout, Tina)
│   ├── _document.tsx        # Custom Document (HTML structure & fonts)
│   ├── index.tsx            # Landing Page Route (renders view components)
│   ├── features.tsx         # SaaS Features showcase page
│   ├── pricing.tsx          # Pricing plans page
│   ├── contact.tsx          # Contact form page
│   ├── 404.tsx              # Custom 404 error page
│   ├── admin/
│   │   └── [[...tina]].tsx  # TinaCMS admin interface route (/admin)
│   ├── api/
│   │   └── sendEmail.ts     # SendGrid API endpoint for contact messages
│   └── blog/
│       ├── index.tsx        # Blog index listing page
│       └── [slug].tsx       # Dynamic MDX article renderer
├── posts/                   # Content Repository (.mdx files with frontmatter)
│   ├── test-article.mdx
│   └── ...                  # Sample blog content
├── public/                  # Static Public Assets (images, SVGs, favicon)
├── utils/                   # Pure Helper Functions
│   ├── postsFetcher.ts      # Reading MDX post files & parsing frontmatter
│   ├── formatDate.ts        # Date formatting with date-fns
│   ├── readTime.ts          # Reading duration calculator
│   └── media.ts             # CSS media query helper
├── views/                   # Composite Page View Sections
│   ├── HomePage/            # Hero, Partners, Features, Testimonials, Cta, Blog section
│   ├── ContactPage/         # FormSection, InformationSection
│   ├── PricingPage/         # PricingTablesSection, FaqSection
│   └── SingleArticlePage/   # Header, ShareWidget, Head Metadata (OG, JSON-LD)
├── env.ts                   # Site URL & external constants definition
├── types.ts                 # Core TypeScript interface definitions
├── package.json             # NPM dependencies & CLI script definitions
└── tsconfig.json            # TypeScript compiler configuration
```

---

## 4. Key Systems & Architectural Patterns

### 4.1 Theme System & Styling
- Theme variables (`--background`, `--secondBackground`, `--text`, `--primary`, etc.) are defined in [GlobalStyles.tsx](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/components/GlobalStyles.tsx).
- `ColorModeScript` from `nextjs-color-mode` injects inline script to prevent dark mode flickering during initial page render.
- Components use `styled-components` consuming variables via `rgb(var(--variable))` for dynamic theme adaptation.

### 4.2 Content & Blog Pipeline
1. **MDX Files**: Stored in `posts/*.mdx` with frontmatter meta fields (`title`, `description`, `date`, `tags`, `imageUrl`).
2. **Data Fetcher**: [postsFetcher.ts](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/utils/postsFetcher.ts) parses MDX files server-side using `gray-matter`.
3. **Rendering**: Dynamic route `pages/blog/[slug].tsx` compiles MDX content via `next-mdx-remote/serialize` and renders with custom components (`MDXRichText.tsx`).
4. **TinaCMS Integration**: `.tina/schema.ts` specifies fields for `posts`. Opening `/admin` loads Tina CMS editing interface. In production, edits trigger GitHub commits via Tina Cloud.

### 4.3 Layout & Component Hierarchy
In `pages/_app.tsx`:
```
<NewsletterModalContextProvider>
  <NavigationDrawer>
    <Modals /> (NewsletterModal)
    <Navbar />
    <TinaEditProvider>
      <Component {...pageProps} />
    </TinaEditProvider>
    <WaveCta />
    <Footer />
  </NavigationDrawer>
</NewsletterModalContextProvider>
```

### 4.4 Form & API Handlers
- **Contact Form**: [ContactPage/FormSection.tsx](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/views/ContactPage/FormSection.tsx) posts user input to `/api/sendEmail`.
- **API Route**: [pages/api/sendEmail.ts](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/pages/api/sendEmail.ts) sends an email via `@sendgrid/mail` using environment variable `SENDGRID_API_KEY`.
- **Newsletter**: `NewsletterModal.tsx` submits subscriber email directly to Mailchimp endpoint configured in `EnvVars.MAILCHIMP_SUBSCRIBE_URL`.

---

## 5. Configuration & Environment Variables

| Variable | Scope | Description |
| :--- | :--- | :--- |
| `EnvVars.SITE_NAME` | `env.ts` | Configured website brand name |
| `EnvVars.URL` | `env.ts` | Public production deployment URL |
| `EnvVars.MAILCHIMP_SUBSCRIBE_URL` | `env.ts` | Mailchimp form action target URL |
| `SENDGRID_API_KEY` | Environment (`.env.local`) | Secret key required for SendGrid contact form API |
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Environment (`.env.local`) | Client ID for Tina Cloud production CMS |
| `NEXT_PUBLIC_ORGANIZATION_NAME` | Environment (`.env.local`) | Tina Cloud organization name |
| `NEXT_PUBLIC_EDIT_BRANCH` | Environment (`.env.local`) | Target git branch for Tina CMS updates |

---

## 6. Development & Build Workflows

- **Start Development Server (with TinaCMS)**:
  ```bash
  yarn dev
  ```
- **Build Production Web Application**:
  ```bash
  yarn build
  ```
- **Start Production Server**:
  ```bash
  yarn start
  ```
- **Lint Codebase**:
  ```bash
  yarn lint
  ```
