const { expect } = require('@playwright/test');

class workPage {
  constructor(page) {
    this.page = page;
  }
  async checkWorkPageTitle() {
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
  async moreProjectsCaroussel() {
    await expect(this.page.getByRole('heading', { name: 'More Projects' })).toBeVisible();
    await this.page.getByLabel('previous slide').click();
    await this.page.getByLabel('next slide').click();
    await this.page.goto('https://rs2-0-1.webflow.io/our-work');
  }

  async scrollAndCheckVisibility(page, selector) {
    const element = page.locator(selector);
    await element.scrollIntoViewIfNeeded();
    await expect(element).toBeVisible();
  }
  

  async masterClassStudyCase(){
    await this.page.getByRole('link', { name: 'MasterClass MasterClass A' }).click();
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
    await this.moreProjectsCaroussel();
  }
  async emeritusStudyCase() {
    await this.page.getByRole('link', { name: 'Livestock Health Emeritus' }).click();
    await expect(this.page.getByText('Revamp and Ramp Up: How')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Thumbnails of various classes' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Services Provided' })).toBeVisible();
    await expect(this.page.getByText('Project Type')).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Web & Mobile Development$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Higher Education$/ }).first()).toBeVisible();
    await expect(this.page.getByText('Industry')).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Ed Tech$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: '- Onwards' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The Team', exact: true })).toBeVisible();
    await expect(this.page.getByText('Front end developers')).toBeVisible();
    await expect(this.page.getByText('Back end developers')).toBeVisible();
    await expect(this.page.getByText('QA Analyst')).toBeVisible();
    await expect(this.page.getByText('Web Developers')).toBeVisible();
    await expect(this.page.getByText('Project Manager')).toBeVisible();
    await expect(this.page.getByText('Product Manager')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Additional thumbnails of' })).toBeVisible();
    await this.page.mouse.move(0, 100);
    await expect(this.page.getByText('Emeritus is committed to')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'About the Client' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '"Rootstrap’s work has been' })).toBeVisible();
    await expect(this.page.getByText('always strive to broaden')).toBeVisible();
    await expect(this.page.getByText('Jesse Ocon VP of Engineering')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'A progressive transformation' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'A progressive transformation' }).locator('span')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Challenge' })).toBeVisible();
    await expect(this.page.getByText('Emeritus turned to Rootstrap')).toBeVisible();
    await expect(this.page.getByText('The Emeritus Enrollment')).toBeVisible();
    await expect(this.page.getByText('Our team was also tasked with')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'What we did?' })).toBeVisible();
    await this.scrollAndCheckVisibility(this.page, '[class="c-emeritus-phone-image _1"]');
    await this.scrollAndCheckVisibility(this.page, '[class="c-emeritus-phone-image _2"]');
    await this.scrollAndCheckVisibility(this.page, '[class="c-emeritus-phone-image _3"]');
    await expect(this.page.getByRole('heading', { name: 'We progressively grew the' })).toBeVisible();
    await expect(this.page.getByText('Developing new back and')).toBeVisible();
    await expect(this.page.getByText('ACHIVEMENTS')).toBeVisible();
    await expect(this.page.getByText('Implementing a single sign-on')).toBeVisible();
    await expect(this.page.getByText('Launching subdomains for')).toBeVisible();
    await this.page.mouse.move(0, 100);
    await expect(this.page.getByRole('img', { name: 'Multiple mobile mockups' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Establishing a scalable and' })).toBeVisible();
    await expect(this.page.getByText('RESULTS', { exact: true })).toBeVisible();
    await expect(this.page.getByText('+20%')).toBeVisible();
    await expect(this.page.getByText('Revenue', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Increase in revenue in just')).toBeVisible();
    await expect(this.page.getByText('+50%')).toBeVisible();
    await expect(this.page.getByText('Enrollment', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Increase in enrollments with')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Key Technologies Used' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Web Development' })).toBeVisible();
    await expect(this.page.getByText('ReactJS')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Backend Development' })).toBeVisible();
    await expect(this.page.getByText('Ruby on Rails', { exact: true })).toBeVisible(); 
    await this.moreProjectsCaroussel();
  }
  async liveStockStudyCase() {
    await this.page.getByRole('link', { name: 'Livestock Health Livestock' }).click();
    await expect(this.page.getByText('Leading the Future of')).toBeVisible();
    await expect(this.page.locator('section').filter({ hasText: 'Leading the Future of' }).locator('video')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Revolutionizing Livestock' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Services Provided' })).toBeVisible();
    await expect(this.page.getByText('Project Type')).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Proof of concept$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Health$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Veterinary$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Image diagnosis$/ }).first()).toBeVisible();
    await expect(this.page.getByText('Industry')).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: 'weeks' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The Team' })).toBeVisible();
    await expect(this.page.getByText('Data Scientist')).toBeVisible();
    await expect(this.page.getByText('ML Specialists')).toBeVisible();
    await expect(this.page.getByText('Product designer')).toBeVisible();
    await expect(this.page.getByText('Elevating Cattle Health')).toBeVisible();
    await expect(this.page.getByText('A cow breeding Uruguayan')).toBeVisible();
    await this.page.mouse.move(0, 100);
    await expect(this.page.getByRole('img', { name: 'Multiple mobile mockups' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Transforming Cattle Health' })).toBeVisible();
    await expect(this.page.getByText('Detecting Lameness early on')).toBeVisible();
    await expect(this.page.getByText('develop an Artificial')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The challenge' })).toBeVisible();
    await expect(this.page.getByText('To create an MVP solution,')).toBeVisible();
    await expect(this.page.getByText('Five-point sprecher system')).toBeVisible();
    await expect(this.page.getByText('Straight back')).toBeVisible();
    await expect(this.page.getByText('Long steps')).toBeVisible();
    await expect(this.page.getByText('Incurved back in movement')).toBeVisible();
    await expect(this.page.getByText('Short steps', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Incurved back').nth(1)).toBeVisible();
    await expect(this.page.getByText('Very short steps')).toBeVisible();
    await expect(this.page.getByText('Incurved back').nth(2)).toBeVisible();
    await expect(this.page.getByText('Obvious lameness')).toBeVisible();
    await expect(this.page.getByText('Very evident lameness')).toBeVisible();
    await expect(this.page.getByText('Lying down')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Addressing the needs of a cow' })).toBeVisible();
    await expect(this.page.getByText('researched and selected')).toBeVisible();
    await expect(this.page.getByText('Our goal was to detect and')).toBeVisible();
    await expect(this.page.locator('section').filter({ hasText: 'Addressing the needs of a cow' }).locator('video')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'This approach resulted in a' })).toBeVisible();
    await this.moreProjectsCaroussel();
  }

  async madisonReedStudyCase() {
    await this.page.getByRole('link', { name: 'Madison Reed Madison Reed' }).click();
    await expect(this.page.getByText('Madison Reed and Rootstrap')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Thumbnails of various classes' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Beyond the App: Impacting the' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Services Provided' })).toBeVisible();
    await expect(this.page.getByText('Project Type')).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Mobile App development$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: 'Mid 2020 - Q1' }).nth(3)).toBeVisible();
    await expect(this.page.getByText('Industry', { exact: true })).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Beauty$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Hair Care$/ }).first()).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The Team' })).toBeVisible();
    await expect(this.page.getByText('Project Manager')).toBeVisible();
    await expect(this.page.getByText('Product Designers')).toBeVisible();
    await expect(this.page.getByText('Product Managers')).toBeVisible();
    await expect(this.page.getByText('React Native developers')).toBeVisible();
    await expect(this.page.getByText('QA Analyst')).toBeVisible();
    await expect(this.page.getByText('Scrum Master')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'About the Client' })).toBeVisible();
    await expect(this.page.getByText('In the midst of the COVID')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '“This app is just like the' })).toBeVisible();
    await expect(this.page.getByText('Madison Reed\'s Client')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Madison Reed urgently needed' })).toBeVisible();
    await expect(this.page.getByText('There core business logic')).toBeVisible();
    await this.page.mouse.move(0, 100);
    await expect(this.page.getByRole('img', { name: 'Additional thumbnails of' })).toBeVisible();
    await expect(this.page.getByText('The Challenge')).toBeVisible();
    await expect(this.page.getByText('Madison Reed faced a')).toBeVisible();
    await expect(this.page.getByText('Rootstrap, their chosen')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Madison Reed\'s app' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Rootstrap began with a' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'This process focused on three' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Subscription Management' })).toBeVisible();
    await expect(this.page.getByText('Ecommerce solution for order')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Color Bar Companion' })).toBeVisible();
    await expect(this.page.getByText('An intuitive interface to')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Loyalty Membership' })).toBeVisible();
    await expect(this.page.getByText('Designed to foster brand')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Rootstrap developed iOS and' })).toBeVisible();
    await expect(this.page.getByText('Clear and regularly updated')).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  async eyeLevelStudyCase() {
    await expect(this.page.getByRole('heading', { name: 'All Projects' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Eye Level Learning Eye Level' }).click();
    await expect(this.page.getByText('Eye Level Learning &')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Thumbnails of various classes' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'EYE LEVEL LEARNING (AKA' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Services Provided' })).toBeVisible();
    await expect(this.page.getByText('Project Type')).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Managed Services$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Ed Tech$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: '- Present' }).nth(3)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The Team' })).toBeVisible();
    await expect(this.page.getByText('Product Designer')).toBeVisible();
    await expect(this.page.getByText('Frontend Developers')).toBeVisible();
    await expect(this.page.getByText('Backend Developers')).toBeVisible();
    await expect(this.page.getByText('QA Analyst')).toBeVisible();
    await expect(this.page.getByText('Designer', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Scrum Master')).toBeVisible();
    await expect(this.page.getByText('Project Manager')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'About the Client' })).toBeVisible();
    await expect(this.page.getByText('Eye Level Learning is a')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Smiling girl studying and' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Eye Level Learning set out to' })).toBeVisible();
    await this.scrollAndCheckVisibility(this.page, '[class="c-gradient-divider-container"]');
    await expect(this.page.getByRole('heading', { name: 'The main challenge they' })).toBeVisible();
    await expect(this.page.getByText('This required additional')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Mockup of two screens from' })).toBeVisible();
    await expect(this.page.getByText('Initially, tutors were not')).toBeVisible();
    await expect(this.page.getByText('Similarly, parents needed')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Mockup of two screens in the' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Given Rootstrap\'s experience' })).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Collection of diverse mockups' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'What we did?' })).toBeVisible();
    await expect(this.page.getByText('Eye Level Learning’s development work was managed in three phases, all targeted')).toBeVisible();
    await expect(this.page.getByText('Phase 1')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Building Revenue Streams' })).toBeVisible();
    await expect(this.page.getByText('The first phase of this')).toBeVisible();
    await expect(this.page.getByText('Phase 2')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Creating Personalized Content' })).toBeVisible();
    await expect(this.page.getByText('Milestone 2 had a few lofty')).toBeVisible();
    await expect(this.page.getByText('Phase 3')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Matching Students with Tutors' })).toBeVisible();
    await expect(this.page.getByText('The third phase was all about')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Key Technologies Used' })).toBeVisible();
    await expect(this.page.getByText('Mobile - React Native')).toBeVisible();
    await expect(this.page.getByText('Web Development - ReactJS')).toBeVisible();
    await expect(this.page.getByText('DevOps Technologies - Heroku')).toBeVisible();
    await expect(this.page.getByText('Backend Development - Ruby on')).toBeVisible();
    await expect(this.page.getByText('Database - Active Admin DB')).toBeVisible();
    


  }
  async fuzzyStudyCase() {
    await expect(this.page.getByRole('heading', { name: 'All Projects' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Fuzzy Fuzzy Making pet care'}).click();
    await expect(this.page.getByText('Fuzzy & Rootstrap: Making pet')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Thumbnails of various classes' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Fuzzy', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Services Provided' })).toBeVisible();
    await expect(this.page.getByText('Project Type')).toBeVisible();
    await expect(this.page.getByText('Industry', { exact: true })).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Embedded Teams$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: '-2023' }).nth(3)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Pet Food & Supplies$/ }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The Team' })).toBeVisible();
    await expect(this.page.getByText('Product Designers')).toBeVisible();
    await expect(this.page.getByText('Android Developers')).toBeVisible();
    await expect(this.page.getByText('iOS Developers')).toBeVisible();
    await expect(this.page.getByText('Web Developers')).toBeVisible();
    await expect(this.page.getByText('QA Analyst')).toBeVisible();
    await expect(this.page.getByText('Frontend Developers')).toBeVisible();
    await expect(this.page.getByText('Designer', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Smiling girl studying and' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'About the Client' })).toBeVisible();
    await expect(this.page.getByText('Fuzzy is a subscription-based')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The challenge' })).toBeVisible();
    await expect(this.page.getByText('Like many startups, Fuzzy has')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'What we did?' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'eCOMMM & WEB' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Selling Goods and Services' })).toBeVisible();
    await expect(this.page.getByText('Rootstrap was handed an')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'eCommerce Subscriptions' })).toBeVisible();
    await expect(this.page.getByText('As part of Fuzzy’s commitment')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Redesigning Academy, Fuzzy’s' })).toBeVisible();
    await expect(this.page.getByText('Rootstrap was tasked to')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'TELEHEALTH' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Building an Online Medical' })).toBeVisible();
    await expect(this.page.getByText('Rootstrap redesigned and')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Making Telemedicine' })).toBeVisible();
    await expect(this.page.getByText('The mobile app was a portal')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Empowering Internal Fuzzy Team' })).toBeVisible();
    await expect(this.page.getByText('The questionnaires were')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Collection of diverse mockups' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Key Technologies Used' })).toBeVisible();
    await expect(this.page.getByText('Mobile - Native Android,')).toBeVisible();
    await expect(this.page.getByText('eCommerce - Shopify')).toBeVisible();
    await expect(this.page.getByText('Web Development - ReactJS,')).toBeVisible();
    await expect(this.page.getByText('DevOps Technologies - AWS,')).toBeVisible();
    await expect(this.page.getByText('Data Engineering - Amplitude')).toBeVisible();
    await expect(this.page.getByText('Backend Development - Ruby on')).toBeVisible();
    await expect(this.page.getByText('Content Manager - Contentful')).toBeVisible();
    
  }
  async farmersDogStudyCase() {
    await expect(this.page.getByRole('heading', { name: 'All Projects' })).toBeVisible();
    await this.page.getByRole('link', { name: 'The Farmers Dog The Farmers' }).click();
    await expect(this.page.getByText('The Farmer’s Dog & Rootstrap')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Stacked mockup featuring' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The Farmer’s Dog', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Services Provided' })).toBeVisible();
    await expect(this.page.getByText('Project Type')).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Embedded Teams$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: '- Present' }).nth(3)).toBeVisible();
    await expect(this.page.getByText('Industry', { exact: true })).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Pet Food & Supplies$/ }).nth(1)).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The Team', exact: true })).toBeVisible();
    await expect(this.page.getByText('QA Automation')).toBeVisible();
    await expect(this.page.getByText('QA Manual')).toBeVisible();
    await expect(this.page.getByText('React Developer')).toBeVisible();
    await expect(this.page.getByText('NodeJs Developer')).toBeVisible();
    await expect(this.page.getByText('Product Manager')).toBeVisible();
    await expect(this.page.getByText('Product Designer')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Charming scene in the kitchen' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'About the Client' })).toBeVisible();
    await expect(this.page.getByText('The Farmer’s Dog is a fresh')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '“I have valued our' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The challenge' })).toBeVisible();
    await expect(this.page.getByText('The Farmer’s Dog’s strategic')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Collection of app mockups' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'The Farmer’s Dog partnered' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'What we did?' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Vet Portal', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Continuous Improvement in Vet' })).toBeVisible();
    await expect(this.page.getByText('Rootstrap was also committed')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Integration and Refactoring' })).toBeVisible();
    await expect(this.page.getByText('Rootstrap joined the Vet')).toBeVisible();
    await this.scrollAndCheckVisibility(this.page, '[class="c-image-parallax cc-desktop cc-h-auto"]');
    await expect(this.page.getByRole('img', { name: 'Desktop onboarding screen' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'eCOMM & WEB' }).first()).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Order and Shipment Control' })).toBeVisible();
    await expect(this.page.getByText('Rootstrap actively')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Development and Maintenance' })).toBeVisible();
    await expect(this.page.getByText('During Super Bowl 2022,')).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Two adorable dogs sitting' })).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Captivating image of a dog' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Redesign of the Main Site' })).toBeVisible();
    await expect(this.page.getByText('Rootstrap redesigned some')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Core API' })).toBeVisible();
    await expect(this.page.getByText('Core API is The Farmer’s Dog\'')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: '“The team is friendly,' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Key Technologies Used' })).toBeVisible();
    await expect(this.page.getByText('Web development')).toBeVisible();
    await expect(this.page.getByText('ReactJS')).toBeVisible();
    await expect(this.page.getByText('Typescript', { exact: true })).toBeVisible();
    await expect(this.page.getByText('DevOps')).toBeVisible();
    await expect(this.page.getByText('AWS', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Data Engineering')).toBeVisible();
    await expect(this.page.getByText('Segment')).toBeVisible();
    await expect(this.page.getByText('SplitIO')).toBeVisible();
    await expect(this.page.getByText('Backend Development')).toBeVisible();
    await expect(this.page.getByText('NodeJs', { exact: true })).toBeVisible();
    await expect(this.page.getByText('GraphQL')).toBeVisible();
    await expect(this.page.getByText('Postgres')).toBeVisible();
    await expect(this.page.getByText('DynamoDB')).toBeVisible();
  }
  
  async blidsyStudyCase() {
    
  }
  async hatchCodingStudyCase() {
    
  }
  async nonProfitStudyCase() {
    
  }
  async cleoStudyCase() {
    
  }
  async betterUpStudyCase() {
    
  }
  async brightWheelStudyCase() {
    
  }
  async rgBrennerStudyCase() {
    
  }
  async googleOpusStudyCase() {
    
  }
  async globalizationStudyCase() {
    
  }
  async fiskerStudyCase() {
    
  }
  async walletJoyStudyCase() {
    
  }
  async tonyRobbinsStudyCase() {
    
  }
  async medicalRecordsStudyCase() {
    
  }
  async generisStudyCase() {
    
  }
  async oneDoorStudyCase() {
    
  }
}

module.exports = workPage;