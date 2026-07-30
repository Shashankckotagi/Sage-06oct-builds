# SAGE — Shastry Associates Global Enterprises
## Project Understanding & Comprehensive Master README

> **Status:** Master Synthesis of Site Data, Brand Guidelines, and WordPress Migration Source  
> **Source Files Analyzed:**
> 1. [`sage-data.ts`](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/sage-data.ts) — Master TypeScript data constants
> 2. [`SAGE_BRAND_GUIDELINES.md`](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/SAGE_BRAND_GUIDELINES.md) — Brand strategy, visual design system & content guide
> 3. [`shastryassociates.WordPress.2026-07-30.xml`](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/shastryassociates.WordPress.2026-07-30.xml) — Legacy WordPress site export (418 items)

---

## 1. Project Overview & Business Purpose

**Shastry Associates Global Enterprises, LLC (SAGE)** is an international network of highly qualified engineers, educators, and entrepreneurs specializing in radio frequency (RF), microwave engineering, applied electromagnetics, antennas, and wireless communication systems.

Unlike generic online learning platforms, SAGE is a **specialist technical institute and consulting group**. It bridges the gap between academic theory and real-world industrial practice by delivering:
- Expert-led training courses for recent graduates (B.E./B.Tech/M.E./M.Tech) and industry engineers.
- Hands-on tutorials, workshops, and custom organizational training.
- Engineering consulting services for complex RF, microwave, and 5G/wireless system challenges.

---

## 2. Core Brand Identity & Strategy

### 2.1 Mission, Vision & Goals

- **Mission:** To disseminate knowledge and information in the area of applied electromagnetics and wireless systems.
- **Vision:** To be the leader in disseminating knowledge and information in radio frequency wireless systems engineering and technologies globally.
- **Goals:**
  1. Provide practical engineering & technology insights into RF, mmWave, microwave circuits, components, sub-systems, and full systems.
  2. Deliver tutorials, courses, and workshops across on-site, off-site, online, and web formats.
  3. Offer specialized engineering consulting.

### 2.2 Brand Voice & Positioning

| Trait | Definition & Execution |
| :--- | :--- |
| **Precise** | Grounded in mathematical rigor and real-world measurement. No marketing fluff. |
| **Accessible** | Complex electromagnetic concepts explained clearly with intuitive design guidelines. |
| **Professional** | Clean, editorial aesthetics tailored for serious engineers and institutions. |
| **Global** | Associates spanning India, the United States, South Korea, and international academia/industry. |
| **Practical** | Direct progression from theoretical foundations to physical prototype and circuit design. |

---

## 3. Visual Design System & Design Tokens

SAGE uses a clean, editorial design language with warm paper tones, stark ink text, and high-contrast orange accents.

### 3.1 Color Palette

```
┌────────────────────────────────────────────────────────────────────────┐
│ MASTER TRIO BRAND PALETTE                                              │
│                                                                        │
│  [ #006AAD ]  Deep Blue     ── Footer background, structure & headers │
│  [ #35A9EF ]  Sky Blue      ── Subheadings, badges, icons, hover rings │
│  [ #FB6B31 ]  Vibrant Orange ── Primary CTAs, highlights & conversion  │
└────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────────────┐
│ NEUTRAL & ACCENT SUPPORTING COLORS                                     │
│                                                                        │
│  [ #0F172A ]  Slate Ink     ── Primary text & headings                 │
│  [ #FFFFFF ]  SAGE Paper    ── Main background                         │
│  [ #F8FBFF ]  Light Sky Tint ── Alternating section backgrounds        │
│  [ #E2E8F0 ]  Border Line   ── Card borders & outlines                 │
└────────────────────────────────────────────────────────────────────────┘
```

> **Design Rules:**
> - Orange (`#E46720`) is strictly an accent color (buttons, links, active pills). **Never** use full orange backgrounds for large sections.
> - Dark sections (e.g., footer, CTA banners) use `SAGE Ink` (`#1A1A1A`) with white text and orange accents.
> - No glossy gradients, glassmorphism, or generic blue buttons. Design is flat, structured, and editorial.

### 3.2 Typography

- **Headings / Display:** `Manrope` (Weights: 600–800)
- **Body / UI:** `Inter` (Weights: 400–500)
- **Code / Technical Specs:** `JetBrains Mono` (Weight: 400)

---

## 4. Website Structure & Master Data Breakdown

The site data defined in `sage-data.ts` is structured into clean TypeScript constants ready for integration into Next.js views:

### 4.1 Primary Site Configuration
- **Site Name:** SAGE (Shastry Associates Global Enterprises, LLC)
- **Tagline:** Professional RF, Microwave & Wireless Engineering Education
- **Website:** `https://shastryassociates.com`
- **Official Contact Email:** `info@shastryassociates.com`

