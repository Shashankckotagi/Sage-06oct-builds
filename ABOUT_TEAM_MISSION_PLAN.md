# SAGE — About Us, Team & Mission/Vision Blueprint

> **Status:** Approved Blueprint & Implementation Plan  
> **Routing Structure:** Separate Pages — `/about` (Mission & Story) & `/team` (Faculty Directory)  
> **Design System:** `styled-components` + CSS Variables (`next-saas-starter`)  
> **Data Management:** `sage-data.ts` + TinaCMS Integration  
> **Interactivity:** Slide-out Bio Drawer (`@accessible/drawer` / Modal)

---

## 1. Page Routing & Architecture

Based on user selections, the site architecture will feature **two dedicated pages**:

```
pages/
├── about.tsx        # Mission, Vision, Heritage Story, Core Values & Strategic Advisory
└── team.tsx         # Faculty Roster, Associate Directory, Filter Pills & Bio Drawers
```

---

## 2. Page 1: `/about` (Mission, Vision & Heritage)

### 2.1 Content & Section Breakdown

1. **Hero Section (`AboutHero.tsx`)**
   - **Eyebrow:** `01 / ABOUT SAGE`
   - **Headline:** "Disseminating applied electromagnetics knowledge with uncompromised engineering rigor."
   - **Subheading:** "Founded by senior RF and microwave engineering veterans to bridge academia and industry."
   - **Stats Bar (`StatsBar.tsx`):**
     - `25+` Years Applied Experience
     - `500+` Engineers & Researchers Trained
     - `4` Global Partner Regions (US, India, S. Korea, Europe)

2. **Mission & Vision Cards (`MissionVisionSection.tsx`)**
   - **Mission Card:** Left Deep Blue accent `#006AAD`. Focus on practical engineering dissemination, hands-on lab exercises, and noise figure/link budget mastery.
   - **Vision Card:** Right Sky Blue accent `#35A9EF`. Focus on global leadership in wireless, 5G/6G, and microwave education.

3. **Core Pillars (4-Card `AutofitGrid`)**
   - **Technical Accuracy:** No fluff—every module backed by measurement and theory.
   - **Global Associate Network:** Collaborative experts across research labs and semiconductor hubs.
   - **Academic & Industry Synergy:** Aligning graduate-level theory with commercial R&D realities.
   - **Practical Bench Mastery:** Focus on design guidelines, circuit layouts, and lab instruments.

4. **Heritage & Company Story (`StorySection.tsx`)**
   - Narrative of Shastry Associates Global Enterprises (SAGE).
   - Side-by-side visual feature (`BasicSection.tsx`) highlighting the transition from boutique technical advisory to a global educational network.

5. **Call to Action (`Cta.tsx`)**
   - "Explore Our Faculty Directory" -> button linking to `/team`
   - "Corporate Advisory Inquiry" -> button linking to `/contact`

---

## 3. Page 2: `/team` (Faculty & Associate Directory)

### 3.1 Content & Interactivity

1. **Team Hero (`TeamHero.tsx`)**
   - **Eyebrow:** `02 / FACULTY & ASSOCIATES`
   - **Headline:** "World-class RF, microwave, and wireless systems experts."
   - **Filter Pills:** Segment team by discipline:
     - `All Experts`
     - `Microwave & RF Circuits`
     - `Wireless & 5G/6G`
     - `Antenna Theory`
     - `Corporate Advisory`

2. **Faculty Grid (`TeamGrid.tsx`)**
   - 3-column `AutofitGrid` (`minWidth="340px"`).
   - **Card Elements:**
     - Avatar circle with member initials and dark blue gradient
     - Name & Degrees (e.g., *Dr. S. R. Shastry, Ph.D.*)
     - Title / Primary Specialization
     - Discipline Pill Tag (`--primary` Orange fill)
     - Short 2-line teaser
     - `"View Full Bio →"` trigger button

3. **Slide-Out Bio Drawer (`BioDrawer.tsx`)**
   - Powered by `@accessible/drawer` / Modal overlay.
   - **Drawer Content:**
     - High-res headshot / avatar badge
     - Full Academic & Industry Biography
     - Key Technical Specializations & Courses Taught
     - Publications / IEEE Memberships
     - Direct Consultation Request Button

---

## 4. Implementation Steps

1. **Data Layer (`sage-data.ts`):**
   - Define structured `teamMembers` array containing bios, disciplines, credentials, and achievements.
2. **Components Creation:**
   - Create `components/BioDrawer.tsx`
   - Create `views/AboutPage/` sections (`Hero.tsx`, `MissionVision.tsx`, `ValuesGrid.tsx`, `Story.tsx`)
   - Create `views/TeamPage/` sections (`Hero.tsx`, `FilterableTeamGrid.tsx`)
3. **Route Pages:**
   - Create `pages/about.tsx` and `pages/team.tsx`
4. **Navbar Updates:**
   - Update `Navbar.tsx` and `NavigationDrawer.tsx` to include direct links to `About` and `Team`.
