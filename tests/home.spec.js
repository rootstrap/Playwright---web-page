const {checkHomePageTitle, headerPages, letsTalkForm, usabilityTest, socialMediaValidation } = require('../pageObjects/homePage/homePage');
const { test } = require('@playwright/test');


test('has title', async ({ page }) => {
  await checkHomePageTitle(page);
});

test('Header pages', async ({ page }) => {
  await headerPages(page);
})

test('Lets talk - Form', async ({ page }) => {
  await letsTalkForm(page);

});

test('Usability test', async ({ page }) => {
  await usabilityTest(page);
});



test('Social Media Footer links', async ({ page }) => {
  await socialMediaValidation(page);
});


