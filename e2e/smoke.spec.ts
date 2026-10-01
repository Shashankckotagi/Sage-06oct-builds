import { test, expect } from '@playwright/test';

test.describe('Launch Smoke Tests & Uptime Health', () => {
  test('Uptime health check endpoint (/api/health) returns 200 OK and status ok', async ({ request }) => {
    const response = await request.get('/api/health');
    expect(response.status()).toBe(200);

    const json = await response.json();
    expect(json.status).toBe('ok');
    expect(json.timestamp).toBeDefined();
  });

  const routes = ['/', '/about', '/team', '/contact', '/mission', '/blog', '/privacy-policy', '/sitemap'];

  for (const route of routes) {
    test(`Smoke check: Route ${route} returns 200 and renders with 0 uncaught errors`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);

      // Verify header and footer are visible
      await expect(page.locator('header, nav').first()).toBeVisible();
      await expect(page.locator('footer').first()).toBeVisible();
    });
  }
});
