const { test, } = require('@playwright/test');
const HomePage = require('../pageObjects/homePage/homePage');


test.describe('Home section', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('Check Home Page Title', async ({ page }) => {
    await homePage.checkHomePageTitle();
  });

  test('Header Pages', async ({ page }) => {
    await homePage.headerPages();
  });

  test('Let\'s Talk Form', async ({ page }) => {
    await homePage.letsTalkForm();
  });

  test('Usability Test', async ({ page }) => {
    await homePage.usabilityTest();
  });

  test('Social Media Validation', async ({ page }) => {
    await homePage.socialMediaValidation();
  });

  test('Expertise services page', async ({ page }) => {
    await homePage.checkHomePageTitle();
    await homePage.expertisePage();
  });
});



