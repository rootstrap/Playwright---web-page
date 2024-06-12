const { defineConfig } = require('@playwright/test');
const dotenv = require('dotenv');
const Browser = require('./src/browsers/BrowserManager');


dotenv.config({
  path: `./src/env/.env.stg`,
  override: true
});

module.exports = defineConfig({
  use: {
    browserName: Browser.type(process.env.BROWSER),
    launchOptions: {
      args: ['--disable-extensions', '--disable-plugins'],
      headless: process.env.CI ? true : false,
      // slowMo: 1000,
    },
    viewport: { width: 1600, height: 1200 },
    ignoreHTTPSErrors: true,
    screenshot: {
      mode: 'on',
      fullPage: true
    },
    video: 'retain-on-failure',
    trace: 'on'
  },

  // Change default timeout for each test
  timeout: 300000,
  // Change default timeout for assertion
  expect: {
    timeout: 40000
  },
  testDir: './src/tests',
  outputDir: './test-results/failure',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 1,
  reporter: process.env.CI ?
  reporter: 'html',
});



