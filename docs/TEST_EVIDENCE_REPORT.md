# SAGE Web Platform — Automated Test Evidence Report

> **Generated On:** Sun, 04 Oct 2026 14:11:42 GMT  
> **Target:** `https://shastryassociates.com` (Local / Staging Verification)  
> **Test Engine:** Playwright Automated Suite  
> **Execution Duration:** 257.47s  

## 📊 Executive Summary

| Total Tests | Passed | Failed | Skipped | Pass Rate | Status |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **78** | **27** | **51** | **0** | **34.6%** | 🔴 **ACTION REQUIRED** |

---

## 🧪 Detailed Test Evidence Log

| # | Category | Test Case Description | Environment / Viewport | Duration | Status | Evidence / Notes |
| :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| 1 | **Forms** | Server API endpoint (/api/sendEmail) rejects GET requests and requires POST | Desktop Chrome | 3.44s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 2 | **Functional** | Faculty directory loads and allows clicking to individual profile | Desktop Chrome | 13.18s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveTitle[2m([22m[32mexpected[39m[2m)[22m fa... |
| 3 | **Forms** | Contact form validates required fields and prevents empty submission | Desktop Chrome | 15.09s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 4 | **Functional** | Homepage mounts with main navigation and hero sections | Desktop Chrome | 15.14s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 5 | **Responsive** | Mobile viewport: Hamburger drawer opens and exposes navigation links | Desktop Chrome | 1.62s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 6 | **Seo and redirects** | Dynamic XML sitemap (/sitemap.xml) returns 200 OK and indexes all 56 pages | Desktop Chrome | 0.31s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 7 | **Seo and redirects** | Robots.txt returns 200 OK and references the sitemap | Desktop Chrome | 0.03s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 8 | **Functional** | Adjacent specialist navigation allows moving between faculty members | Desktop Chrome | 16.71s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 9 | **Seo and redirects** | Homepage includes canonical, OpenGraph tags, and EducationalOrganization Schema | Desktop Chrome | 1.05s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 10 | **Seo and redirects** | 301 Redirects: /about-us redirects to /about and /contact-us redirects to /contact | Desktop Chrome | 3.37s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 11 | **Smoke** | Uptime health check endpoint (/api/health) returns 200 OK and status ok | Desktop Chrome | 0.23s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 12 | **Seo and redirects** | Faculty profile includes Person Schema and individual canonical URL | Desktop Chrome | 4.11s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 13 | **Responsive** | Desktop viewport: Layout renders 2-column grid with sticky sidebar on profile | Desktop Chrome | 13.98s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 14 | **Responsive** | Mobile viewport: Previous / Next specialist navigation stays on 1 horizontal line | Desktop Chrome | 15.49s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 15 | **Smoke** | Smoke check: Route / returns 200 and renders with 0 uncaught errors | Desktop Chrome | 10.73s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 16 | **Smoke** | Smoke check: Route /about returns 200 and renders with 0 uncaught errors | Desktop Chrome | 10.64s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 17 | **Smoke** | Smoke check: Route /team returns 200 and renders with 0 uncaught errors | Desktop Chrome | 11.33s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 18 | **Smoke** | Smoke check: Route /contact returns 200 and renders with 0 uncaught errors | Desktop Chrome | 10.88s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 19 | **Smoke** | Smoke check: Route /mission returns 200 and renders with 0 uncaught errors | Desktop Chrome | 11.70s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 20 | **Smoke** | Smoke check: Route /newsletter returns 200 and renders with 0 uncaught errors | Desktop Chrome | 12.30s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 21 | **Smoke** | Smoke check: Route /gallery returns 200 and renders with 0 uncaught errors | Desktop Chrome | 11.99s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 22 | **Smoke** | Smoke check: Route /services returns 200 and renders with 0 uncaught errors | Desktop Chrome | 11.30s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 23 | **Themes** | Dark / Light mode switcher toggles body classes and maintains readable tokens | Desktop Chrome | 1.35s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 24 | **Smoke** | Smoke check: Route /courses returns 200 and renders with 0 uncaught errors | Desktop Chrome | 11.57s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 25 | **Forms** | Server API endpoint (/api/sendEmail) rejects GET requests and requires POST | Desktop Edge | 0.34s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 26 | **Smoke** | Smoke check: Route /privacy-policy returns 200 and renders with 0 uncaught errors | Desktop Chrome | 11.94s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 27 | **Smoke** | Smoke check: Route /sitemap returns 200 and renders with 0 uncaught errors | Desktop Chrome | 11.45s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 28 | **Forms** | Contact form validates required fields and prevents empty submission | Desktop Edge | 12.70s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 29 | **Functional** | Homepage mounts with main navigation and hero sections | Desktop Edge | 11.93s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 30 | **Functional** | Faculty directory loads and allows clicking to individual profile | Desktop Edge | 12.21s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveTitle[2m([22m[32mexpected[39m[2m)[22m fa... |
| 31 | **Responsive** | Mobile viewport: Hamburger drawer opens and exposes navigation links | Desktop Edge | 2.03s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 32 | **Seo and redirects** | Dynamic XML sitemap (/sitemap.xml) returns 200 OK and indexes all 56 pages | Desktop Edge | 0.37s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 33 | **Seo and redirects** | Robots.txt returns 200 OK and references the sitemap | Desktop Edge | 0.03s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 34 | **Seo and redirects** | Homepage includes canonical, OpenGraph tags, and EducationalOrganization Schema | Desktop Edge | 2.06s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 35 | **Functional** | Adjacent specialist navigation allows moving between faculty members | Desktop Edge | 16.57s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 36 | **Seo and redirects** | Faculty profile includes Person Schema and individual canonical URL | Desktop Edge | 4.95s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 37 | **Smoke** | Uptime health check endpoint (/api/health) returns 200 OK and status ok | Desktop Edge | 0.34s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 38 | **Seo and redirects** | 301 Redirects: /about-us redirects to /about and /contact-us redirects to /contact | Desktop Edge | 2.19s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 39 | **Responsive** | Mobile viewport: Previous / Next specialist navigation stays on 1 horizontal line | Desktop Edge | 16.49s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 40 | **Responsive** | Desktop viewport: Layout renders 2-column grid with sticky sidebar on profile | Desktop Edge | 14.86s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 41 | **Smoke** | Smoke check: Route / returns 200 and renders with 0 uncaught errors | Desktop Edge | 11.39s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 42 | **Smoke** | Smoke check: Route /about returns 200 and renders with 0 uncaught errors | Desktop Edge | 10.91s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 43 | **Smoke** | Smoke check: Route /team returns 200 and renders with 0 uncaught errors | Desktop Edge | 14.73s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 44 | **Smoke** | Smoke check: Route /newsletter returns 200 and renders with 0 uncaught errors | Desktop Edge | 28.84s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 45 | **Smoke** | Smoke check: Route /mission returns 200 and renders with 0 uncaught errors | Desktop Edge | 31.36s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 46 | **Smoke** | Smoke check: Route /gallery returns 200 and renders with 0 uncaught errors | Desktop Edge | 25.04s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 47 | **Smoke** | Smoke check: Route /contact returns 200 and renders with 0 uncaught errors | Desktop Edge | 39.33s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 48 | **Smoke** | Smoke check: Route /services returns 200 and renders with 0 uncaught errors | Desktop Edge | 12.64s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 49 | **Smoke** | Smoke check: Route /courses returns 200 and renders with 0 uncaught errors | Desktop Edge | 12.84s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 50 | **Smoke** | Smoke check: Route /privacy-policy returns 200 and renders with 0 uncaught errors | Desktop Edge | 12.87s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 51 | **Forms** | Server API endpoint (/api/sendEmail) rejects GET requests and requires POST | Mobile Chrome | 0.17s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 52 | **Themes** | Dark / Light mode switcher toggles body classes and maintains readable tokens | Desktop Edge | 8.36s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 53 | **Functional** | Homepage mounts with main navigation and hero sections | Mobile Chrome | 11.18s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 54 | **Forms** | Contact form validates required fields and prevents empty submission | Mobile Chrome | 15.96s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 55 | **Smoke** | Smoke check: Route /sitemap returns 200 and renders with 0 uncaught errors | Desktop Edge | 26.02s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 56 | **Functional** | Faculty directory loads and allows clicking to individual profile | Mobile Chrome | 12.02s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveTitle[2m([22m[32mexpected[39m[2m)[22m fa... |
| 57 | **Responsive** | Mobile viewport: Hamburger drawer opens and exposes navigation links | Mobile Chrome | 7.47s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 58 | **Seo and redirects** | Dynamic XML sitemap (/sitemap.xml) returns 200 OK and indexes all 56 pages | Mobile Chrome | 0.24s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 59 | **Seo and redirects** | Robots.txt returns 200 OK and references the sitemap | Mobile Chrome | 0.01s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 60 | **Seo and redirects** | Homepage includes canonical, OpenGraph tags, and EducationalOrganization Schema | Mobile Chrome | 4.37s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 61 | **Seo and redirects** | Faculty profile includes Person Schema and individual canonical URL | Mobile Chrome | 8.39s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 62 | **Seo and redirects** | 301 Redirects: /about-us redirects to /about and /contact-us redirects to /contact | Mobile Chrome | 2.43s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 63 | **Smoke** | Uptime health check endpoint (/api/health) returns 200 OK and status ok | Mobile Chrome | 0.14s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 64 | **Responsive** | Mobile viewport: Previous / Next specialist navigation stays on 1 horizontal line | Mobile Chrome | 27.31s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 65 | **Functional** | Adjacent specialist navigation allows moving between faculty members | Mobile Chrome | 31.26s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 66 | **Responsive** | Desktop viewport: Layout renders 2-column grid with sticky sidebar on profile | Mobile Chrome | 26.44s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 67 | **Smoke** | Smoke check: Route / returns 200 and renders with 0 uncaught errors | Mobile Chrome | 12.23s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 68 | **Smoke** | Smoke check: Route /contact returns 200 and renders with 0 uncaught errors | Mobile Chrome | 14.12s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 69 | **Smoke** | Smoke check: Route /team returns 200 and renders with 0 uncaught errors | Mobile Chrome | 16.56s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 70 | **Smoke** | Smoke check: Route /about returns 200 and renders with 0 uncaught errors | Mobile Chrome | 17.20s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 71 | **Smoke** | Smoke check: Route /mission returns 200 and renders with 0 uncaught errors | Mobile Chrome | 27.28s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 72 | **Smoke** | Smoke check: Route /newsletter returns 200 and renders with 0 uncaught errors | Mobile Chrome | 17.54s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 73 | **Smoke** | Smoke check: Route /gallery returns 200 and renders with 0 uncaught errors | Mobile Chrome | 17.22s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 74 | **Smoke** | Smoke check: Route /services returns 200 and renders with 0 uncaught errors | Mobile Chrome | 17.48s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 75 | **Themes** | Dark / Light mode switcher toggles body classes and maintains readable tokens | Mobile Chrome | 2.85s | ✅ **PASS** | Verified successfully with 0 assertion errors. |
| 76 | **Smoke** | Smoke check: Route /courses returns 200 and renders with 0 uncaught errors | Mobile Chrome | 15.03s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 77 | **Smoke** | Smoke check: Route /privacy-policy returns 200 and renders with 0 uncaught errors | Mobile Chrome | 14.17s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |
| 78 | **Smoke** | Smoke check: Route /sitemap returns 200 and renders with 0 uncaught errors | Mobile Chrome | 14.31s | ❌ **FAIL** | Error: Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed  Locator: ... |

---

### 📝 Sign-off Matrix

| Stakeholder | Role | Status | Date |
| :--- | :--- | :---: | :--- |
| **Dr. Prasad Shastry** | Founding Director & Principal Advisor | Pending Review | — |
| **Ms. Scarlet Daoud** | Strategy & Operations Lead | Pending Review | — |
| **Team MSV** | Core Engineering & DevOps | **PASSED** | 2026-10-04 |
