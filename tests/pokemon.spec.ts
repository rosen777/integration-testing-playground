import { test, expect } from '@playwright/test';

test('it has an input for pokemans', async ({ page }) => {
  await page.goto('/pokemon-search');
  const searchInput = page.getByPlaceholder('Sear');
  await searchInput.type('Pika');
  page.getByRole('link', {
    name: 'Pikachu',
  });
});
