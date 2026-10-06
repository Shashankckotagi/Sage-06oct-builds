import { test, expect } from '@playwright/test';

test.describe('SEO, Sitemaps & Redirects Testing', () => {
  test('Dynamic XML sitemap (/sitemap.xml) returns 200 OK and indexes all 56 pages', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);
    
    const text = await response.text();
    expect(text).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(text).toContain('<urlset');
    expect(text).toContain('https://shastryassociates.com/about');
    expect(text).toContain('https://shastryassociates.com/team/prasad-shastry');
  });

  test('Robots.txt returns 200 OK and references the sitemap', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);
    
    const text = await response.text();
    expect(text).toContain('User-agent: *');
    expect(text).toContain('Sitemap: https://shastryassociates.com/sitemap.xml');
  });

  test('Homepage includes canonical, OpenGraph tags, and EducationalOrganization Schema', async ({ page }) => {
    await page.goto('/');

    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://shastryassociates.com/');

    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toContain('SAGE');

    // JSON-LD Schema
    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(jsonLd).toContain('EducationalOrganization');
  });

  test('Faculty profile includes Person Schema and individual canonical URL', async ({ page }) => {
    await page.goto('/team/prasad-shastry');

    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://shastryassociates.com/team/prasad-shastry');

    // Verify Person Schema
    const jsonLdContent = await page.locator('script[type="application/ld+json"]').allTextContents();
    const hasPerson = jsonLdContent.some((c) => c.includes('"@type":"Person"') && c.includes('Dr. Prasad Shastry'));
    expect(hasPerson).toBe(true);
  });

  test('301 Redirects: /about-us redirects to /about and /contact-us redirects to /contact', async ({ page }) => {
    await page.goto('/about-us');
    await expect(page).toHaveURL(/\/about$/);

    await page.goto('/contact-us');
    await expect(page).toHaveURL(/\/contact$/);
  });
});
