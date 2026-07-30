# SAGE — Brand Guidelines & Content Master Document

> **Version:** 1.0 (Draft for stakeholder review)
> **Date:** July 2026
> **Owner:** Shastry Associates Global Enterprises, LLC (SAGE)
> **Scope:** Brand identity, voice, verified content, and all data needed to build the new website on `next-saas-starter`.

---

## Part 1 — Brand Foundation

### 1.1 Brand Essence

| Attribute | Definition |
|---|---|
| **Mission** | To disseminate knowledge and information in the area of applied electromagnetics and wireless systems. |
| **Vision** | To be the leader in disseminating knowledge and information in radio frequency wireless systems engineering and technologies globally. |
| **Promise** | Deep, practical engineering knowledge from experienced professionals — communicated clearly. |
| **Positioning** | SAGE is not a generic e-learning platform. It is a specialist knowledge network of RF/microwave/wireless engineers who teach, consult, and train. |

### 1.2 Brand Personality

| Trait | Expression |
|---|---|
| **Precise** | Technical accuracy over marketing fluff. Every claim backed by experience. |
| **Accessible** | Complex topics explained clearly. No unnecessary jargon walls. |
| **Professional** | Serious engineering audience. Clean, structured, credible. |
| **Global** | International associates across India, US, South Korea, and beyond. |
| **Practical** | Theory → application. Design guidelines, not just formulas. |

**Anti-personality (what SAGE is NOT):**
- Flashy or hype-driven
- Corporate jargon-heavy
- Amateur or unpolished
- Overly casual or "bro-tech"

### 1.3 Voice & Tone

| Context | Tone | Example |
|---|---|---|
| Homepage hero | Confident, clear | "Master the art of RF & wireless engineering." |
| Course descriptions | Informative, structured | "Master architectural design of high-performance RF systems, including noise figure, linearity, and link budget calculations." |
| About / Mission | Purposeful, warm | "A group of diverse professionals committed to disseminating knowledge with excellence." |
| Consulting CTA | Direct, professional | "Discuss your engineering challenge with an expert." |
| Error pages / UI | Helpful, brief | "Page not found. Return to homepage." |

**Writing rules:**
- Use active voice. "We teach" not "Courses are offered."
- Avoid superlatives without evidence ("world-class," "best-in-class").
- Prefer concrete terms: "25+ years of experience" over "decades of excellence."
- Use Oxford commas.
- Spell out acronyms on first use: "radio frequency (RF)."

---

## Part 2 — Visual Identity

### 2.1 Logo

**Current state:** No confirmed logo file from the old site. The wordmark "SAGE" or "Shastry Associates Global Enterprises" in a clean sans-serif is the interim standard.

**Interim wordmark spec:**
- Text: `SAGE` (primary) or `Shastry Associates Global Enterprises` (full name)
- Typeface: Manrope Bold or DM Sans Bold
- Case: All-caps for SAGE; sentence case for full name
- Colour: `--sage-ink` on light backgrounds, `#FFFFFF` on dark

**To-do:** Commission or design a proper logo. The wordmark works for launch; a logomark (signal wave, antenna arc, or "S" monogram) can follow.

### 2.2 Colour Palette

#### Master Trio Palette

| Token | Hex | RGB | Usage |
|---|---|---|---|
| **Deep Blue** | `#006AAD` | 0, 106, 173 | Footer background, header branding, primary text accents, section dividers, corporate authority |
| **Sky Blue** | `#35A9EF` | 53, 169, 239 | Active states, hover rings, icon badges, secondary buttons, subheadings, tag fills |
| **Vibrant Orange** | `#FB6B31` | 251, 107, 49 | Primary CTA buttons, high-visibility highlights, badge callouts, conversion focus points |

#### Supporting Neutrals

| Token | Hex | Usage |
|---|---|---|
| `SAGE Slate Ink` | `#0F172A` | Primary body text, main headings |
| `SAGE Paper` | `#FFFFFF` | Primary background |
| `SAGE Light Tint` | `#F8FBFF` | Alternating section backgrounds (subtle sky tint) |
| `SAGE Border Line` | `#E2E8F0` | Card borders, dividers, outlines |
| `SAGE Muted` | `#64748B` | Secondary text, captions |
| `SAGE Soft Sky` | `#EBF6FE` | Tag pill fills, active card backgrounds |

