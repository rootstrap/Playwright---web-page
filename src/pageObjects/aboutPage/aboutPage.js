const { expect } = require('@playwright/test');

class AboutPage {
  constructor(page) {
    this.page = page;
  }

  async checkAboutPageTitle() {
    await this.#gotoAboutPage();
    await this.#acceptCookies();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/about');
  }

  async #gotoAboutPage() {
    await this.page.goto('https://rs2-0-1.webflow.io/about');
  }

  async #acceptCookies() {
    await this.page.getByRole('button', { name: 'Accept' }).click();
  }
  async frontPageAbout() {
    await expect(this.page.getByRole('heading', { name: 'Calm, Steady Hands for the' })).toBeVisible();
    await expect(this.page.getByText('Since 2011, we\'ve navigated')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Our Product Is Our People.'  })).toBeVisible();
    await expect(this.page.getByText('We utilize the collective')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Our Goal Is Helping You' })).toBeVisible();
    await expect(this.page.getByText('We are a nearshore software')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'It\'s Simple. Technology' })).toBeVisible();
    await expect(this.page.getByText('At the heart of each')).toBeVisible();

  }
  async coreValuesAbout() {
    await expect(this.page.getByRole('heading', { name: 'Our Core Values nurture human' })).toBeVisible();
    await expect(this.page.getByText('Developed collaboratively in')).toBeVisible();
    await expect(this.page.getByText('Developed collaboratively in')).toHaveText('Developed collaboratively in partnership with our entire team, our values are irrefutable foundations for the company that guide how we think, live, and interact with each other and with our client partners.');
    await expect(this.page.getByRole('heading', { name: 'Growth Mindset'  })).toBeVisible();
    await expect(this.page.getByText('We seek to exceed')).toBeVisible();
    await expect(this.page.getByText('We seek to exceed')).toHaveText('We seek to exceed expectations in every facet of our work and choose courage over comfort.');
    await expect(this.page.getByRole('heading', { name: 'Caring' })).toBeVisible();
    await expect(this.page.getByText('We empathize with our')).toBeVisible();
    await expect(this.page.getByText('We empathize with our')).toHaveText('We empathize with our partners\' challenges and work tirelessly to find the best solutions.');
    await expect(this.page.getByRole('heading', { name: 'Adaptability' })).toBeVisible();
    await expect(this.page.getByText('We embrace change, are')).toBeVisible();
    await expect(this.page.getByText('We embrace change, are')).toHaveText('We embrace change, are constantly curious, and love feedback.');
    await expect(this.page.getByRole('heading', { name: 'Respect' })).toBeVisible();
    await expect(this.page.getByText('We engage in direct and')).toBeVisible();
    await expect(this.page.getByText('We engage in direct and')).toHaveText('We engage in direct and honest conversations to seek understanding and truth.');
    await expect(this.page.getByRole('heading', { name: 'Ownership' })).toBeVisible();
    await expect(this.page.getByText('We measure our own success by')).toBeVisible();
    await expect(this.page.getByText('We measure our own success by')).toHaveText('We measure our own success by the success of our clients and the products we build.');
  }
  async mapAbout() {
    await expect(this.page.getByRole('heading', { name: 'Our ‍‍Hubs' })).toBeVisible();
    await expect(this.page.getByText('Uruguay')).toBeVisible();
    await this.page.getByText('Uruguay').hover();
    await expect(this.page.getByText('Montevideo')).toBeVisible();
    await this.page.getByText('Montevideo').hover();
    await expect(this.page.getByText('Argentina')).toBeVisible();
    await this.page.getByText('Argentina').hover();
    await expect(this.page.getByText('Buenos Aires')).toBeVisible();
    await this.page.getByText('Buenos Aires').hover();
    await expect(this.page.getByText('Colombia')).toBeVisible();
    await this.page.getByText('Colombia').hover();
    await expect(this.page.getByText('Medellin')).toBeVisible();
    await this.page.getByText('Medellin').hover();
    await expect(this.page.getByText('USA')).toBeVisible();
    await this.page.getByText('USA').hover();
    await expect(this.page.getByText('Los Angeles')).toBeVisible();
    await this.page.getByText('Los Angeles').hover();
    await expect(this.page.getByText('Around the World')).toBeVisible();
    await this.page.getByText('Around the World').hover();
  }
}

module.exports = AboutPage;