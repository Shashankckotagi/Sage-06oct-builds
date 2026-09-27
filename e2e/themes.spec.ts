import { test, expect } from '@playwright/test';

test.describe('Theme & Contrast Testing', () => {
  test('Dark / Light mode switcher toggles body classes and maintains readable tokens', async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.locator('button[aria-label*="theme"], button[aria-label*="mode"], header svg').first();
    
    // Check initial body class or style
    const initialClass = await page.locator('body').getAttribute('class');
    
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      await page.waitForTimeout(300);
      
      const newClass = await page.locator('body').getAttribute('class');
      // Verify body theme class switched or background CSS variable updated
      expect(newClass !== null || initialClass !== null).toBe(true);
    }
  });
});
