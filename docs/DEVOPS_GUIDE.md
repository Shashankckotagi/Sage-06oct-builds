# SAGE — DevOps, CI/CD & Deployment Guide

> **Organization:** Shastry Associates Global Enterprises, LLC (SAGE)  
> **Production Target:** Vercel (Edge CDN + AWS Lambda Serverless Functions)  
> **Target Production URL:** `https://shastryassociates.com`  
> **Target Audience:** DevOps Engineers, Lead Developers, and Systems Administrators  

---

## 1. DevOps Architecture Overview

```
                                  ┌───────────────────────────┐
                                  │   GitHub Repository       │
                                  │  (SAGE Web Platform)      │
                                  └─────────────┬─────────────┘
                                                │
                 ┌──────────────────────────────┼──────────────────────────────┐
                 ▼                              ▼                              ▼
    ┌─────────────────────────┐    ┌─────────────────────────┐    ┌─────────────────────────┐
    │     GitHub Actions      │    │  Automated Dependency   │    │  Vercel CI/CD Pipeline  │
    │   (CI Build + CodeQL)   │    │       (Dependabot)      │    │   (Production Deploy)   │
    └─────────────────────────┘    └─────────────────────────┘    └─────────────┬───────────┘
                                                                                │
                                                 ┌──────────────────────────────┼──────────────────────────────┐
                                                 ▼                              ▼                              ▼
                                    ┌─────────────────────────┐    ┌─────────────────────────┐    ┌─────────────────────────┐
                                    │    Cloudinary CDN       │    │    Resend Email API     │    │   DreamHost DNS Panel   │
                                    │  (Optimized Images)     │    │   (Inquiry Forwarding)  │    │ (shastryassociates.com) │
                                    └─────────────────────────┘    └─────────────────────────┘    └─────────────────────────┘
```

---

## 2. Hosting & Runtime Specification

| Layer | Configuration | Notes |
| :--- | :--- | :--- |
| **Hosting Platform** | **Vercel** | Native Next.js first-class deployment platform. |
| **Node.js Runtime** | Node 18.x / 20.x | Optimized for Next.js 12 Pages router and TypeScript 5.1. |
| **Package Manager** | `yarn@1.22.22` | Uses resolutions and postinstall hooks for React 18 types. |
| **Edge Distribution** | Vercel Edge Network | Pre-renders and caches 56 SSG static pages worldwide. |
| **Serverless Functions** | AWS Lambda via Vercel | `/api/sendEmail` and `/api/health` run serverless on-demand. |

---

## 3. Configuration Files

### 3.1 `vercel.json`
Located at the root of the repository, configuring HTTP security headers and API caching rules:
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "buildCommand": "yarn build",
  "installCommand": "yarn install",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    },
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-store, max-age=0" }
      ]
    }
  ]
}
```

---

## 4. Quality Gates & Continuous Integration

### 4.1 Git Pre-Push Hook (Husky Quality Gate)
Enforced locally on developer machines before any code can be pushed to remote GitHub repositories:
* **Hook File**: [`.husky/pre-push`](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/.husky/pre-push)
* **Pre-Push Validation Checks**:
  1. `yarn tsc --noEmit` — Rejects the push immediately if any TypeScript compilation error exists.
  2. `yarn test:e2e` — Executes the full Playwright suite (smoke, functional, responsive, theme, forms, and SEO).
  3. Updates [`docs/TEST_EVIDENCE_REPORT.md`](file:///c:/Users/MOG/Documents/Projects/Sage-new/next-saas-starter/docs/TEST_EVIDENCE_REPORT.md) automatically with pass/fail metrics.
* **Failure Handling**: If any check fails, `git push` aborts with a non-zero exit code and displays the exact assertion error.

### 4.2 GitHub Actions CI Pipeline (`.github/workflows/ci.yml`)
Triggers automatically on every pull request and push to `main`, `master`, and `feat/**` branches:
1. **Dependency Installation**: Runs `yarn install --frozen-lockfile --ignore-engines` with Yarn caching.
2. **Code Quality**: Runs `yarn lint`.
3. **Type Safety**: Runs `yarn tsc --noEmit`.
4. **Production Build**: Compiles the Next.js production bundle with `yarn build`.
5. **Automated E2E Testing**: Installs Playwright Chromium headless browser and executes `yarn test:e2e`.
6. **Artifact Storage**: Automatically uploads `docs/TEST_EVIDENCE_REPORT.md` as a verifiable build artifact.

### 4.3 Security Vulnerability Scanning (`.github/workflows/codeql-analysis.yml`)
* Runs weekly automated CodeQL analysis to identify vulnerabilities in JavaScript/TypeScript dependencies.

### 4.4 Uptime Health Check Endpoint (`pages/api/health.ts`)
* Endpoint: `https://shastryassociates.com/api/health`
* Returns status, uptime, timestamp, and environment for external monitoring services (UptimeRobot, BetterStack).

---

## 5. Environment Variables & Secret Governance

Set these in the **Vercel Dashboard ➔ Project Settings ➔ Environment Variables**:

| Variable Name | Type | Recommended Value / Source |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Client (Public) | `sage-production` (Cloudinary Cloud Name) |
| `RESEND_API_KEY` | **Server (Secret)** | `re_xxxxxxxxxxxxxxxx` (from Resend dashboard) |
| `NEXT_PUBLIC_EDIT_BRANCH` | Client (Public) | `main` |

---

## 6. DNS & Cutover Procedure (DreamHost ➔ Vercel)

Configure the following records in your DreamHost cPanel DNS management console:

```
Record Type    Host / Name       Target / Value
─────────────────────────────────────────────────────────────
A              @                 76.76.21.21
CNAME          www               cname.vercel-dns.com
```

* SSL/TLS Let's Encrypt certificates will be auto-provisioned by Vercel within 10 minutes.

---

## 7. Developer CLI Commands

```bash
# 1. Install all dependencies
yarn install

# 2. Start local development server (http://localhost:3000)
yarn dev

# 3. Verify TypeScript types (0 errors)
yarn tsc --noEmit

# 4. Compile production build
yarn build

# 5. Preview production build locally
yarn start

# 6. Run ESLint checks
yarn lint
```
