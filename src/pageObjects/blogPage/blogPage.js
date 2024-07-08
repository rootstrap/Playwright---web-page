const { expect } = require('@playwright/test');

class BlogPage {
  constructor(page) {
    this.page = page;
  }

  async checkBlogPageTitle() {
    await this.#gotoBlogPage();
    await this.#acceptCookies();
    await expect(this.page).toHaveURL('https://rs2-0-1.webflow.io/blog');
  }

  async #gotoBlogPage() {
    await this.page.goto('https://rs2-0-1.webflow.io/blog');
  }

  async #acceptCookies() {
    await this.page.getByRole('button', { name: 'Accept' }).click();
  }

  async mainBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('AI / Machine Learning')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('AI / Machine Learning').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Agile')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Agile').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Blockchain')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Blockchain').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Data Services')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Data Services').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('DevOps')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('DevOps').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Development')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Development').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Marketing')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Marketing').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Product Design')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Product Design').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('QA / Testing')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('QA / Testing').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Security')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Security').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Soft Skills')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Soft Skills').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Software Architecture')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Software Architecture').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('AI / Machine Learning')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('AI / Machine Learning').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Agile')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Agile').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Blockchain')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Blockchain').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Data Services')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Data Services').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('DevOps')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('DevOps').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Development')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Development').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Marketing')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Marketing').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Product Design')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Product Design').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('QA / Testing')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('QA / Testing').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Security')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Security').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Soft Skills')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Soft Skills').click();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Software Architecture')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Software Architecture').click();
    await this.page.getByPlaceholder('I’m looking for…').click();
    await this.page.getByPlaceholder('I’m looking for…').fill('QA');
    await this.page.getByLabel('Form', { exact: true }).getByRole('img').click();
  }
  async aiBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('AI / Machine Learning')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('AI / Machine Learning').click();
    await expect(this.page.getByRole('link', { name: 'AI / Machine Learning Quick' })).toBeVisible();
    await this.page.getByRole('link', { name: 'AI / Machine Learning Quick' }).click();
    await expect(this.page.getByText('AI / Machine Learning')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Quick Guide for Sending' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'AI / Machine Learning Mastering Prompt Engineering: Essential Guidelines for' })).toBeVisible();
    await this.page.getByRole('link', { name: 'AI / Machine Learning Mastering Prompt Engineering: Essential Guidelines for' }).click();
    await expect(this.page.getByText('AI / Machine Learning')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Mastering Prompt Engineering' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'AI / Machine Learning iOS app' })).toBeVisible();
    await this.page.getByRole('link', { name: 'AI / Machine Learning iOS app' }).click();
    await expect(this.page.getByText('AI / Machine Learning')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'iOS app with AI: Automating' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'AI / Machine Learning How to Create an AI Agent Using LangChain and GPT' })).toBeVisible();
    await this.page.getByRole('link', { name: 'AI / Machine Learning How to Create an AI Agent Using LangChain and GPT' }).click();
    await expect(this.page.getByText('AI / Machine Learning')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How to Create an AI Agent' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }
  async agileBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Agile')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Agile').click();
    await expect(this.page.getByRole('link', { name: 'Agile Agile isn\'t just Scrum' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Agile Agile isn\'t just Scrum' }).click();
    await expect(this.page.getByText('Agile', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Agile isn\'t just Scrum' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Agile QA & Dev Teams in Scrum' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Agile QA & Dev Teams in Scrum' }).click();
    await expect(this.page.getByText('Agile', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'QA & Dev Teams in Scrum Cycles' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Agile Spillovers - How to' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Agile Spillovers - How to' }).click();
    await expect(this.page.getByText('Agile')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Spillovers - How to Deal with' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Agile The Importance of Agile' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Agile The Importance of Agile' }).click();
    await expect(this.page.getByText('Agile', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The Importance of Agile' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }

  async blockchainBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Blockchain')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Blockchain').click();
    await expect(this.page.getByRole('link', { name: 'Blockchain How QA Can Help' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Blockchain How QA Can Help' }).click();
    await expect(this.page.getByText('Blockchain', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How QA Can Help With' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Blockchain DevSecOps- What is' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Blockchain DevSecOps- What is' }).click();
    await expect(this.page.getByText('Blockchain')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'DevSecOps- What is it, and' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Blockchain DankSharding -' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Blockchain DankSharding -' }).click();
    await expect(this.page.getByText('Blockchain', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'DankSharding - What is it and' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Blockchain How to Create Your' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Blockchain How to Create Your' }).click();
    await expect(this.page.getByText('Blockchain')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How to Create Your Own DeFi' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }

  async dataServicesBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Data Services')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Data Services').click();
    await expect(this.page.getByRole('link', { name: 'Data Services How To' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Data Services How To' }).click();
    await expect(this.page.getByText('Data Services')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How To Effectively Utilize' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Data Services Experimenting' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Data Services Experimenting' }).click();
    await expect(this.page.getByText('Data Services')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Experimenting with Airflow to' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Data Services Data Samples' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Data Services Data Samples' }).click();
    await expect(this.page.getByText('Data Services')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Data Samples and error' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }

  async devopsBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('DevOps')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('DevOps').click();
    await expect(this.page.getByRole('link', { name: 'DevOps Transforming Taxation' })).toBeVisible();
    await this.page.getByRole('link', { name: 'DevOps Transforming Taxation' }).click();
    await expect(this.page.getByText('DevOps')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Transforming Taxation with' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'DevOps How to build a Social' })).toBeVisible();
    await this.page.getByRole('link', { name: 'DevOps How to build a Social' }).click();
    await expect(this.page.locator('div').filter({ hasText: /^DevOps$/ })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How to build a Social Network' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'DevOps What is Azure DevOps' })).toBeVisible();
    await this.page.getByRole('link', { name: 'DevOps What is Azure DevOps' }).click();
    await expect(this.page.getByText('DevOps', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'What is Azure DevOps and how' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'DevOps AWS DevOps - All you' })).toBeVisible();
    await this.page.getByRole('link', { name: 'DevOps AWS DevOps - All you' }).click();
    await expect(this.page.locator('div').filter({ hasText: /^DevOps$/ })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'AWS DevOps - All you need to' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }

  async developmentBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Development')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Development').click();
    await expect(this.page.getByRole('link', { name: 'Development Demystifying CQRS' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Development Demystifying CQRS' }).click();
    await expect(this.page.getByText('Development', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Demystifying CQRS: A' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Development How to Set Up' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Development How to Set Up' }).click();
    await expect(this.page.getByText('Development')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How to Set Up Material-UI (' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Development How to Understand' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Development How to Understand' }).click();
    await expect(this.page.getByText('Development', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How to Understand and Utilize' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Development Flutter vs React' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Development Flutter vs React' }).click();
    await expect(this.page.getByText('Development', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Flutter vs React Native: A' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }

  async marketingBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Marketing')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Marketing').click();
    await expect(this.page.getByRole('link', { name: 'Marketing Tech Talent' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Marketing Tech Talent' }).click();
    await expect(this.page.getByText('Marketing')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Tech Talent Shortage:' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Marketing How to Train Senior' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Marketing How to Train Senior' }).click();
    await expect(this.page.getByText('Marketing')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How to Train Senior iOS' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Marketing 8 Best EdTech Apps' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Marketing 8 Best EdTech Apps' }).click();
    await expect(this.page.getByText('Marketing', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '8 Best EdTech Apps | Top' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Marketing 8 Best Healthcare' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Marketing 8 Best Healthcare' }).click();
    await expect(this.page.getByText('Marketing')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Best Healthcare Apps for Patients | Top Mobile Apps in 2023' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }

  async productDesignBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Product Design')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Product Design').click();
    await expect(this.page.getByRole('link', { name: 'Product Design How Storytelling Turns Digital Designs into Emotion' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Product Design How Storytelling Turns Digital Designs into Emotion' }).click();
    await expect(this.page.getByText('Product Design', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How Storytelling Turns' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Product Design How Much' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Product Design How Much' }).click();
    await expect(this.page.getByText('Product Design', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How Much Coding Do Product' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Product Design What is' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Product Design What is' }).click();
    await expect(this.page.getByText('Product Design')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'What is Webflow? A' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Product Design Figma slowly' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Product Design Figma slowly' }).click();
    await expect(this.page.getByText('Product Design')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Figma slowly killing Master' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }

  async qaBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('QA / Testing')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('QA / Testing').click();
    await expect(this.page.getByRole('link', { name: 'QA / Testing Estimations in' })).toBeVisible();
    await this.page.getByRole('link', { name: 'QA / Testing Estimations in' }).click();
    await expect(this.page.getByText('QA / Testing')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Estimations in QA: some tips' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'QA / Testing Interruption' })).toBeVisible();
    await this.page.getByRole('link', { name: 'QA / Testing Interruption' }).click();
    await expect(this.page.getByText('QA / Testing')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Interruption Testing: What Is' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'QA / Testing QA Juniors –' })).toBeVisible();
    await this.page.getByRole('link', { name: 'QA / Testing QA Juniors –' }).click();
    await expect(this.page.getByText('QA / Testing')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'QA Juniors – Specialties' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'QA / Testing Getting Started' })).toBeVisible();
    await this.page.getByRole('link', { name: 'QA / Testing Getting Started' }).click();
    await expect(this.page.getByText('QA / Testing')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Getting Started with' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }

  async securityBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Security')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Security').click();
    await expect(this.page.getByRole('link', { name: 'Security How to start' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Security How to start' }).click();
    await expect(this.page.getByText('Security', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'How to start learning about' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Security HTTPS is not enough' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Security HTTPS is not enough' }).click();
    await expect(this.page.getByText('Security', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'HTTPS is not enough', exact: true })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await this.page.goBack()
    await expect(this.page.getByRole('link', { name: 'Security White or black hat?' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Security White or black hat?' }).click();
    await expect(this.page.getByText('Security', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'White or black hat?' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }

  async softSkillsBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Soft Skills')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Soft Skills').click();
    await expect(this.page.getByRole('link', { name: 'Soft Skills Hacks for' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Soft Skills Hacks for' }).click();
    await expect(this.page.getByText('Soft Skills')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Hacks for Interviewers: How' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }

  async softwareArchitectureBlogPage() {
    await expect(this.page.getByRole('heading', { name: 'Get great news and insight' })).toBeVisible();
    await expect(this.page.getByLabel('Form', { exact: true }).getByText('Software Architecture')).toBeVisible();
    await this.page.getByLabel('Form', { exact: true }).getByText('Software Architecture').click();
    await expect(this.page.getByRole('link', { name: 'Software Architecture' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Software Architecture' }).click();
    await expect(this.page.getByText('Software Architecture')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Unleashing the Power of' })).toBeVisible();
    await expect(this.page.locator('.c-blog-post-image')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Back to Blog' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Back to Blog' }).click();
  }
}

module.exports = BlogPage;