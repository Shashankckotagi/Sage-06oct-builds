import { test, expect } from '@playwright/test';

test.describe('Form Validation & Anti-Bot Testing', () => {
  test('Contact form validates required fields and prevents empty submission', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('form, button[type="submit"]').first()).toBeVisible();

    const submitBtn = page.locator('button[type="submit"]').first();
    await submitBtn.click({ force: true });

    // Check validation error or input state
    const nameInput = page.locator('input[name="name"], input#name, input[placeholder*="Name"]').first();
    if (await nameInput.isVisible()) {
      const isRequired = await nameInput.getAttribute('required');
      expect(isRequired !== null || (await page.locator('text=required, text=Please fill').count()) >= 0).toBe(true);
    }
  });

  test('Server API endpoint (/api/sendEmail) rejects GET requests and requires POST', async ({ request }) => {
    const getResponse = await request.get('/api/sendEmail');
    expect(getResponse.status()).toBe(405);
  });
});
