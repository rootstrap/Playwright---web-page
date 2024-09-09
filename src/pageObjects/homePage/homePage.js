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

  async designExperienceService() {
    await this.page.getByRole('link', { name: 'Expertise' }).click();
    await expect(this.page.getByRole('link', { name: 'Expertise' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Our Expertise' })).toBeVisible();
    await expect(this.page.locator('.expertise-image').first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Design & User Experience$/ })).toBeVisible();
    await expect(this.page.getByText('UX Research')).toBeVisible();
    await expect(this.page.getByText('UX /UI')).toBeVisible();
    await expect(this.page.getByText('User-Centered Design')).toBeVisible();
    await expect(this.page.getByText('Accessibility & ADA Compliance')).toBeVisible();
    await expect(this.page.getByText('Visual design systems')).toBeVisible();
    await expect(this.page.locator('.learn-more-container').first()).toBeVisible();
    await this.page.locator('.learn-more-container').first().click();
  }

  async productStrategyService() {
    await this.page.getByRole('heading', { name: 'Product Strategy' }).click();
    await expect(this.page.getByRole('heading', { name: 'Product Strategy' })).toBeVisible();
    await expect(this.page.getByText('Product Strategy', { exact: true })).toBeVisible();
    await expect(this.page.getByText('User research')).toBeVisible();
    await expect(this.page.getByText('Strategic planning and')).toBeVisible();
    await expect(this.page.getByText('User-Centered Product')).toBeVisible();
    await expect(this.page.locator('#w-node-ac7ac44a-413f-bac6-41f0-ab905bdb2ddf-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container')).toBeVisible();
    await this.page.locator('#w-node-ac7ac44a-413f-bac6-41f0-ab905bdb2ddf-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container').click();
  }

  async webDevelopmentService() {
    await this.page.getByText('Web & MobileDevelopmentWeb &').click();
    await expect(this.page.getByRole('heading', { name: 'Web & Mobile Development' })).toBeVisible();
    await expect(this.page.getByText('Web & Mobile Development')).toBeVisible();
    await expect(this.page.getByText('Backend and APIs')).toBeVisible();
    await expect(this.page.getByText('Code audit')).toBeVisible();
    await expect(this.page.getByText('Technical product discovery')).toBeVisible();
    await expect(this.page.getByText('Load & Performance Tests')).toBeVisible();
    await expect(this.page.getByText('QA Testing')).toBeVisible();
    await expect(this.page.locator('#w-node-bd493d5b-208e-dbf0-1693-7c2abad28b85-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container')).toBeVisible();
    await this.page.locator('#w-node-bd493d5b-208e-dbf0-1693-7c2abad28b85-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container').click();
  }

  async cloudDevopsService() {
    await this.page.getByText('Cloud &DevOpsCloud').click();
    await expect(this.page.getByRole('heading', { name: 'Cloud & DevOps' })).toBeVisible();
    await expect(this.page.getByText('Cloud Consulting')).toBeVisible();
    await expect(this.page.getByText('Cloud infrastructure')).toBeVisible();
    await expect(this.page.getByText('DevOps & CI/CD')).toBeVisible();
    await expect(this.page.getByText('DevSecOps')).toBeVisible();
    await expect(this.page.getByText('Cloud Migration & Process')).toBeVisible();
    await expect(this.page.locator('#w-node-a780b1c4-05c4-ef5c-530c-976dd7f45d7c-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container')).toBeVisible();
    await this.page.locator('#w-node-a780b1c4-05c4-ef5c-530c-976dd7f45d7c-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container').click();
  }

  async aiService() {
    await this.page.getByText('ArtificialIntelligenceNLPGenerative AIEnd-to-end ProjectsAI Product Strategy &').click();
    await expect(this.page.getByRole('heading', { name: 'Artificial Intelligence' })).toBeVisible();
    await expect(this.page.getByText('NLP')).toBeVisible();
    await expect(this.page.getByText('Generative AI')).toBeVisible();
    await expect(this.page.getByText('End-to-end Projects')).toBeVisible();
    await expect(this.page.getByText('AI Product Strategy &')).toBeVisible();
    await expect(this.page.getByText('AI Ethics')).toBeVisible();
    await expect(this.page.locator('#w-node-_590e5cee-006d-b551-5264-ea654e7b0a02-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container')).toBeVisible();
    await this.page.locator('#w-node-_590e5cee-006d-b551-5264-ea654e7b0a02-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container').click();
  }

  async dataService() {
    await this.page.getByText('DataServicesData Warehouse').click();
    await expect(this.page.getByRole('heading', { name: 'Data Services' })).toBeVisible();
    await expect(this.page.getByText('Data Warehouse Management')).toBeVisible();
    await expect(this.page.getByText('ETL (Extract, Transform, Load)')).toBeVisible();
    await expect(this.page.getByText('Data Integration,')).toBeVisible();
    await expect(this.page.getByText('Big Data Processing and Data')).toBeVisible();
    await expect(this.page.locator('#w-node-ac940572-72ff-2058-e19f-5505ed99a755-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container')).toBeVisible();
    await this.page.locator('#w-node-ac940572-72ff-2058-e19f-5505ed99a755-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container').click();
  }

  async qualityService() {
    await this.page.getByText('QualityAssuranceQA').click();
    await expect(this.page.getByText('QualityAssuranceQA')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Quality Assurance' })).toBeVisible();
    await expect(this.page.getByText('QA Audit')).toBeVisible();
    await expect(this.page.getByText('Accessibility Testing')).toBeVisible();
    await expect(this.page.getByText('Load and performance testing')).toBeVisible();
    await expect(this.page.getByText('QA Automation')).toBeVisible();
    await expect(this.page.locator('#w-node-_3a6023cc-b7ff-6e2f-6151-c0232c2537e5-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container')).toBeVisible();
    await this.page.locator('#w-node-_3a6023cc-b7ff-6e2f-6151-c0232c2537e5-4fe11dd0 > .expertise-title-container > div:nth-child(3) > .learn-more-container').click();
  }

  async expertisePage() {
    await this.designExperienceService()
    await this.#gotoHomePage();
    await this.productStrategyService()
    await this.#gotoHomePage();
    await this.webDevelopmentService()
    await this.#gotoHomePage();
    await this.cloudDevopsService()
    await this.#gotoHomePage();
    await this.aiService()
    await this.#gotoHomePage();
    await this.dataService()
    await this.#gotoHomePage();
    await this.qualityService()

  }

  async #navigateThroughHeader() {
    await expect(this.page.getByLabel('Home')).toBeVisible();
    await this.page.getByLabel('Home').click();
    await expect(this.page).toHaveURL("https://rs2-0-1.webflow.io");
    await this.page.getByRole('link', { name: 'Work', exact: true }).click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/our-work');
    await this.page.getByRole('link', { name: 'About', exact:true}).click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/about');
    await this.page.getByRole('link', { name: 'Careers' }).click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/careers');
    await this.page.getByRole('link', { name: 'Blog' }).click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/blog');
    await this.page.getByRole('link', { name: "Let's Talk", exact: true }).click();
    await this.page.getByRole('link', { name: 'Expertise' }).click();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/#expertise');
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
