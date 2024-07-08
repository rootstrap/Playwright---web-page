const { test, } = require('@playwright/test');
const BlogPage = require('../pageObjects/blogPage/blogPage');


test.describe('Blog section', () => {
  let blogPage;

  test.beforeEach(async ({ page }) => {
    blogPage = new BlogPage(page);
  });

  test('Check Blog Page Title', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.aiBlogPage()
  });

  test('Blog - AI Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.aiBlogPage();

  });

  test('Blog - Agile Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.agileBlogPage();

  });
  test('Blog - Blockchain Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.blockchainBlogPage();

  });
  test('Blog - Data service Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.dataServicesBlogPage();

  });
  test('Blog - Devops Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.devopsBlogPage();

  });
  test('Blog - Development Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.developmentBlogPage();

  });
  test('Blog - Marketing Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.marketingBlogPage();

  });
  test('Blog - Product design Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.productDesignBlogPage();

  });
  test('Blog - QA Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.qaBlogPage();

  });
  test('Blog - Security Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.securityBlogPage();

  });

  test('Blog - Soft Skills Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.softSkillsBlogPage();

  });

  test('Blog - Software Architecture Section', async ({ page }) => {
    await blogPage.checkBlogPageTitle();
    await blogPage.softwareArchitectureBlogPage();

  });
});
