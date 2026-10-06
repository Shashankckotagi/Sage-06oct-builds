# SAGE — Quality Assurance Test Plan & Evidence Template

> **Organization:** Shastry Associates Global Enterprises, LLC (SAGE)  
> **Production Target:** `https://shastryassociates.com`  
> **Test Automation:** Playwright Multi-Device E2E Engine  
> **Target Audience:** QA Engineers, Lead Developers, and Stakeholders (*Dr. Shastry, Scarlet Daoud, Aparna Sankarasubram, Team MSV*)  

---

## 1. Test Strategy & Scope

This document provides the standard quality assurance framework for the SAGE web platform. All pages must pass both the **Automated Playwright Test Suite** and **Manual Stakeholder Inspection** before production release.

```
                              ┌───────────────────────────┐
                              │  Automated Test Execution │
                              │     (yarn test:e2e)       │
                              └─────────────┬─────────────┘
                                            │
               ┌────────────────────────────┼────────────────────────────┐
               ▼                            ▼                            ▼
  ┌────────────────────────┐   ┌────────────────────────┐   ┌────────────────────────┐
  │  Functional & Forms    │   │  Responsive & Themes   │   │  SEO, Sitemap & 301s   │
  │ (Nav, Drawer, Resend)  │   │ (Mobile, Tablet, Dark) │   │ (JSON-LD, Canonicals)  │
  └────────────────────────┘   └────────────────────────┘   └────────────────────────┘
                                            │
                                            ▼
                              ┌───────────────────────────┐
                              │  Auto Evidence Generation │
                              │ (docs/TEST_EVIDENCE_REPORT│
                              └───────────────────────────┘
```

---

## 2. Test Categories & Acceptance Criteria

### 2.1 Functional Testing
* **Navigation Links**: Every navbar item, footer link, and breadcrumb must navigate to the valid destination without console errors.
* **Faculty Directory & Profiles**: Clicking any member in `/team` must navigate to `/team/[slug]`.
* **Adjacent Navigation**: The `← Previous` and `Next →` buttons on faculty profile pages must cycle between adjacent specialists.

### 2.2 Responsive & Viewport Testing
* **Mobile (375px–420px)**: Adjacent specialist navigation must remain on **1 single line** side-by-side without vertical stacking. Hamburger menu drawer must open and close smoothly.
* **Tablet (768px–1024px)**: Grid layouts must gracefully collapse from 3/4 columns to 2 columns.
* **Desktop (1200px+)**: Sticky portrait sidebar on profile pages must remain locked while scrolling through long publications.

### 2.3 Theme & Contrast Testing
* Theme switcher toggle in the navbar must swap between **Light Mode** and **Dark Mode (Slate Ink `#0F172A`)**.
* Text contrast on all buttons, tags, and body prose must satisfy WCAG AA readability standards in both modes.

### 2.4 Accessibility (a11y)
* All interactive elements must be reachable via `Tab` key navigation with visible focus rings.
* All avatars and hero images must include descriptive `alt` attributes.
* Icon-only buttons must have descriptive `aria-label` attributes.

### 2.5 SEO, Canonicals & Structured Data
* Every page must output a unique `<title>` and `<meta name="description">`.
* `<link rel="canonical">` must match the exact canonical route.
* `https://shastryassociates.com/sitemap.xml` must return HTTP 200 and index all 56 pages.

### 2.6 Redirects & Legacy URL Handling
* Legacy URLs (`/about-us`, `/contact-us`, `/home`, `/faculty`) must issue **301 permanent redirects** to canonical Next.js routes.

### 2.7 Forms & Security
* Contact form must require name, email, and message inputs before allowing submission.
* Honeypot anti-spam defense must silently reject bot automated submissions.
* Server endpoint `/api/sendEmail` must strictly reject non-POST requests with HTTP 405 Method Not Allowed.

### 2.8 Cross-Browser Verification
* Verified across Google Chrome, Microsoft Edge, Mozilla Firefox, and Apple Safari (iOS/macOS).

### 2.9 Launch Smoke & Uptime Checks
* `/api/health` returns HTTP 200 with status ok and uptime timestamp.
* No console errors or unhandled client-side exceptions on any core page.

---

## 3. Running Automated Tests & Generating Evidence

### Run Full Test Suite:
```bash
yarn test:e2e
```

### Pre-Push Git Hook Enforcement (Automated Guardrail):
When any developer runs `git push`, the local Husky hook automatically intercepts the push and executes:
1. `yarn tsc --noEmit` (validates 0 TypeScript errors)
2. `yarn test:e2e` (validates all Playwright test cases across multi-device viewports)

If any test fails, the push is immediately rejected, preventing breaking changes from reaching the remote repository.

---

## 4. Manual Test Evidence Log Template

For manual QA runs or stakeholder reviews, copy and complete this log:

| Test ID | Category | Test Case Description | Expected Result | Device / Browser | Status | Tester & Date | Evidence / Notes |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- | :--- |
| `TC-FN-01` | Functional | Navbar & dropdown links | All links route to active pages | Chrome / macOS | **PASS** | Vishwas (Sep 28) | Clean navigation, 0 console errors |
| `TC-FN-02` | Functional | Profile adjacent nav | Previous/Next links route to adjacent member | Edge / Win 11 | **PASS** | Manish (Sep 28) | Swapped from Dr. Shastry to Scarlet Daoud |
| `TC-RS-01` | Responsive | Profile buttons on Mobile | Prev/Next buttons stay in 1 single row | Safari / iPhone 14 | **PASS** | Shashank (Sep 28) | Verified side-by-side flex row |
| `TC-TH-01` | Themes | Dark / Light toggle | Background and text tokens swap cleanly | Chrome / Android | **PASS** | Vishwas (Sep 28) | High contrast verified |
| `TC-SEO-01`| SEO | XML Sitemap check | `/sitemap.xml` returns 56 URLs | All Browsers | **PASS** | Automated Suite | 200 OK, valid XML schema |
| `TC-FM-01` | Forms | Contact form submission | Email delivered to SAGE team via Resend | Firefox / Desktop | **PASS** | Manish (Sep 28) | Received notification + user confirmation |
| `TC-SM-01` | Smoke | `/api/health` check | Returns status ok and uptime | All Browsers | **PASS** | Automated Suite | HTTP 200 OK |

---

## 5. Stakeholder Sign-Off Matrix

| Stakeholder | Role | Sign-off Status | Date |
| :--- | :--- | :---: | :--- |
| **Dr. Prasad Shastry** | Founding Director & Chief Technical Advisor | `[ PENDING / APPROVED ]` | `YYYY-MM-DD` |
| **Ms. Scarlet Daoud** | Strategy & Operations Lead | `[ PENDING / APPROVED ]` | `YYYY-MM-DD` |
| **Aparna Sankarasubram**| Executive Stakeholder | `[ PENDING / APPROVED ]` | `YYYY-MM-DD` |
| **Team MSV** | Lead Engineering & DevOps | `[ APPROVED ]` | `2026-09-28` |
