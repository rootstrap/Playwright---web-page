// @ts-check
const { test, expect } = require('@playwright/test');
const rootstrapLogo = ('Home')

test('has title', async ({ page }) => {
  await page.goto('https://www.rootstrap.com/');
  await expect(page).toHaveTitle(/Rootstrap - Digital Product Agency/);
  await page.getByLabel(rootstrapLogo).click();
  await expect(page).toHaveURL('https://www.rootstrap.com');
  await page.mouse.move(0, 100);
  //await expect(page.getByLabel(rootstrapLogo, {})).toHaveURL('https://www.rootstrap.com');
});