### 4.2 Navigation Architecture
1. **Home** (`/`)
2. **Courses** (`/courses`) — *Sub-categories: RF Engineering, Microwave, Wireless Systems, Antennas, Signal Processing, Circuit Design*
3. **Services** (`/services`) — *Sub-categories: Training Programs, Consulting, Custom Courses, Workshops & Tutorials*
4. **About** (`/about`) — *Includes Mission, Vision, Values & Team*
5. **News** (`/news`) — *Technical articles & company announcements*
6. **Contact** (`/contact`) — *Inquiry form & office details*

### 4.3 Core Engineering Disciplines & Competencies
1. **Electronics & Communication Engineering:** Foundational & advanced communications systems.
2. **Applied Electromagnetics:** Maxwell equations, field theory, wave propagation.
3. **RF Circuits & Antennas:** Active/passive RF design, antenna arrays, matching networks.
4. **Wireless Communication Systems:** 5G NR architecture, mmWave, system link budgets.

### 4.4 Catalog of Educational Courses (Draft baseline)
- **Advanced RF System Design & Analysis** ($199) — Noise figure, linearity (IP3), link budgets.
- **Microwave Passive Circuits & Networks** ($149) — Power dividers, couplers, resonators.
- **5G Wireless Communication Systems** ($249) — 5G NR topology, mmWave, sub-6GHz.
- **Antenna Theory and Design** ($179) — Gain, radiation patterns, array parameters.
- **Digital Signal Processing for RF Systems** ($129) — DUC, DDC, NCOs, DSP-RF boundary.
- **High-Speed PCB Design & Signal Integrity** ($159) — Trace impedance, crosstalk, shielding.

### 4.5 Global Team & Leadership Network (25 Members)
- **Associates (15 Experts):** Mr. Bala Sundaram, Mr. Krishna Katragadda, Mr. Shrinivasa Ponnala, Mr. Sasidhar Vajha, Dr. I. Rosaline, Dr. G. Boopalan, Mr. Neelakantan, Prof. C. Murali, Dr. Parimala Prabhakar, Dr. Sanjay Moghe, Mr. James O'Donnell (US), Mr. Nicholas Manos (US), Prof. S. L. Nisha, Dr. YoungSoo Kim (South Korea), Dr. P. Shanthi.
- **Youth Wing (6 Members):** Safiya Khalid, Neha Kantikar, Preeti K, Visvajit, MSV, Shreya.
- **Advisors & IT Consultants (4 Members):** Mr. Kiran Bettadapura (Legal Advisor), Dr. Tejas Shastry (IT Consultant), Mr. Pumichat Raksaphaeng (IT Consultant), Ms. Srishti Bijjur (IT Consultant).

---

## 5. WordPress Export Analysis (`shastryassociates.WordPress.2026-07-30.xml`)

### 5.1 Export Metadata
- **Source Site:** `https://shastryassociates.com`
- **Export Date:** July 30, 2026 (WXR 1.2 Format)
- **Original Tagline:** *"Striving for excellence in providing knowledge, skills, and solutions"*
- **Key Authors:**
  - `snp@bradley.edu` (Dr. S. N. Prasad — Bradley University Faculty & SAGE Co-Founder)
  - `msv_group` (`vishwasmd.work@gmail.com` — MSV development team)

### 5.2 Security Audit & Data Cleaning Guidelines
> [!WARNING]
> **Legacy Site Compromise Identified:**  
> The WordPress XML dump contains 418 raw items, but a significant portion of categories, tags, and posts stem from spam/gambling injections on the old server (e.g., `$75 No Deposit Bonus Code 2022 Ozwin`, `fortune-tige-2442`, Cyrillic spam categories).

**Migration Instructions for Developers:**
1. **Do NOT import XML blindly** into the Next.js database or blog post pipeline.
2. Filter items strictly by valid post titles, slugs, and original SAGE domain authors (`snp@bradley.edu`, verified team members).
3. Sanitize all body HTML to strip external casino backlinks, hidden `<a>` tags, and unverified scripts.
4. Extract only legitimate technical articles, historical announcements, and verified pages into `.mdx` format in `posts/` or `sage-data.ts`.

---

## 6. Action Plan for Next.js Migration (`next-saas-starter`)

1. **Integrate Theme System:**  
   Update [components/GlobalStyles.tsx](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/components/GlobalStyles.tsx) with SAGE design tokens (`#E46720`, `#1A1A1A`, `#FFF8F3`, `#EAE7E4`) and Google Fonts (`Manrope`, `Inter`).
2. **Wire Component Data:**  
   Import [sage-data.ts](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/sage-data.ts) into view components:
   - Homepage: Hero, Competencies grid, Course cards, Why SAGE features, Team section.
   - `/courses`: Category filters, pricing, course detail templates.
   - `/about`: Mission, vision, core values, team grid.
   - `/services`: Training, consulting, workshops layout.
3. **Clean WordPress Content:**  
   Parse verified articles from `shastryassociates.WordPress.2026-07-30.xml`, clean HTML spam, and output static `.mdx` files into `/posts`.
4. **Collect Stakeholder Confirmations:**  
   Verify items marked with `isPlaceholder: true` in `sage-data.ts` (pricing, course syllabi, associate photos, testimonials, and office address).
