// @ts-check
const { test, expect } = require('@playwright/test');
const rootstrapLogo = ('Home')

test('has title', async ({ page }) => {
  await page.goto('https://www.rootstrap.com/');
  await expect(page).toHaveTitle(/Rootstrap - Digital Product Agency/);
  await page.getByRole('button', { name: 'Accept' }).click(); 
  await page.getByLabel(rootstrapLogo).click();
  await expect(page).toHaveURL('https://www.rootstrap.com');
  await page.mouse.move(0, 100);
});

test('Header pages', async ({ page }) => {
  await page.goto('https://www.rootstrap.com/');
  await page.getByRole('button', { name: 'Accept' }).click(); 
  await expect(page.getByLabel('Home')).toBeVisible();
  await page.getByLabel('Home').click();
  await expect(page).toHaveURL('https://www.rootstrap.com/'); 
  await page.getByRole('link', { name: 'Work' }).click();
  await expect(page).toHaveURL('https://www.rootstrap.com/our-work');
  await page.getByRole('link', { name: 'Expertise' }).click();
  await expect(page).toHaveURL('https://www.rootstrap.com/#services');
  await page.getByLabel('About').click();
  await expect(page).toHaveURL('https://www.rootstrap.com/how-we-do-it');
  await page.getByRole('link', { name: 'Careers' }).click();
  await expect(page).toHaveURL('https://www.rootstrap.com/careers');
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveURL('https://www.rootstrap.com/blog');
  await page.getByRole('link', { name: 'Let\'s Talk', exact: true }).click();
})




test('Social Media Footer links', async ({ page }) => {
  await page.goto('https://www.rootstrap.com/');
  await page.getByRole('button', { name: 'Accept' }).click(); 
  // LinkedIn
  const linkedInLink = await page.getByRole('link', { name: 'LinkedIn' }).getAttribute('href');
  await expect(linkedInLink).toBe('https://www.linkedin.com/company/rootstrap-it/');

  //Dribble
  const dribbleLink = await page.getByRole('link', { name: 'Dribbble' }).getAttribute('href');
  await expect(dribbleLink).toBe('https://dribbble.com/rootstrap/');

  // Twitter
  const twitterLink = await page.getByRole('link', { name: 'Twitter' }).getAttribute('href');
  await expect(twitterLink).toBe('https://twitter.com/rootstrapinc');

  // Facebook
  const facebookLink = await page.getByRole('link', { name: 'Facebook' }).getAttribute('href');
  await expect(facebookLink).toBe('https://www.facebook.com/rootstrap');

  // YouTube
  const youtubeLink = await page.getByRole('link', { name: 'YouTube' }).getAttribute('href');
  await expect(youtubeLink).toBe('https://www.youtube.com/channel/UCBT78C8IFU2deXoqEEMGubg');

  // Instagram
  const instagramLink = await page.getByRole('link', { name: 'Instagram' }).getAttribute('href');
  await expect(instagramLink).toBe('https://www.instagram.com/rootstrap/');

  await expect(page.getByText('info@rootstrap.com')).toBeVisible();
  await expect(page.getByText('© Rootstrap. All Rights Reserved.')).toBeVisible();
  await page.getByText('Privacy Policy').click();
  await expect(page).toHaveURL('https://www.rootstrap.com/privacy-policy');
});


