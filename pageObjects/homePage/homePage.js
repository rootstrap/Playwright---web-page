const { expect } = require('@playwright/test');

const rootstrapLogo = ('Home')

async function checkHomePageTitle(page) {
    await page.goto('https://www.rootstrap.com/');
    await expect(page).toHaveTitle(/Rootstrap - Digital Product Agency/);
    await page.getByRole('button', { name: 'Accept' }).click(); 
    await page.getByLabel(rootstrapLogo).click();
    await expect(page).toHaveURL('https://www.rootstrap.com');
    await page.mouse.move(0, 100)
}

async function headerPages(page) {
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
}

async function letsTalkForm(page) {
    await page.goto('https://www.rootstrap.com/');

    const letsTalkLink = page.getByRole('link', { name: 'Let\'s Talk', exact: true });
    await expect(letsTalkLink).toBeVisible();
    await expect(letsTalkLink).toBeEnabled();
    await letsTalkLink.click();
  
    const firstNameField = page.getByLabel('Your first name*');
    await expect(firstNameField).toBeVisible();
    await expect(firstNameField).toBeEnabled();
    await firstNameField.fill('Juan');
    await firstNameField.press('Tab');
  
    const lastNameField = page.getByLabel('Your last name*');
    await expect(lastNameField).toBeVisible();
    await expect(lastNameField).toBeEnabled();
    await lastNameField.fill('Perez');
    await lastNameField.press('Tab');
  
    const emailField = page.getByLabel('Your email address*');
    await expect(emailField).toBeVisible();
    await expect(emailField).toBeEnabled();
    await emailField.fill('juanperez@gmail.com');
    await emailField.press('Tab');
  
    const phoneNumberField = page.getByLabel('Phone number*');
    await expect(phoneNumberField).toBeVisible();
    await expect(phoneNumberField).toBeEnabled();
    await phoneNumberField.fill('4444444444');
    await phoneNumberField.press('Tab');
  
    const heardAboutUsField = page.getByLabel('How did you hear about us?*');
    await expect(heardAboutUsField).toBeVisible();
    await expect(heardAboutUsField).toBeEnabled();
    await heardAboutUsField.fill('LinkedIn');
    await heardAboutUsField.press('Tab');
  
    const helpSection = page.locator('#Help-2');
    await expect(helpSection).toBeVisible();
    await helpSection.selectOption('Other'); 
    await helpSection.press('Tab');
  
    const projectDescriptionField = page.getByPlaceholder('Tell us about your project*');
    await expect(projectDescriptionField).toBeVisible();
    await expect(projectDescriptionField).toBeEnabled();
    await projectDescriptionField.fill('QA team');
    const submitButton = page.getByRole('button', { name: 'Send Request' });
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
}

async function usabilityTest(page) {
    await page.goto('https://www.rootstrap.com/');
    await page.getByRole('button', { name: 'Accept' }).click();
  
    const scrollToFeaturedProjectsLink = page.getByRole('link', { name: 'Scroll to featured projects' });
    await expect(scrollToFeaturedProjectsLink).toBeVisible(); 
    await scrollToFeaturedProjectsLink.click();
  
    const uxDesignLocator = page.locator('div').filter({ hasText: 'Design & User ExperienceUX' }).nth(1);
    await expect(uxDesignLocator).toBeVisible(); 
  
    const unleashYourOrganizationHeading = page.getByRole('heading', { name: 'Unleash your organization\'s' });
    await expect(unleashYourOrganizationHeading).toBeVisible(); 
  
    const whatsNewOurBlogHeading = page.getByRole('heading', { name: 'What\'s New? ‍Our Blog' });
    await expect(whatsNewOurBlogHeading).toBeVisible(); 
  
    const logosOverlayClickArea = page.locator('.c-logos-section-overlay__light');
    await expect(logosOverlayClickArea).toBeVisible(); 
  
    const contributeToOurMissionSection = page.locator('section').filter({ hasText: 'Contribute to Our MissionJoin' });
    await expect(contributeToOurMissionSection).toBeVisible(); 
  
    const contributeToOurMissionHeading = page.getByRole('heading', { name: 'Contribute to Our Mission' });
    await expect(contributeToOurMissionHeading).toBeVisible(); 
  
    const openPositionsTextContainer = page.locator('.c-open-positions-text-container > .c-cta-wrapper');
    await expect(openPositionsTextContainer).toBeVisible(); 
    await openPositionsTextContainer.click();
}

async function socialMediaValidation(page) {
    await page.goto('https://www.rootstrap.com/');
    await page.getByRole('button', { name: 'Accept' }).click(); 
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
}

module.exports = { checkHomePageTitle, headerPages, letsTalkForm, usabilityTest, socialMediaValidation };
