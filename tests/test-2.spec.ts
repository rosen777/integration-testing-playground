import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/secret-menu');
  await page.getByRole('link', { name: 'Secret Menu' }).click();
  const restaurantSelect = page.getByRole('combobox', { name: 'Restaurant' });
  await restaurantSelect.selectOption('Jack In The Box');
  const table = page.getByText(
    'Secret Menu Items (Download) Minimum Rating: 1 Restaurant AllChick-fil-AMcDonald',
  );

  await expect(table).toHaveScreenshot({
    maxDiffPixels: 100,
  });
});
