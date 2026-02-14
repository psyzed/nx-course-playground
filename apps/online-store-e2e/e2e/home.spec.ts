import { test, expect } from '@playwright/test';

test('has required elements', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h1').innerText()).toContain(
    'Online Store | Courses',
  );
});
