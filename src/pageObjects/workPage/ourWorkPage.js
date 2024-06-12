const { expect } = require('@playwright/test');

class workPage {
  constructor(page) {
    this.page = page;
  }
  async checkHomePageTitle() {
    await this.#gotoWorkPage();
    await this.#acceptCookies();
  }

  async #gotoWorkPage() {
    await this.page.goto('https://rs2-0-1.webflow.io/our-work');
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/our-work');
  }

  async #acceptCookies() {
    await this.page.getByRole('button', { name: 'Accept' }).click();
  }

  async masterClassStudyCase(){
    await this.page.getByRole('link', { name: 'MasterClass MasterClass A' }).click();
    await this.#acceptCookies();
    await expect(this.page.getByRole('img', { name: 'Thumbnails of various classes'})).toBeVisible()
    await expect(this.page.getByRole('heading', { name: 'Masterclass', exact: true  })).toBeVisible()
    await expect(this.page.getByRole('heading', { name: 'Services Provided'  })).toBeVisible()
    await expect(this.page.getByText('Project Type')).toBeVisible()
    await expect(this.page.getByText('Industry')).toBeVisible();
    await expect(this.page.getByText('Staff Augmentation')).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Education$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Streaming$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: '- Present' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The Team' })).toBeVisible();
    await expect(this.page.getByText('Product Designers')).toBeVisible();
    await expect(this.page.getByText('Android Developers')).toBeVisible();
    await expect(this.page.getByText('iOS Developers')).toBeVisible();
    await expect(this.page.getByText('Web Developers')).toBeVisible();
    await expect(this.page.getByText('Roku/TV Developers')).toBeVisible();
    await expect(this.page.getByText('QA Analysts')).toBeVisible();
    await expect(this.page.getByText('Scrum Master')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'About the Client' })).toBeVisible();
    await expect(this.page.getByText('MasterClass is a streaming')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '“We don\'t treat them like an' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Helping MasterClass build new' })).toBeVisible();
    await expect(this.page.getByText('Masterclass needed to scale')).toBeVisible();
    await expect(this.page.getByText('Rootstrap emerged as the ideal partner, combining common values, deep technical')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Image of a mobile phone' }).first()).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Elevates Front-End' })).toBeVisible();
    await expect(this.page.getByText('Our team seamlessly')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Multiple mobile mockups' })).toBeVisible();
    await expect(this.page.getByText('Throughout our partnership,')).toBeVisible();
    await expect(this.page.getByText('We assisted MasterClass in')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'In 2021, we supported' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Accelerated Growth During' })).toBeVisible();
    await expect(this.page.getByText('The COVID pandemic produced')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Key Technologies Used' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Mobile & TV Technologies' })).toBeVisible();
    await expect(this.page.getByText('Native Android, Native iOS,')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Web Development' })).toBeVisible();
    await expect(this.page.getByText('ReactJS, NextJS, Typescript')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'DevOps Technologies' })).toBeVisible();
    await expect(this.page.getByText('Heroku, AWS, Nginx')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Backend Development' })).toBeVisible();
    await expect(this.page.getByText('Ruby on Rails')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Data Engineering' })).toBeVisible();
    await expect(this.page.getByText('Segment, Optimizel')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'More Projects' })).toBeVisible();
    await this.page.goto('https://rs2-0-1.webflow.io/our-work');


  }
}

module.exports = workPage;