#### Usage Rules

- **Balanced Trio Harmony:** Combine Deep Blue `#006AAD` for layout structure and dark footer sections, Sky Blue `#35A9EF` for secondary interactive accents, and Vibrant Orange `#FB6B31` for primary conversion CTAs.
- Dark sections (footer, CTA banners) use Deep Blue `#006AAD` with white text and Vibrant Orange `#FB6B31` CTA buttons.
- Card borders use `SAGE Border Line` (`#E2E8F0`) with Sky Blue (`#35A9EF`) hover highlights.

### 2.3 Typography

#### Typefaces

| Role | Font | Weight | Fallback |
|---|---|---|---|
| **Display / Headings** | Manrope | 600–800 | `ui-sans-serif, system-ui, sans-serif` |
| **Body / UI** | Inter | 400–500 | `ui-sans-serif, system-ui, sans-serif` |
| **Code / Technical** | JetBrains Mono | 400 | `ui-monospace, monospace` |

Both Manrope and Inter are available via `next/font/google` — self-hosted, GDPR-compliant, zero layout shift.

#### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| H1 (Hero) | `clamp(2.75rem, 5vw, 4.5rem)` | 700 | 1.05 | −0.03em |
| H2 (Section) | `clamp(2rem, 3.5vw, 3rem)` | 700 | 1.15 | −0.02em |
| H3 (Card/Sub) | `clamp(1.25rem, 2vw, 1.75rem)` | 600 | 1.3 | −0.01em |
| H4 | `1.125rem` | 600 | 1.4 | 0 |
| Body Large | `1.125rem` | 400 | 1.65 | 0 |
| Body | `1rem` | 400 | 1.6 | 0 |
| Body Small | `0.875rem` | 400 | 1.55 | 0 |
| Label / Eyebrow | `0.75rem` | 600 | 1.4 | 0.1em, uppercase |
| Caption | `0.75rem` | 400 | 1.4 | 0 |

#### Typography rules

- Maximum line length: 65 characters for body text.
- Use sentence case for headings (not ALL CAPS except eyebrows/labels).
- Never justify text. Always left-align or centre-align for hero headings only.
- Paragraph spacing: `1.5em` between blocks.

### 2.4 Iconography

- **Library:** Lucide React (already in `next-saas-starter` or easily added).
- **Style:** Outlined, consistent stroke width (1.5–2px).
- **Size:** 20px default, 24px for feature icons, 16px for inline.
- **Colour:** Inherit from parent text colour. Orange for interactive/active states.

### 2.5 Photography & Imagery

| Type | Direction | Usage |
|---|---|---|
| **Lab / Engineering** | Real photos of RF test equipment, oscilloscopes, circuit boards, engineers at benches | Hero, course cards, about section |
| **Antenna / Infrastructure** | Antenna arrays, telecom towers, satellite dishes | Wireless systems content |
| **People** | Professional, diverse, working context (not posed stock) | Team, testimonials, about |
| **Abstract** | SVG signal waves, circuit traces, field lines (orange on white or white on ink) | Section dividers, decorative |

**Sourcing:**
- Temporary: Unsplash / Pexels (free, attribution not required but good practice).
- Long-term: Commission photos from SAGE workshops, labs, and events. Real content builds more trust than stock.

**Treatment:**
- Slight desaturation (reduce by 10–15%) for consistency.
- Warm white balance preferred over cool blue tones.
- No heavy filters, no duotone overlays at launch.

### 2.6 Layout & Spacing

- **Grid:** 12-column, max-width 1200px container.
- **Section padding:** `96px` desktop, `64px` tablet, `48px` mobile.
- **Component spacing:** 8px base unit (8, 16, 24, 32, 48, 64, 96).
- **Border radius:** `8px` cards, `9999px` pills/buttons, `16px` images.
- **Shadows:** Minimal. `0 1px 3px rgba(0,0,0,0.06)` for cards. `0 4px 12px rgba(0,0,0,0.08)` for elevated elements.

### 2.7 UI Components

