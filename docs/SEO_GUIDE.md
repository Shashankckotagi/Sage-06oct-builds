# SAGE — SEO & Structured Data Specification Guide

> **Organization:** Shastry Associates Global Enterprises, LLC (SAGE)  
> **Canonical Domain:** `https://shastryassociates.com`  
> **Brand Standard:** Institutional IEEE / University Laboratory Rigor  
> **Target Audience:** Frontend Engineers, Content Editors, and Technical Writers  

---

## 1. SEO System Architecture

The SAGE platform implements a centralized, zero-bloat metadata and structured data pipeline:

```
                              ┌───────────────────────────┐
                              │     <Page /> Wrapper      │
                              └─────────────┬─────────────┘
                                            │
                                            ▼
                              ┌───────────────────────────┐
                              │    <SEOHead /> Component  │
                              └─────────────┬─────────────┘
                                            │
              ┌─────────────────────────────┼─────────────────────────────┐
              ▼                             ▼                             ▼
 ┌────────────────────────┐    ┌────────────────────────┐    ┌────────────────────────┐
 │  HTML Meta & Canonical │    │   OpenGraph & Twitter  │    │   JSON-LD Structured   │
 │ (Title, Desc, Robots)  │    │ (1200x630 Social Card) │    │  (Org, Person, Crumbs) │
 └────────────────────────┘    └────────────────────────┘    └────────────────────────┘
```

---

## 2. Core Components & Usage

### 2.1 `<SEOHead />` (`components/SEOHead.tsx`)
A unified `<Head>` component that guarantees canonical correctness and prevents duplicate meta tags.

```tsx
import SEOHead from 'components/SEOHead';
import { getOrganizationSchema, getWebSiteSchema } from 'utils/seo';

<SEOHead
  title="RF & Microwave Systems"
  description="Specialized high-frequency training courses and consulting from SAGE."
  canonicalPath="/courses"
  ogType="website" // 'website' | 'article' | 'profile'
  ogImage="/custom-card.png" // Defaults to /sage-og-card.png
  jsonLd={[getOrganizationSchema(), getWebSiteSchema()]}
  noIndex={false} // Set to true for 404 or private routes
/>
```

### 2.2 `<Page />` Component Integration (`components/Page.tsx`)
All standard pages wrapped in `<Page />` automatically forward SEO props directly into `<SEOHead />`:

```tsx
import Page from 'components/Page';
import { getBreadcrumbSchema } from 'utils/seo';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
];

export default function ServicesPage() {
  return (
    <Page
      title="Engineering Services & Corporate Advisory"
      description="Tailored training programs, executive workshops, and technical consulting."
      canonicalPath="/services"
      jsonLd={getBreadcrumbSchema(breadcrumbs)}
    >
      {/* Section Views */}
    </Page>
  );
}
```

---

## 3. Schema.org (JSON-LD) Structured Data Specifications

Structured data generators are centralized in [`utils/seo.ts`](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/utils/seo.ts):

### 3.1 `EducationalOrganization` Schema
* **Target:** Homepage (`/`)
* **Key Fields:**
  * `@type`: `EducationalOrganization`
  * `name`: `Shastry Associates Global Enterprises (SAGE)`
  * `url`: `https://shastryassociates.com`
  * `logo`: `https://shastryassociates.com/Shastryhexagon(Orange).png`
  * `contactPoint`: Direct advisory inbox `info@shastryassociates.com`
  * `sameAs`: Official LinkedIn and research profile links

### 3.2 `Person` Schema (Faculty & Specialist Profiles)
* **Target:** All 36 Dynamic Member Pages (`/team/[slug]`)
* **Key Fields:**
  * `name`: Full faculty name (e.g., `Dr. Prasad Shastry`)
  * `jobTitle`: Role (e.g., `Founding Director & Chief Technical Advisor`)
  * `affiliation`: Institutional/Corporate affiliation (e.g., `Bradley University`)
  * `alumniOf`: Degrees and credentials (e.g., `Ph.D. Electromagnetics`)
  * `honorificPrefix`: IEEE Status (e.g., `IEEE Life Fellow`)
  * `knowsAbout`: Array of specializations (e.g., `['RF Circuits', 'Antennas', 'Microwave']`)
  * `sameAs`: Verified external links (LinkedIn, Google Scholar, ORCID, Personal Lab URL)

### 3.3 `BreadcrumbList` Schema
* **Target:** All Inner Pages (`/about`, `/team`, `/team/[slug]`, `/contact`, `/mission`, `/blog`)
* **Key Fields:** Positional list of breadcrumb items ensuring hierarchical Google SERP sitelink navigation.

---

## 4. Crawling, Indexing & Sitemaps

### 4.1 Robots Directive (`public/robots.txt`)
```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Host: https://shastryassociates.com
Sitemap: https://shastryassociates.com/sitemap.xml
```

### 4.2 Dynamic Live XML Sitemap (`pages/sitemap.xml.ts`)
* Automatically served at `https://shastryassociates.com/sitemap.xml`.
* Contains all static pages and all 36 dynamic faculty member profile paths.
* Configures search engine change frequencies and priority ratings (`1.0` for Home, `0.9` for directories, `0.7` for faculty profiles).

---

## 5. Developer Checklist: Adding a New Page

When building any upcoming page:

1. **Wrap with `<Page />`**:
   ```tsx
   import Page from 'components/Page';
   import { getBreadcrumbSchema } from 'utils/seo';
   ```
2. **Provide Meta Props**:
   - `title`: 40–60 characters (site suffix is added automatically).
   - `description`: 140–160 characters, keyword-rich and concise.
   - `canonicalPath`: Exact path (e.g., `/events` or `/tutorials`).
   - `jsonLd`: Breadcrumb schema array.
3. **Register in Sitemap**:
   Add the new route to `staticRoutes` in [`pages/sitemap.xml.ts`](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/pages/sitemap.xml.ts).
4. **Verify Build**:
   ```bash
   yarn tsc --noEmit
   yarn build
   ```
