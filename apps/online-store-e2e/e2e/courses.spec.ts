import { test, expect } from '@playwright/test';

test('renders 5 lesssons', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('ul li').count()).toBe(3);
});