| Component | Spec |
|---|---|
| **Primary Button** | Orange bg, white text, pill shape, 16px font, 48px height, hover: darker orange (`#D15A1A`) |
| **Secondary Button** | White bg, ink border 1px, ink text, hover: warm bg |
| **Ghost Button** | No bg, ink text, orange underline on hover |
| **Card** | White bg, 1px `SAGE Line` border, 8px radius, 24px padding, subtle shadow on hover |
| **Input** | White bg, 1px line border, 8px radius, 48px height, focus: orange border |
| **Tag / Pill** | Soft orange bg, ink text, 9999px radius, 12px font |
| **Navigation** | Sticky top, white bg, 1px bottom border, ink links, orange active/hover |

---

## Part 3 — Content Master Data

### 3.1 Site Identity

```ts
export const siteConfig = {
  name: "SAGE",
  fullName: "Shastry Associates Global Enterprises",
  legalName: "Shastry Associates Global Enterprises, LLC",
  tagline: "Professional RF, Microwave & Wireless Engineering Education",
  description: "SAGE provides expert-led training, consulting, workshops, and courses in radio frequency, microwave, applied electromagnetics, antennas, and wireless communication systems.",
  url: "https://shastryassociates.com",
  email: "info@shastryassociates.com",
  established: null, // TODO: confirm year
  location: "India", // TODO: confirm HQ city
  social: {
    linkedin: null, // TODO: confirm LinkedIn URL
    twitter: null,
    youtube: null,
  },
};
```

### 3.2 Navigation Structure

```
Home          → /
Courses       → /courses (list) → /courses/[slug] (detail)
Services      → /services
About         → /about
Team          → /team (or /about#team)
News          → /news
Contact       → /contact
```

### 3.3 Mission, Vision, Goals

**Mission:**
> To disseminate knowledge and information in the area of applied electromagnetics and wireless systems.

**Vision:**
> To be the leader in disseminating knowledge and information in radio frequency wireless systems engineering and technologies globally.

**Goals:**
1. Make available practical engineering and technology information on RF, millimeter-wave, and microwave circuits, components, sub-systems, and systems.
2. Provide and deliver tutorials, courses, workshops, and training for recent college graduates (Bachelor and Master levels) and engineers in industry at appropriate levels — on-site, off-site, online, and via our website.
3. Provide engineering consulting services.

### 3.4 About SAGE

> SAGE (Shastry Associates Global Enterprises) is an international group of highly qualified and accomplished engineers and entrepreneurs with a long track record of engineering and technology experience in industry and academia.
>
> Their knowledge is well rooted both in the fundamentals of electronics and communication engineering in general, and in applied electromagnetics, RF circuits and antennas, and wireless communication systems in particular.
>
> SAGE associates are also excellent communicators. They disseminate knowledge through courses, tutorials, and workshops to provide a deep understanding of the subject matter and insights therein, as well as guidelines for design and applications of the theory.

### 3.5 Core Competencies

| # | Area | Description |
|---|---|---|
| 1 | Electronics & Communication Engineering | Deep expertise in the fundamentals of electronics and communication systems, providing comprehensive solutions. |
| 2 | Applied Electromagnetics | Specialized knowledge in electromagnetic theory and its practical applications in modern systems. |
| 3 | RF Circuits & Antennas | Advanced proficiency in radio frequency circuit design and antenna systems for various applications. |
| 4 | Wireless Communication Systems | Comprehensive understanding of wireless technologies and communication system architectures. |

### 3.6 Services

| Service | Description | Delivery |
|---|---|---|
| **Training Programs** | Comprehensive training courses designed to build strong foundations and advanced skills in electronics and communication engineering. | On-site, off-site, online |
| **Consulting Services** | Expert consulting to help solve complex engineering challenges and optimize technology solutions. | Custom engagement |
| **Customized Courses** | Tailored educational programs designed specifically for your organization's unique requirements and objectives. | On-site, off-site, online |
| **Workshops & Tutorials** | Interactive workshops and hands-on tutorials providing practical insights and real-world applications. | On-site, off-site, online |

### 3.7 Course Catalogue (Draft — verify before launch)

| Category | Title | Description | Price |
|---|---|---|---|
| RF Engineering | Advanced RF System Design & Analysis | Noise figure, linearity (IP3), compression, and link budget calculations. | $199 |
| Microwave | Microwave Passive Circuits & Networks | Multi-port junctions, power dividers (Wilkinson), couplers (Branch-line, Lange), cavity resonators. | $149 |
| Wireless | 5G Wireless Communication Systems | 5G NR architecture, sub-6GHz and mmWave deployments, network slicing topology. | $249 |
| Antennas | Antenna Theory and Design | Radiation pattern, gain, efficiency, impedance, polarization, array parameters. | $179 |
| Signal Processing | Digital Signal Processing for RF Systems | DUC, DDC, NCOs — bridging software and hardware. | $129 |
| Circuit Design | High-Speed PCB Design & Signal Integrity | High-speed trace routing, impedance continuity, decoupling networks, crosstalk shielding. | $159 |

