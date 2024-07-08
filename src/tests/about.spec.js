const { test, } = require('@playwright/test');
const AboutPage = require('../pageObjects/aboutPage/aboutPage');


test.describe('About section', () => {
  let aboutPage;

  test.beforeEach(async ({ page }) => {
    aboutPage = new AboutPage(page);
  });

  test('Check About Page Title', async ({ page }) => {
    await aboutPage.checkAboutPageTitle();
  });

  test('Check About Page components', async ({ page }) => {
    await aboutPage.checkAboutPageTitle();
    await aboutPage.frontPageAbout();
    await aboutPage.coreValuesAbout();
    await aboutPage.mapAbout();
  });
});
