const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async checkHomePageTitle() {
    await this.#gotoHomePage();
    await this.#acceptCookies();
    await this.#clickLogo();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io');
    await this.page.mouse.move(0, 100);
  }

  async headerPages() {
    await this.#gotoHomePage();
    await this.#acceptCookies();
    await this.#navigateThroughHeader();
  }

  async letsTalkForm() {
    await this.#gotoHomePage();
    await this.#acceptCookies();
    const letsTalkLink = this.page.getByRole('link', { name: "Let's Talk", exact: true });
    await expect(letsTalkLink).toBeVisible();
    await expect(letsTalkLink).toBeEnabled();
    await letsTalkLink.click();

    await this.#fillForm();
  }

  async usabilityTest() {
    await this.#gotoHomePage();
    await this.#acceptCookies();

    const scrollToFeaturedProjectsLink = this.page.getByRole('link', { name: 'Scroll to featured projects' });
    await expect(scrollToFeaturedProjectsLink).toBeVisible();
    await scrollToFeaturedProjectsLink.click();

    const uxDesignLocator = this.page.locator('div').filter({ hasText: 'Design & User ExperienceUX' }).nth(1);
    await expect(uxDesignLocator).toBeVisible();

    const unleashYourOrganizationHeading = this.page.getByRole('heading', { name: "Unleash your organization's" });
    await expect(unleashYourOrganizationHeading).toBeVisible();

    const whatsNewOurBlogHeading = this.page.getByRole('heading', { name: "What's New? ‍Our Blog" });
    await expect(whatsNewOurBlogHeading).toBeVisible();

    const logosOverlayClickArea = this.page.locator('.c-logos-section-overlay__light');
    await expect(logosOverlayClickArea).toBeVisible();

    const contributeToOurMissionSection = this.page.locator('section').filter({ hasText: 'Contribute to Our MissionJoin' });
    await expect(contributeToOurMissionSection).toBeVisible();

    const contributeToOurMissionHeading = this.page.getByRole('heading', { name: 'Contribute to Our Mission' });
    await expect(contributeToOurMissionHeading).toBeVisible();

    const openPositionsTextContainer = this.page.locator('.c-open-positions-text-container > .c-cta-wrapper');
    await expect(openPositionsTextContainer).toBeVisible();
    await openPositionsTextContainer.click();
  }

  async socialMediaValidation() {
    await this.#gotoHomePage();
    await this.#acceptCookies();

    await this.#validateSocialMediaLink('LinkedIn', 'https://www.linkedin.com/company/rootstrap-it/');
    await this.#validateSocialMediaLink('Dribbble', 'https://dribbble.com/rootstrap/');
    await this.#validateSocialMediaLink('Twitter', 'https://twitter.com/rootstrapinc');
    await this.#validateSocialMediaLink('Facebook', 'https://www.facebook.com/rootstrap');
    await this.#validateSocialMediaLink('YouTube', 'https://www.youtube.com/channel/UCBT78C8IFU2deXoqEEMGubg');
    await this.#validateSocialMediaLink('Instagram', 'https://www.instagram.com/rootstrap/');

    await expect(this.page.getByText('info@rootstrap.com')).toBeVisible();
    await expect(this.page.getByText('© Rootstrap. All Rights Reserved.')).toBeVisible();
    await this.page.getByText('Privacy Policy').click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/privacy-policy');
  }

  async #gotoHomePage() {
    await this.page.goto('https://rs2-0-1.webflow.io/');
  }

  async #acceptCookies() {
    await this.page.getByRole('button', { name: 'Accept' }).click();
  }

  async #clickLogo() {
    await this.page.getByLabel('Home').click();
  }

  async #navigateThroughHeader() {
    await expect(this.page.getByLabel('Home')).toBeVisible();
    await this.page.getByLabel('Home').click();
    await expect(this.page).toHaveURL("https://rs2-0-1.webflow.io");
    await this.page.getByRole('link', { name: 'Work' }).click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/our-work');
    await this.page.getByRole('link', { name: 'About', exact:true}).click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/about');
    await this.page.getByRole('link', { name: 'Careers' }).click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/careers');
    await this.page.getByRole('link', { name: 'Blog' }).click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/blog');
    await this.page.getByRole('link', { name: "Let's Talk", exact: true }).click();
    await this.page.getByRole('link', { name: 'Expertise' }).click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/#services');
  }

  async #fillForm() {
    const firstNameField = this.page.getByLabel('Your first name*');
    await expect(firstNameField).toBeVisible();
    await expect(firstNameField).toBeEnabled();
    await firstNameField.fill('Juan');
    await firstNameField.press('Tab');

    const lastNameField = this.page.getByLabel('Your last name*');
    await expect(lastNameField).toBeVisible();
    await expect(lastNameField).toBeEnabled();
    await lastNameField.fill('Perez');
    await lastNameField.press('Tab');

    const emailField = this.page.getByLabel('Your email address*');
    await expect(emailField).toBeVisible();
    await expect(emailField).toBeEnabled();
    await emailField.fill('juanperez@gmail.com');
    await emailField.press('Tab');

    const phoneNumberField = this.page.getByLabel('Phone number*');
    await expect(phoneNumberField).toBeVisible();
    await expect(phoneNumberField).toBeEnabled();
    await phoneNumberField.fill('4444444444');
    await phoneNumberField.press('Tab');

    const heardAboutUsField = this.page.getByLabel('How did you hear about us?*');
    await expect(heardAboutUsField).toBeVisible();
    await expect(heardAboutUsField).toBeEnabled();
    await heardAboutUsField.fill('LinkedIn');
    await heardAboutUsField.press('Tab');

    const helpSection = this.page.locator('#Help-2');
    await expect(helpSection).toBeVisible();
    await helpSection.selectOption('Other');
    await helpSection.press('Tab');

    const projectDescriptionField = this.page.getByPlaceholder('Tell us about your project*');
    await expect(projectDescriptionField).toBeVisible();
    await expect(projectDescriptionField).toBeEnabled();
    await projectDescriptionField.fill('QA team');
    const submitButton = this.page.getByRole('button', { name: 'Send Request' });
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  }

  async #validateSocialMediaLink(name, expectedUrl) {
    const link = await this.page.getByRole('link', { name }).getAttribute('href');
    await expect(link).toBe(expectedUrl);
  }
}

module.exports = HomePage;
