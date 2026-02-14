import { test, expect } from '@playwright/test';

test('has all courses button', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('.buttons a.primary').innerText()).toContain(
    'See All Courses',
  );
});