**⚠️ Status:** These are from the Netlify draft. Instructor names were placeholders. Prices, descriptions, and availability need SAGE confirmation.

### 3.8 Team Data

#### Associates (15)

| Name | Role/Title | Location |
|---|---|---|
| Mr. Bala Sundaram | Associate | — |
| Mr. Krishna Katragadda | Associate | — |
| Mr. Shrinivasa Ponnala | Associate | — |
| Mr. Sasidhar Vajha | Associate | — |
| Dr. I. Rosaline | Associate | — |
| Dr. G. Boopalan | Associate | — |
| Mr. Neelakantan | Associate | — |
| Prof. C. Murali | Associate | — |
| Dr. Parimala Prabhakar | Associate | — |
| Dr. Sanjay Moghe | Associate | — |
| Mr. James O'Donnell | Associate | US |
| Mr. Nicholas Manos | Associate | US |
| Prof. S. L. Nisha | Associate | — |
| Dr. YoungSoo Kim | Associate | South Korea |
| Dr. P. Shanthi | Associate | — |

#### Youth Wing (6)

Safiya Khalid, Neha Kantikar, Preeti K, Visvajit, MSV, Shreya

#### Support

| Name | Role |
|---|---|
| Mr. Kiran Bettadapura | Legal Advisor |
| Dr. Tejas Shastry | IT / Website Consultant |
| Mr. Pumichat Raksaphaeng | IT / Website Consultant |
| Ms. Srishti Bijjur | IT / Website Consultant |
| Team MSV | Website Developers |

**To-do for each member:** photo, bio (2–3 sentences), specialisation, affiliation, LinkedIn URL.

### 3.9 Values

| Value | Description |
|---|---|
| Excellence in Education | Committed to delivering the highest quality educational experiences and knowledge transfer. |
| Innovation & Insight | Providing cutting-edge insights and innovative approaches to engineering challenges. |
| Collaboration & Partnership | Building strong relationships with clients, academia, and industry partners. |
| Results-Oriented | Focused on delivering practical, actionable results that drive real-world success. |

### 3.10 Testimonials (Draft — need approval)

| Quote | Name | Title | Status |
|---|---|---|---|
| "SAGE provided me with the practical skills I needed to excel in my career. The instructors are true industry experts." | John Anderson | Senior RF Engineer | ⚠️ Placeholder |
| "The 5G course was comprehensive and up-to-date with the latest industry standards. Highly recommended!" | Priya Sharma | Wireless Systems Architect | ⚠️ Placeholder |
| "As a student, the foundational courses in Microwave engineering were exactly what I needed to bridge the gap between theory and practice." | Marcus Thorne | Graduate Student | ⚠️ Placeholder |

### 3.11 Contact Information

| Field | Value | Status |
|---|---|---|
| Email | info@shastryassociates.com | ✅ Confirmed |
| Phone | — | ❌ Need |
| Address | — | ❌ Need |
| LinkedIn | — | ❌ Need |

### 3.12 Page-by-Page Content Map

| Page | Sections | Content Source |
|---|---|---|
| **Home** | Hero (tagline + CTA), competencies overview, featured courses, why SAGE, testimonials, CTA | This document |
| **Courses** | Course grid with filters, individual course cards | §3.7 |
| **Course Detail** | Title, description, syllabus, instructor, price, duration, CTA | §3.7 + TBD |
| **Services** | 4 service cards with descriptions | §3.6 |
| **About** | Mission, vision, goals, about text, values, team grid | §3.3–3.5, 3.8, 3.9 |
| **Team** | Full team listing with photos and bios | §3.8 |
| **News** | Blog / news listing | WordPress export |
| **Contact** | Contact form, email, address, map (if applicable) | §3.11 |

---

## Part 4 — WordPress Content Export Guide

### 4.1 Export All Text Content

