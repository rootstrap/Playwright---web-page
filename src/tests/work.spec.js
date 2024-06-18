const { test, } = require('@playwright/test');
const workPage = require('../pageObjects/workPage/ourWorkPage')


test.describe('Study Cases', () => {
  let WorkPage;

  test.beforeEach(async ({ page }) => {
    WorkPage = new workPage(page);
  });

  test('Master Class - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.masterClassStudyCase();
  });
  test('Emeritus - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.emeritusStudyCase();

  });
  test('Livestock Health - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.liveStockStudyCase();

  });
  test('Madison Reed - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.madisonReedStudyCase();

  });

  test('Eye Level learning - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.eyeLevelStudyCase();

  });

  test('Fuzzy - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.fuzzyStudyCase();
  });

  test('The farmers dog - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.farmersDogStudyCase();
  });

  test('Blidsy - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.blidsyStudyCase();
  });

  test('Hatch Coding - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.hatchCodingStudyCase();
  });

  test('EXI - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.exiStudyCase();
  });

  test('Doorspace - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.doorSpaceStudyCase();
  });

  test('Non profit - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.nonProfitStudyCase();
  });

  test('Summum - Study Case', async ({ page }) => {
    await WorkPage.checkWorkPageTitle();
    await WorkPage.summumStudyCase();
  });
});



