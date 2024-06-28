const { test, } = require('@playwright/test');
const CareersPage = require('../pageObjects/careerPage/careersPage');
const { faker } = require('@faker-js/faker');


test.describe('Home Tests', () => {
  let careersPage;

  test.beforeEach(async ({ page }) => {
    careersPage = new CareersPage(page);
  });

  test('Check Careers Page Title', async ({ page }) => {
    await careersPage.checkCareersPageTitle();
  });

  test('Check Careers Components', async ({ page }) => {
    await careersPage.checkCareersPageTitle();
    await careersPage.frontPageCareer();
    await careersPage.availablePositionsCareer();
  });

  test('Check Careers Talent Community', async ({ page }) => {
    await careersPage.checkCareersPageTitle();
    await careersPage.talentCommunityComponent();
  });

});
