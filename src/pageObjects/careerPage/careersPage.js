const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

class CareersPage {
  constructor(page) {
    this.page = page;
  }

  async checkCareersPageTitle() {
    await this.#gotoCareersPage();
    await this.#acceptCookies();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/careers');
  }

  async #gotoCareersPage() {
    await this.page.goto('https://rs2-0-1.webflow.io/careers');
  }

  async #acceptCookies() {
    await this.page.getByRole('button', { name: 'Accept' }).click();
  }

  async scrollAndCheckVisibility(page, selector) {
    const element = page.locator(selector);
    await element.scrollIntoViewIfNeeded();
    await expect(element).toBeVisible();
  }
  async frontPageCareer() {
    await expect(this.page.getByRole('heading', { name: 'We Grow Together!' })).toBeVisible();
    await expect(this.page.getByText('If you want to level up your')).toBeVisible();
    await expect(this.page.getByText('If you want to level up your')).toHaveText('If you want to level up your career at a company in constant motion, you’ve come to the right place.');
    await expect(this.page.getByRole('img', { name: 'Four coworkers, smiling and' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'We believe in fostering a' })).toBeVisible();
    await expect(this.page.getByText('We encourage every member of')).toBeVisible();
    await expect(this.page.getByText('We encourage every member of')).toHaveText('We encourage every member of our team to propose new ideas and make important decisions. By empowering individuals to think and act as leaders, we create a dynamic and innovative environment that drives growth and success. We nurture talent.');
    await expect(this.page.getByRole('heading', { name: 'We aim to achieve the highest' })).toBeVisible();
    await expect(this.page.getByText('Our challenging projects')).toBeVisible();
    await expect(this.page.getByText('Our challenging projects')).toHaveText('Our challenging projects require excellent results. As a team, we embrace continuous improvement in all aspects of our work, from processes and capabilities to services. We seek self improvement. We strive as a team. We grow together.');
    await expect(this.page.getByRole('img', { name: 'Author\'s picture' })).toBeVisible();
    await expect(this.page.getByText('Rootstrap\'s commitment to')).toBeVisible();
    await expect(this.page.getByLabel('next slide')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Author\'s picture' })).toBeVisible();
    await expect(this.page.getByText('I joined RS as a web designer')).toBeVisible();
    await expect(this.page.getByLabel('previous slide')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Join our team and unlock your' })).toBeVisible();
    await this.scrollAndCheckVisibility(this.page, '[id="w-node-_1841f636-ad7f-3068-2e50-8e12f5b5b5d7-4fe11e28"]');
    await expect(this.page.getByRole('heading', { name: 'Growth and Development' })).toBeVisible();
    await expect(this.page.getByText('Reach your full potential')).toBeVisible();
    await expect(this.page.getByText('Reach your full potential')).toHaveText('Reach your full potential with training, mentorship, feedback program.');
    await expect(this.page.locator('#w-node-_06066c36-388c-45c6-d873-9183594b4aa1-4fe11e28 > .potential-icon')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Wellness' })).toBeVisible();
    await expect(this.page.getByText('Prioritize your well-being')).toBeVisible();
    await expect(this.page.getByText('Prioritize your well-being')).toHaveText('Prioritize your well-being with a comprehensive set of options for you.');
    await expect(this.page.locator('#w-node-c2435a18-79d3-b482-f1e3-87667afb0287-4fe11e28 > .potential-icon')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Find your own balance' })).toBeVisible();
    await expect(this.page.getByText('Achieve balance and')).toBeVisible();
    await expect(this.page.getByText('Achieve balance and')).toHaveText('Achieve balance and fulfillment with flexible work arrangements.');
    await expect(this.page.locator('#w-node-_9a353d7f-b29e-cbc4-2339-675bbdf4c03a-4fe11e28 > .potential-icon')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Team building' })).toBeVisible();
    await expect(this.page.getByText('Foster connections and')).toBeVisible();
    await expect(this.page.getByText('Foster connections and')).toHaveText('Foster connections and teamwork with opportunities for social events, team-building activities, and more.');
    await expect(this.page.locator('#w-node-bc689a87-56b1-765c-8f1d-e6db6abc0c77-4fe11e28 > .potential-icon')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Customized processes' })).toBeVisible();
    await expect(this.page.getByText('Receive prizes and')).toBeVisible();
    await expect(this.page.getByText('Receive prizes and')).toHaveText('Receive prizes and recognitions, while enjoying working with the latest technologies.');
    await expect(this.page.locator('#w-node-f5fbc4aa-6297-48e8-2355-4c676bdb8112-4fe11e28 > .potential-icon')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Digital empowerment' })).toBeVisible();
    await expect(this.page.getByText('Enjoy advanced digital tools')).toBeVisible();
    await expect(this.page.getByText('Enjoy advanced digital tools')).toHaveText('Enjoy advanced digital tools for improved collaboration and efficiency.');
}

async availablePositionsCareer() {
    await expect(this.page.getByRole('heading', { name: 'Having fun is a key part of' })).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'A spacious office room' })).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'A young woman with a bright' })).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'A group of coworkers in an' })).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Three young women at the' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'We believe that collaborative' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'We believe that collaborative' })).toHaveText('We believe that collaborative, close-knit teams can achieve the unthinkable.');
    await expect(this.page.locator('div').filter({ hasText: 'Are you up for' }).nth(3)).toBeVisible();
}

  async talentCommunityComponent() {
    await expect(this.page.getByRole('heading', { name: 'Talent' })).toBeVisible();
    await expect(this.page.locator('section').filter({ hasText: 'Talent Community!Subscribe to' }).getByRole('img').first()).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Community!' })).toBeVisible();
    await this.page.getByText('Subscribe to our community').click();
    const page1Promise = this.page.waitForEvent('popup');
      await this.page.getByRole('link', { name: 'Join the community' }).click();
      const page1 = await page1Promise;
      await expect(page1.getByLabel('First name*')).toBeVisible();
      await expect(page1.getByLabel('Last name*')).toBeVisible();
      await expect(page1.getByLabel('Email*')).toBeVisible();
      await expect(page1.getByLabel('Country*')).toBeVisible();
      await expect(page1.getByLabel('Jobtitle*')).toBeVisible();
      await expect(page1.getByLabel('Linkedin*')).toBeVisible();
      await expect(page1.getByRole('button', { name: 'Enviar' })).toBeVisible();
      
      // Generate random data using faker
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email();
      const jobTitle = faker.person.jobTitle();
      const linkedin = `https://www.linkedin.com/in/${faker.internet.userName()}`;
      const country = 'United States'; 
  
      await page1.getByLabel('First name*').fill(firstName);
      await page1.getByLabel('Last name*').fill(lastName);
      await page1.getByLabel('Email*').fill(email);
      await page1.getByLabel('Country*').selectOption({ label: country });
      await page1.getByLabel('Jobtitle*').fill(jobTitle);
      await page1.getByLabel('Linkedin*').fill(linkedin);
      await page1.getByRole('button', { name: 'Enviar' }).click();
  }

}

module.exports = CareersPage;