1. Log into WordPress admin: `shastryassociates.com/wp-admin`
2. Go to **Tools → Export**
3. Select **All content** (or "Pages" only if you just want pages)
4. Click **Download Export File**
5. You get a `.xml` file (WXR format) containing all pages, posts, comments, categories, tags, and custom fields. [web:68][web:70]

**Important:** The XML contains text and *links* to images, but NOT the actual image files. [web:68]

### 4.2 Export Images / Media

The XML export references image URLs but doesn't bundle files. To get actual images:

**Option A — FTP/File Manager (best):**
- Connect via FTP or hosting file manager (cPanel)
- Download the entire `/wp-content/uploads/` folder
- This has all uploaded images organised by year/month. [web:77]

**Option B — Plugin:**
- Use "Export Media Library" plugin to download all media as a ZIP.

**Option C — WP-CLI (if SSH access):**
```bash
wp export --dir=exports/ --all
```
This exports content + can be combined with media sync. [web:78]

### 4.3 Convert XML to Usable Data

Once you have the XML export, you need to convert it into structured data for Next.js:

**Quick approach:**
1. Open the XML in VS Code or a browser
2. Search for `<item>` blocks — each is a page or post
3. Look for `<title>`, `<content:encoded>`, `<excerpt:encoded>`, `<wp:post_name>` (slug)
4. Copy text into your data files manually (site is small, ~10 pages)

**Programmatic approach:**
```bash
# Use a tool to convert WordPress XML to JSON/Markdown
npx wordpress-export-to-markdown --input export.xml --output content/
```

Or use one of these tools:
- `wordpress-xml-to-json` (npm package)
- `wp2md` (converts to Markdown files)
- Parse manually with Python/JavaScript if the site is small

### 4.4 What the XML Will Contain

| Included | NOT Included |
|---|---|
| Page/post titles | Theme design |
| Page/post body text (HTML) | Plugin data |
| Featured image URLs | Actual image files |
| Categories & tags | Custom CSS/JS |
| Comments | User accounts |
| Custom fields | Site settings |
| Menu structure | Uploaded files (only references) |

### 4.5 Security Warning

**⚠️ The old site appears to be compromised with gambling/casino spam injection.** When reviewing exported content:
- Check every page for injected links (casino, betting, pharma keywords)
- Clean any `<a>` tags pointing to gambling domains before importing into the new site
- The legitimate SAGE content is mixed with spam — careful manual review is needed

---

## Part 5 — Implementation Checklist for next-saas-starter

### Immediate actions

- [ ] Export WordPress XML (Tools → Export → All Content)
- [ ] Download `/wp-content/uploads/` via FTP
- [ ] Clean spam/casino links from exported content
- [ ] Confirm brand colours: `#E46720` + `#1A1A1A` + white
- [ ] Confirm typography: Manrope + Inter via `next/font/google`
- [ ] Create `/src/data/sage.ts` with all data from §3
- [ ] Set up `siteConfig` with name, description, URL, email
- [ ] Get team photos and bios from SAGE stakeholders
- [ ] Confirm course list, prices, and instructor assignments
- [ ] Get real testimonials or remove section until approved
- [ ] Confirm contact info: phone, address, social links
- [ ] Design or commission logo (interim: text wordmark)

### Content to collect from SAGE

| Item | Who provides | Priority |
|---|---|---|
| Founder/principal name and photo | SAGE leadership | High |
| Team member photos + bios | Each associate | High |
| Real course syllabus details | Course leads | High |
| Verified testimonials (3–5) | Past students/clients | Medium |
| Company registration year | Admin | Medium |
| Office address / phone | Admin | Medium |
| LinkedIn / social URLs | Admin | Low |
| Workshop/lab photos | Events team | Low |

---

## Part 6 — File Outputs Needed

For the developer implementing on `next-saas-starter`, provide:

```
output/
├── SAGE_BRAND_GUIDELINES.md       ← this document
├── sage-data.ts                   ← ready-to-use TypeScript data file
├── sage-content-export.xml        ← WordPress export (when available)
└── assets/
    ├── logo/                       ← logo files (when designed)
    ├── team/                       ← team member photos
    └── images/                     ← stock/licensed images
```

The `sage-data.ts` file should export: `siteConfig`, `navigation`, `competencies`, `services`, `courses`, `team`, `values`, `testimonials`, `mission`, `vision`, `goals`, `about`, and `contact` — all as typed constants ready for import into Next.js components.
