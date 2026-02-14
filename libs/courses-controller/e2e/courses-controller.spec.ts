import { test, expect } from '@playwright/test';

test('has title', async ({ request }) => {
  const response = await request.get('/api/courses');

  expect(response.ok()).toBe(true);
  const courses = await response.json();
  expect(courses.length).toBeGreaterThan(0);
});
