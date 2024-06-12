const { test, } = require('@playwright/test');
const HomePage = require('../pageObjects/homePage/homePage');
const workPage = require('../pageObjects/workPage/ourWorkPage')


test.describe('Study Cases', () => {
  let WorkPage;

  test.beforeEach(async ({ page }) => {
    WorkPage = new workPage(page);
  });

  test('Master Class - Study Case', async ({ page }) => {
    await WorkPage.checkHomePageTitle();
    await WorkPage.masterClassStudyCase();
  });
  test('Emeritus - Study Case', async ({ page }) => {

  });
  test('Livestock Health - Study Case', async ({ page }) => {

  });
  test('Madison Reed - Study Case', async ({ page }) => {

  });
});



