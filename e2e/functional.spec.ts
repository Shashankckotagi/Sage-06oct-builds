import { test, expect } from '@playwright/test';

test.describe('Functional Testing', () => {
  test('Homepage mounts with main navigation and hero sections', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/SAGE/);
    await expect(page.locator('text=Shastry Associates').first()).toBeVisible();
    await expect(page.locator('text=Applied Electromagnetics').first()).toBeVisible();
  });

  test('Faculty directory loads and allows clicking to individual profile', async ({ page }) => {
    await page.goto('/team');
    await expect(page).toHaveTitle(/Faculty & Associates/);

    // Click on Dr. Prasad Shastry card
    const shastryCard = page.locator('text=Dr. Prasad Shastry').first();
    await expect(shastryCard).toBeVisible();
    await shastryCard.click();

    // Assert URL changed to /team/prasad-shastry
    await expect(page).toHaveURL(/\/team\/prasad-shastry/);
    await expect(page.locator('h1, h2').filter({ hasText: 'Dr. Prasad Shastry' }).first()).toBeVisible();
    await expect(page.locator('text=Biography')).toBeVisible();
  });

  test('Adjacent specialist navigation allows moving between faculty members', async ({ page }) => {
    await page.goto('/team/prasad-shastry');
    
    // Check Next Specialist button
    const nextLink = page.locator('nav[aria-label="Adjacent faculty navigation"] a').last();
    await expect(nextLink).toBeVisible();
    await nextLink.click();

    // URL should change to the adjacent member
    await expect(page).not.toHaveURL(/\/team\/prasad-shastry/);
    await expect(page.locator('text=Biography')).toBeVisible();
  });
});
