// @ts-check
const { test, expect } = require('@playwright/test');
const rootstrapLogo = ('Home')

test('has title', async ({ page }) => {
  await page.goto('https://www.rootstrap.com/');
  await expect(page).toHaveTitle(/Rootstrap - Digital Product Agency/);
  await page.getByLabel(rootstrapLogo).click();
  await expect(page).toHaveURL('https://www.rootstrap.com');
  await page.mouse.move(0, 100);
});

test('Header and footer', async ({ page }) => {
  await page.goto('https://www.rootstrap.com/');
  await expect(page.getByLabel('Home')).toBeVisible();
  await page.getByLabel('Home').click();
  await expect(page).toHaveURL('https://www.rootstrap.com/'); 
  await page.getByRole('button', { name: 'Accept' }).click(); 
  await page.getByRole('link', { name: 'Work' }).click();
  await expect(page).toHaveURL('https://www.rootstrap.com/our-work');
  await page.getByRole('link', { name: 'Expertise' }).click();
  await expect(page).toHaveURL('https://www.rootstrap.com/#services');
  await page.getByLabel('About').click();
  await expect(page).toHaveURL('https://www.rootstrap.com/how-we-do-it');
  await page.getByRole('link', { name: 'Careers' }).click();
  await expect(page).toHaveURL('https://www.rootstrap.com/careers');
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveURL('https://www.rootstrap.com/blog');
  await page.getByRole('link', { name: 'Let\'s Talk', exact: true }).click();
 
  await expect(page.getByText('info@rootstrap.com')).toBeVisible();
  await expect(page.getByText('© Rootstrap. All Rights Reserved.')).toBeVisible();
  await page.getByText('Privacy Policy').click();
  await expect(page).toHaveURL('https://www.rootstrap.com/privacy-policy');
});






