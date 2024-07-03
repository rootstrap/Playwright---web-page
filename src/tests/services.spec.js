const { test, } = require('@playwright/test');
const HomePage = require('../pageObjects/homePage/homePage');
const ServicesPage = require('../pageObjects/servicesPage/servicesPage')

  test.describe('Home Tests', () => {
    let homePage;
    let servicePage;
  
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        servicePage = new ServicesPage(page);
      });
  
    test('Design & User Experience service', async ({ page }) => {
        await homePage.checkHomePageTitle();
        await homePage.designExperienceService();
        await servicePage.designExperienceSection();
    });
  
    test('Product Strategy service', async ({ page }) => {
        await servicePage.gotoServicePage();
        await homePage.productStrategyService();
        await servicePage.productSection();
    });
  
    test('Web & Mobile development service', async ({ page }) => {
        await servicePage.gotoServicePage();
        await homePage.webDevelopmentService();
        await servicePage.webDevelopmentSection();
    });
  
    test('Cloud & Devops Service', async ({ page }) => {
        await servicePage.gotoServicePage();
        await homePage.cloudDevopsService();
        await servicePage.cloudDevopsSection();
    });
  
    test('AI Service', async ({ page }) => {
        await servicePage.gotoServicePage();
        await homePage.aiService();
        await servicePage.aiSection();
    });
  
    test('Data services', async ({ page }) => {
        await servicePage.gotoServicePage();
        await homePage.dataService();
        await servicePage.dataServiceSection();
        
    });

    test('QA & Automation services', async ({ page }) => {
        await servicePage.gotoServicePage();
        await homePage.qualityService();
        await servicePage.qaSection();  
    });
  });
  