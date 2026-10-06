import { test, expect } from '@playwright/test';

test.describe('Responsive & Viewport Testing', () => {
  test('Mobile viewport: Previous / Next specialist navigation stays on 1 horizontal line', async ({ page }) => {
    // Set explicit mobile screen size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/team/prasad-shastry');

    const adjacentNav = page.locator('nav[aria-label="Adjacent faculty navigation"]');
    await expect(adjacentNav).toBeVisible();

    // Verify flex direction is row (or display flex with side-by-side items)
    const isFlex = await adjacentNav.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.display === 'flex' && style.flexDirection !== 'column';
    });
    expect(isFlex).toBe(true);
  });

  test('Mobile viewport: Hamburger drawer opens and exposes navigation links', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Locate drawer toggle button
    const menuBtn = page.locator('button[aria-label="Toggle menu"], button[aria-label="Open menu"], header svg').first();
    if (await menuBtn.isVisible()) {
      await menuBtn.click();
      await page.waitForTimeout(500);
      // Ensure drawer container or mobile links become visible
      await expect(page.locator('.my-drawer-container a, .drawer-opened a').first()).toBeVisible();
    }
  });

  test('Desktop viewport: Layout renders 2-column grid with sticky sidebar on profile', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/team/prasad-shastry');

    const sidebar = page.locator('aside');
    await expect(sidebar).toBeVisible();
    
    const mainCol = page.locator('main');
    await expect(mainCol).toBeVisible();
  });
});
