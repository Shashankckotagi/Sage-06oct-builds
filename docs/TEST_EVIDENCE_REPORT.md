# SAGE Web Platform — Automated Test Evidence Report

> **Generated On:** Sun, 27 Sep 2026 19:28:45 GMT  
> **Target:** `https://shastryassociates.com` (Local / Staging Verification)  
> **Test Engine:** Playwright Automated Suite  
> **Execution Duration:** 91.04s  

## 📊 Executive Summary

| Total Tests | Passed | Failed | Skipped | Pass Rate | Status |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **69** | **69** | **0** | **0** | **100.0%** | 🟢 **READY FOR LAUNCH** |

---

## 🧪 Detailed Test Evidence Log

| # | Category | Test Case Description | Environment / Viewport | Duration | Status | Evidence / Notes |
| :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| 1 | **Forms** | Server API endpoint (/api/sendEmail) rejects GET requests and requires POST | Desktop Chrome | 4.92s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 2 | **Functional** | Homepage mounts with main navigation and hero sections | Desktop Chrome | 10.10s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 3 | **Forms** | Contact form validates required fields and prevents empty submission | Desktop Chrome | 10.79s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 4 | **Functional** | Faculty directory loads and allows clicking to individual profile | Desktop Chrome | 12.64s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 5 | **Functional** | Adjacent specialist navigation allows moving between faculty members | Desktop Chrome | 9.43s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 6 | **Responsive** | Mobile viewport: Previous / Next specialist navigation stays on 1 horizontal line | Desktop Chrome | 4.39s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 7 | **Responsive** | Mobile viewport: Hamburger drawer opens and exposes navigation links | Desktop Chrome | 3.82s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 8 | **Seo and redirects** | Robots.txt returns 200 OK and references the sitemap | Desktop Chrome | 0.26s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 9 | **Seo and redirects** | Dynamic XML sitemap (/sitemap.xml) returns 200 OK and indexes all 56 pages | Desktop Chrome | 1.19s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 10 | **Responsive** | Desktop viewport: Layout renders 2-column grid with sticky sidebar on profile | Desktop Chrome | 4.30s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 11 | **Smoke** | Uptime health check endpoint (/api/health) returns 200 OK and status ok | Desktop Chrome | 0.63s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 12 | **Seo and redirects** | Homepage includes canonical, OpenGraph tags, and EducationalOrganization Schema | Desktop Chrome | 4.02s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 13 | **Seo and redirects** | Faculty profile includes Person Schema and individual canonical URL | Desktop Chrome | 4.73s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 14 | **Smoke** | Smoke check: Route / returns 200 and renders with 0 uncaught errors | Desktop Chrome | 4.42s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 15 | **Smoke** | Smoke check: Route /about returns 200 and renders with 0 uncaught errors | Desktop Chrome | 5.13s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 16 | **Smoke** | Smoke check: Route /team returns 200 and renders with 0 uncaught errors | Desktop Chrome | 5.30s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 17 | **Seo and redirects** | 301 Redirects: /about-us redirects to /about and /contact-us redirects to /contact | Desktop Chrome | 9.66s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 18 | **Smoke** | Smoke check: Route /blog returns 200 and renders with 0 uncaught errors | Desktop Chrome | 3.79s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 19 | **Smoke** | Smoke check: Route /privacy-policy returns 200 and renders with 0 uncaught errors | Desktop Chrome | 3.48s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 20 | **Smoke** | Smoke check: Route /mission returns 200 and renders with 0 uncaught errors | Desktop Chrome | 6.15s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 21 | **Smoke** | Smoke check: Route /contact returns 200 and renders with 0 uncaught errors | Desktop Chrome | 8.22s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 22 | **Smoke** | Smoke check: Route /sitemap returns 200 and renders with 0 uncaught errors | Desktop Chrome | 3.52s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 23 | **Themes** | Dark / Light mode switcher toggles body classes and maintains readable tokens | Desktop Chrome | 4.69s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 24 | **Forms** | Server API endpoint (/api/sendEmail) rejects GET requests and requires POST | Desktop Edge | 1.39s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 25 | **Forms** | Contact form validates required fields and prevents empty submission | Desktop Edge | 3.76s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 26 | **Functional** | Homepage mounts with main navigation and hero sections | Desktop Edge | 3.87s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 27 | **Functional** | Adjacent specialist navigation allows moving between faculty members | Desktop Edge | 8.08s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 28 | **Responsive** | Mobile viewport: Previous / Next specialist navigation stays on 1 horizontal line | Desktop Edge | 5.83s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 29 | **Seo and redirects** | Dynamic XML sitemap (/sitemap.xml) returns 200 OK and indexes all 56 pages | Desktop Edge | 1.34s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 30 | **Seo and redirects** | Robots.txt returns 200 OK and references the sitemap | Desktop Edge | 0.09s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 31 | **Responsive** | Mobile viewport: Hamburger drawer opens and exposes navigation links | Desktop Edge | 4.15s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 32 | **Functional** | Faculty directory loads and allows clicking to individual profile | Desktop Edge | 7.03s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 33 | **Seo and redirects** | Homepage includes canonical, OpenGraph tags, and EducationalOrganization Schema | Desktop Edge | 3.48s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 34 | **Responsive** | Desktop viewport: Layout renders 2-column grid with sticky sidebar on profile | Desktop Edge | 5.67s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 35 | **Seo and redirects** | Faculty profile includes Person Schema and individual canonical URL | Desktop Edge | 2.98s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 36 | **Smoke** | Uptime health check endpoint (/api/health) returns 200 OK and status ok | Desktop Edge | 0.93s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 37 | **Smoke** | Smoke check: Route / returns 200 and renders with 0 uncaught errors | Desktop Edge | 4.57s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 38 | **Smoke** | Smoke check: Route /team returns 200 and renders with 0 uncaught errors | Desktop Edge | 4.51s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 39 | **Smoke** | Smoke check: Route /about returns 200 and renders with 0 uncaught errors | Desktop Edge | 5.66s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 40 | **Smoke** | Smoke check: Route /blog returns 200 and renders with 0 uncaught errors | Desktop Edge | 2.65s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 41 | **Smoke** | Smoke check: Route /mission returns 200 and renders with 0 uncaught errors | Desktop Edge | 4.00s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 42 | **Seo and redirects** | 301 Redirects: /about-us redirects to /about and /contact-us redirects to /contact | Desktop Edge | 11.50s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 43 | **Smoke** | Smoke check: Route /contact returns 200 and renders with 0 uncaught errors | Desktop Edge | 5.53s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 44 | **Smoke** | Smoke check: Route /sitemap returns 200 and renders with 0 uncaught errors | Desktop Edge | 2.60s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 45 | **Smoke** | Smoke check: Route /privacy-policy returns 200 and renders with 0 uncaught errors | Desktop Edge | 3.77s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 46 | **Themes** | Dark / Light mode switcher toggles body classes and maintains readable tokens | Desktop Edge | 4.61s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 47 | **Forms** | Server API endpoint (/api/sendEmail) rejects GET requests and requires POST | Mobile Chrome | 0.12s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 48 | **Forms** | Contact form validates required fields and prevents empty submission | Mobile Chrome | 3.81s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 49 | **Functional** | Homepage mounts with main navigation and hero sections | Mobile Chrome | 4.41s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 50 | **Responsive** | Mobile viewport: Previous / Next specialist navigation stays on 1 horizontal line | Mobile Chrome | 4.23s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 51 | **Functional** | Adjacent specialist navigation allows moving between faculty members | Mobile Chrome | 8.47s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 52 | **Seo and redirects** | Dynamic XML sitemap (/sitemap.xml) returns 200 OK and indexes all 56 pages | Mobile Chrome | 0.09s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 53 | **Functional** | Faculty directory loads and allows clicking to individual profile | Mobile Chrome | 5.79s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 54 | **Seo and redirects** | Robots.txt returns 200 OK and references the sitemap | Mobile Chrome | 0.06s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 55 | **Responsive** | Mobile viewport: Hamburger drawer opens and exposes navigation links | Mobile Chrome | 4.71s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 56 | **Responsive** | Desktop viewport: Layout renders 2-column grid with sticky sidebar on profile | Mobile Chrome | 4.92s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 57 | **Smoke** | Uptime health check endpoint (/api/health) returns 200 OK and status ok | Mobile Chrome | 0.10s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 58 | **Seo and redirects** | Homepage includes canonical, OpenGraph tags, and EducationalOrganization Schema | Mobile Chrome | 4.09s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 59 | **Seo and redirects** | Faculty profile includes Person Schema and individual canonical URL | Mobile Chrome | 5.51s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 60 | **Smoke** | Smoke check: Route / returns 200 and renders with 0 uncaught errors | Mobile Chrome | 4.20s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 61 | **Seo and redirects** | 301 Redirects: /about-us redirects to /about and /contact-us redirects to /contact | Mobile Chrome | 7.61s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 62 | **Smoke** | Smoke check: Route /about returns 200 and renders with 0 uncaught errors | Mobile Chrome | 4.72s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 63 | **Smoke** | Smoke check: Route /team returns 200 and renders with 0 uncaught errors | Mobile Chrome | 5.09s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 64 | **Smoke** | Smoke check: Route /contact returns 200 and renders with 0 uncaught errors | Mobile Chrome | 5.24s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 65 | **Smoke** | Smoke check: Route /mission returns 200 and renders with 0 uncaught errors | Mobile Chrome | 4.73s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 66 | **Smoke** | Smoke check: Route /blog returns 200 and renders with 0 uncaught errors | Mobile Chrome | 4.28s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 67 | **Smoke** | Smoke check: Route /privacy-policy returns 200 and renders with 0 uncaught errors | Mobile Chrome | 3.33s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 68 | **Smoke** | Smoke check: Route /sitemap returns 200 and renders with 0 uncaught errors | Mobile Chrome | 3.00s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 69 | **Themes** | Dark / Light mode switcher toggles body classes and maintains readable tokens | Mobile Chrome | 3.37s | ✅ **PASS** | Verified successfully with 0 assertion errors. |

---

### 📝 Sign-off Matrix

| Stakeholder | Role | Status | Date |
| :--- | :--- | :---: | :--- |
| **Dr. Prasad Shastry** | Founding Director & Principal Advisor | Pending Review | — |
| **Ms. Scarlet Daoud** | Strategy & Operations Lead | Pending Review | — |
| **Team MSV** | Core Engineering & DevOps | **PASSED** | 2026-09-27 |
