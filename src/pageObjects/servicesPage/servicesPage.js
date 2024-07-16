const { expect } = require('@playwright/test');

class ServicesPage {
  constructor(page) {
    this.page = page;
  }
  async gotoServicePage() {
    await this.page.goto('https://rs2-0-1.webflow.io/#services');
  }

  async designExperienceSection() {
    await expect(this.page.getByRole('heading', { name: 'Design & User Experience' })).toBeVisible();
    await expect(this.page.getByText('We craft designs deeply')).toBeVisible();
    await expect(this.page.getByText('We craft designs deeply')).toHaveText('We craft designs deeply rooted in both aesthetics and usability.');
    await expect(this.page.getByRole('heading', { name: 'Our Expertise' })).toBeVisible();
    await this.page.locator('.c-expertise-container').first().click();
    await expect(this.page.locator('.c-expertise-container').first()).toBeVisible();
    await expect(this.page.getByText('Our UX research methods help')).toBeVisible();
    await expect(this.page.getByText('Our UX research methods help')).toHaveText('Our UX research methods help us uncover design problems and opportunities by understanding the needs of our users. As a result of these methods, we are able to deliver solutions that are user-centered and centered around the user\'s experience. Our exercises are customized to meet your needs, and they are designed to be both easy to use and engaging.');
    await expect(this.page.getByRole('button', { name: 'UX/UI' })).toBeVisible();
    await this.page.getByRole('button', { name: 'UX/UI' }).click();
    await expect(this.page.getByText('Eye-catching UI/UX interfaces')).toBeVisible();
    await expect(this.page.getByText('Eye-catching UI/UX interfaces')).toHaveText('Eye-catching UI/UX interfaces. Over a decade of experience allows us to create unique processes to defining the experience a user would go through when interacting with a digital product or website.');
    await expect(this.page.getByRole('button', { name: 'User-Centered Design' })).toBeVisible();
    await this.page.getByRole('button', { name: 'User-Centered Design' }).click();
    await expect(this.page.getByText('A systematic process of')).toBeVisible();
    await expect(this.page.getByText('A systematic process of')).toHaveText('A systematic process of understanding users, tasks, and environments; is based on user-centered evaluation; and addresses the whole user experience.');
    await expect(this.page.getByRole('button', { name: 'Accessibility & ADA Compliance' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Accessibility & ADA Compliance' }).click();
    await this.page.getByText('Digital accessibility is').click();
    await expect(this.page.getByText('Digital accessibility is')).toHaveText('Digital accessibility is about creating solutions so everyone can use a software, website, or app, regardless of age or impairments. However, it is not only about enabling people with disabilities to access digital products. More importantly, it focuses on providing a pleasant experience. Our goal is to create digital solutions for everyone.');
    await this.page.getByRole('button', { name: 'Visual Design System' }).click();
    await expect(this.page.getByText('Design systems help to create')).toBeVisible();
    await expect(this.page.getByText('Design systems help to create')).toHaveText('Design systems help to create successful digital products at scale by reducing redundancy and creating common language and visual consistency across different channels and pages. As part of our comprehensive design system service, we offer detailed guidelines, tools, and resources to ensure consistency, efficiency, and scalability in their design and development processes.');
    await expect(this.page.getByRole('heading', { name: 'Articles', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Related Projects' })).toBeVisible();
    await this.page.getByLabel('next slide').click();
    await expect(this.page.getByLabel('next slide')).toBeVisible();
    await this.page.getByLabel('previous slide').click();
    await expect(this.page.getByLabel('previous slide')).toBeVisible();
  }

  async productSection() {
    await expect(this.page.getByRole('heading', { name: 'Product Strategy' })).toBeVisible();
    await expect(this.page.getByText('Strategies shaped by research')).toBeVisible();
    await expect(this.page.getByText('Strategies shaped by research')).toHaveText('Strategies shaped by research, empathy, and expertise.');
    await expect(this.page.getByRole('heading', { name: 'Our Expertise' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Product Strategy' })).toBeVisible();
    await expect(this.page.getByText('Defining a strategy to both')).toBeVisible();
    await expect(this.page.getByText('Defining a strategy to both')).toHaveText('Defining a strategy to both bringing a product to life and evolving over time demands managing different aspects of the product and business. A good strategy takes into consideration a vision of the market and product goals. Managing your strategy effectively means that you are achieving clear communication of your team\'s visions and goals, defining your place in the market and managing a product roadmap.');
    await expect(this.page.getByRole('button', { name: 'User Research' })).toBeVisible();
    await this.page.getByRole('button', { name: 'User Research' }).click();
    await expect(this.page.getByText('User Research provides an')).toBeVisible();
    await expect(this.page.getByText('User Research provides an')).toHaveText('User Research provides an essential foundation for strategic design by collecting data to back the strategy and design decisions, thus helping to create an optimal product.');
    await expect(this.page.getByRole('button', { name: 'Strategic planning &' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Strategic planning &' }).click();
    await expect(this.page.getByText('During a product lifecycle,')).toBeVisible();
    await expect(this.page.getByText('During a product lifecycle,')).toHaveText('During a product lifecycle, the most important thing that needs to be taken into consideration is that many things change. Capacity to adapt, is more important than having the right initial assumption. With that in mind, we have created and optimized our process around agile concepts. Agile is a set of principles that embrace change.');
    await expect(this.page.getByRole('button', { name: 'User-Centered Product' })).toBeVisible();
    await this.page.getByRole('button', { name: 'User-Centered Product' }).click();
    await expect(this.page.getByText('Product Discovery is a')).toBeVisible();
    await expect(this.page.getByText('Product Discovery is a')).toHaveText('Product Discovery is a process that supports and helps product teams refine ideas by understanding user characteristics as they relate to the platform demographics while identifying the most efficient and effective ways to meet user expectations. Our process utilizes the design-based, double diamond framework, which is an iterative approach that helps technical teams identify and define user needs, generate innovative solutions and ultimately arrive at a well-informed and validated productconcept.');
    await expect(this.page.getByRole('heading', { name: 'Articles', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Related Projects' })).toBeVisible();
    await this.page.getByLabel('next slide').click();
    await expect(this.page.getByLabel('next slide')).toBeVisible();
    await this.page.getByLabel('previous slide').click();
    await expect(this.page.getByLabel('previous slide')).toBeVisible();
  }

  async webDevelopmentSection() {
    await expect(this.page.getByRole('heading', { name: 'Web and Mobile Development' })).toBeVisible();
    await expect(this.page.getByText('We delve deeper, offering')).toBeVisible();
    await expect(this.page.getByText('We delve deeper, offering')).toHaveText('We delve deeper, offering comprehensive services.');
    await expect(this.page.getByRole('heading', { name: 'Our Expertise' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Web & Mobile Development' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Web & Mobile Development' }).click();
    await expect(this.page.getByText('We love working with exciting')).toBeVisible();
    await expect(this.page.getByText('We love working with exciting')).toHaveText('We love working with exciting, fast-paced and professional organizations. Our team has capabilities to be involved on every single phase of the development process, from inception and brainstorming, to development and go-to-market.');
    await expect(this.page.getByRole('button', { name: 'Backend and APIs' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Backend and APIs' }).click();
    await expect(this.page.getByText('Working with some of the most')).toBeVisible();
    await expect(this.page.getByText('Working with some of the most')).toHaveText('Working with some of the most important companies in the world, we developed highly capable teams in some of the most important backend technologies. Our differentiation is having the ability to identify the right approach for each phase of your project, being able to scale, but avoiding over-engineering and unnecessary costs.');
    await expect(this.page.getByRole('button', { name: 'Code Audit' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Code Audit' }).click();
    await expect(this.page.getByText('Providing meticulous')).toBeVisible();
    await expect(this.page.getByText('Providing meticulous')).toHaveText('Providing meticulous examination of our clients\' codebase, we can identify vulnerabilities, and performance bottlenecks. This process not only safeguards your data and reputation but also saves you time and resources by preventing costly issues down the road, ensuring your software remains robust and competitive in today\'s dynamic technology landscape.');
    await expect(this.page.getByRole('button', { name: 'Technical Product Discovery' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Technical Product Discovery' }).click();
    await expect(this.page.getByText('A combination of research,')).toBeVisible();
    await expect(this.page.getByText('A combination of research,')).toHaveText('A combination of research, prototyping, and technical analysis allows us to assess feasibility, identify possible challenges, and align your vision with practical implementation.');
    await expect(this.page.getByRole('button', { name: 'Load & Performance Tests' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Load & Performance Tests' }).click();
    await expect(this.page.getByText('Performance testing is a non-')).toBeVisible();
    await expect(this.page.getByText('Performance testing is a non-')).toHaveText('Performance testing is a non-functional software testing technique that determines how the stability, speed, scalability, and responsiveness of an application holds up under a given workload.');
    await expect(this.page.getByRole('button', { name: 'QA testing' })).toBeVisible();
    await this.page.getByRole('button', { name: 'QA testing' }).click();
    await expect(this.page.getByText('Quality assurance (QA)')).toBeVisible();
    await expect(this.page.getByText('Quality assurance (QA)')).toHaveText('Quality assurance (QA) testing ensures that your software or product meets the highest standards of quality and reliability. By letting us systematically identify and address issues early in the development cycle, our QA testing services minimize costly post-release fixes, improves time-to-market, and bolsters your brand\'s reputation for delivering dependable, error-free solutions.');
    await expect(this.page.getByRole('heading', { name: 'Articles', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Related Projects' })).toBeVisible();
    await this.page.getByLabel('next slide').click();
    await expect(this.page.getByLabel('next slide')).toBeVisible();
    await this.page.getByLabel('previous slide').click();
    await expect(this.page.getByLabel('previous slide')).toBeVisible();
  }

  async cloudDevopsSection() {
    await expect(this.page.getByRole('heading', { name: 'Cloud & DevOps' })).toBeVisible();
    await expect(this.page.getByText('Certified AWS Partners,')).toBeVisible();
    await expect(this.page.getByText('Certified AWS Partners,')).toHaveText('Certified AWS Partners, leveraging cloud solutions & DevOps agility.');
    await expect(this.page.getByRole('heading', { name: 'Our Expertise' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Cloud Consulting' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Cloud Consulting' }).click();
    await expect(this.page.getByText('Ensure maximum performance,')).toBeVisible();
    await expect(this.page.getByText('Ensure maximum performance,')).toHaveText('Ensure maximum performance, security (HIPPA/CCPA/GDPR), cost optimization for your cloud systems. We are strategic partners who aim to strengthen your team and grow your business. We connect with your organization and analyze your culture, process, technology to best define how to incorporate DevOps. We don’t do one-size-fits-all solutions.');
    await expect(this.page.getByRole('button', { name: 'Cloud Infrastructure' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Cloud Infrastructure' }).click();
    await expect(this.page.getByText('We create our environments')).toBeVisible();
    await expect(this.page.getByText('We create our environments')).toHaveText('We create our environments following a IaC paradigm. This allows us to re-create environments very rapidly, as well as making changes to existing and running environments. Our team uses tools such as Ansible, Terraform or CDK, which allow a layer of abstraction over the actual implementation within the cloud.');
    await expect(this.page.getByRole('button', { name: 'DevOps & CI/CD' })).toBeVisible();
    await this.page.getByRole('button', { name: 'DevOps & CI/CD' }).click();
    await expect(this.page.getByText('DevOps and CI/CD (Continuous')).toBeVisible();
    await expect(this.page.getByText('DevOps and CI/CD (Continuous')).toHaveText('DevOps and CI/CD (Continuous Integration/Continuous Delivery) are pivotal practices that our agency offers to streamline software development and deployment. DevOps breaks down silos between development and operations, which results in faster development cycles. Meanwhile, CI/CD automates the build, test, and deployment pipeline, ensuring rapid and reliable releases. This combined approach enhances efficiency, reduces errors, and promotes continuous improvement');
    await expect(this.page.getByRole('button', { name: 'DevSecOps' })).toBeVisible();
    await this.page.getByRole('button', { name: 'DevSecOps' }).click();
    await expect(this.page.getByText('DevSecOps revolutionizes')).toBeVisible();
    await expect(this.page.getByText('DevSecOps revolutionizes' )).toHaveText('DevSecOps revolutionizes software development by integrating security throughout the entire development lifecycle, ensuring that security is no longer an afterthought.');
    await expect(this.page.getByRole('button', { name: 'Cloud Migration & Process' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Cloud Migration & Process' }).click();
    await expect(this.page.getByText('We help you easily migrate')).toBeVisible();
    await expect(this.page.getByText('We help you easily migrate')).toHaveText('We help you easily migrate your applications and data with minimal downtime. By migrating to the cloud, you\'ll unlock scalability and cost savings while ensuring your data\'s security and accessibility. Meanwhile, Process Automation streamlines your operations, eliminating repetitive tasks and reducing human error, ultimately boosting productivity. Together, they empower your business to adapt, compete, and thrive in the digital age, all while delivering a seamless customer experience.');
    await expect(this.page.getByRole('heading', { name: 'Articles', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Related Projects' })).toBeVisible();
    // await this.page.getByLabel('next slide').click();
    // await expect(this.page.getByLabel('next slide')).toBeVisible();
    // await this.page.getByLabel('previous slide').click();
    // await expect(this.page.getByLabel('previous slide')).toBeVisible();
  }

  async aiSection() {
    await expect(this.page.getByRole('heading', { name: 'Artificial Intelligence' })).toBeVisible();
    await expect(this.page.getByText('Unlocking Innovation through')).toBeVisible();
    await expect(this.page.getByText('Unlocking Innovation through')).toHaveText('Unlocking Innovation through AI Technologies.');
    await expect(this.page.getByText('In a rapidly evolving tech')).toBeVisible();
    await expect(this.page.getByText('In a rapidly evolving tech')).toHaveText('In a rapidly evolving tech landscape, we adopt an AI First Mindset for cutting-edge solutions. AI is not just a tool; it\'s an integral part of our development philosophy.');
    await expect(this.page.getByText('Developers at Rootstrap are')).toBeVisible();
    await expect(this.page.getByText('Developers at Rootstrap are')).toHaveText('Developers at Rootstrap are leading the charge in AI testing, coding, and problem-solving. Discovering the optimal solution for your challenge, utilizing the power of AI if it aligns with your needs.');
    await expect(this.page.getByRole('heading', { name: 'Our capabilities' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Object Detection and Image' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Custom ML Models' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'AI Strategy Consulting' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'RAGs (Retrieval Augmented' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Data Engineering' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'AI-Powered Automation' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'GenAI and LLMs' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Data Pipelines and ETLs' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Ethics and Compliance' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Personalization and' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Personalization and' }).click();
    await expect(this.page.getByText('Utilizing machine learning,')).toBeVisible();
    await expect(this.page.getByText('Utilizing machine learning,')).toHaveText('Utilizing machine learning, our solutions analyze user data to tailor content and recommendations. This approach enhances user experiences by aligning offerings with individual preferences and behaviors, effectively boosting engagement and satisfaction.');
    await expect(this.page.getByRole('button', { name: 'Generative AI' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Generative AI' }).click();
    await expect(this.page.getByText('Harness the power of OpenAI')).toBeVisible();
    await expect(this.page.getByText('Harness the power of OpenAI')).toHaveText('Harness the power of OpenAI and LangChain technologies to revolutionize your content creation. These AI systems generate text, images, and ideas, enhancing creativity and efficiency in marketing, design, and beyond for transformative business solutions.');
    await expect(this.page.getByRole('button', { name: 'End-to-end Projects' })).toBeVisible();
    await this.page.getByRole('button', { name: 'End-to-end Projects' }).click();
    await expect(this.page.getByText('Comprehensive solutions from')).toBeVisible();
    await expect(this.page.getByText('Comprehensive solutions from')).toHaveText('Comprehensive solutions from concept to deployment, specializing in AI and ML technologies. We manage all phases, ensuring seamless integration and optimal performance tailored to advance your specific business objectives.');
    await expect(this.page.getByRole('button', { name: 'AI Product Strategy &' })).toBeVisible();
    await this.page.getByRole('button', { name: 'AI Product Strategy &' }).click();
    await expect(this.page.getByText('Our expert team guides you')).toBeVisible();
    await expect(this.page.getByText('Our expert team guides you')).toHaveText('Our expert team guides you through the strategic planning and discovery phases of AI product development. We identify key opportunities, align AI capabilities with your business goals, and design actionable roadmaps. Our approach ensures your AI investments deliver measurable impact, fostering innovation, enhancing user engagement, and driving sustainable growth in competitive markets.');
    await expect(this.page.getByRole('button', { name: 'AI Ethics' })).toBeVisible();
    await this.page.getByRole('button', { name: 'AI Ethics' }).click();
    await expect(this.page.getByText('We prioritize responsible AI')).toBeVisible();
    await expect(this.page.getByText('We prioritize responsible AI')).toHaveText('We prioritize responsible AI development, ensuring ethical standards guide every project. Our commitment to transparency, fairness, and accountability shapes robust AI solutions that respect user privacy and promote trust.');
    await expect(this.page.getByRole('heading', { name: 'Articles', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Related Projects' })).toBeVisible();
    // await this.page.getByLabel('next slide').click();
    // await expect(this.page.getByLabel('next slide')).toBeVisible();
    // await this.page.getByLabel('previous slide').click();
    // await expect(this.page.getByLabel('previous slide')).toBeVisible();
  }
  async dataServiceSection() {
    await expect(this.page.getByRole('heading', { name: 'Data Services' })).toBeVisible();
    await expect(this.page.getByText('Convert raw data into')).toBeVisible();
    await expect(this.page.getByText('Convert raw data into')).toHaveText('Convert raw data into strategic insights to drive business success.');
    await expect(this.page.getByRole('heading', { name: 'Our Expertise' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Data Warehouse Management' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Data Warehouse Management' }).click();
    await expect(this.page.getByText('Our experienced team')).toBeVisible();
    await expect(this.page.getByText('Our experienced team')).toHaveText('Our experienced team centralizes, stores, and analyzes large datasets to enhance insights, reporting, and decision-making for businesses. Vital for unlocking deeper insights, improving reporting accuracy, and enabling smarter, data-driven decisions.');
    await expect(this.page.getByRole('button', { name: 'ETL (Extract, Transform, Load)' })).toBeVisible();
    await this.page.getByRole('button', { name: 'ETL (Extract, Transform, Load)' }).click();
    await expect(this.page.getByText('We streamline data extraction')).toBeVisible();
    await expect(this.page.getByText('We streamline data extraction')).toHaveText('We streamline data extraction, transformation, and loading, ensuring your systems are fed with clean and actionable data. In today’s data-driven world, efficient ETL services are crucial for transforming raw data into valuable insights. By ensuring your systems receive clean, actionable data, our ETL services enable informed decision-making, optimize operations, and drive business growth.');
    await expect(this.page.getByRole('button', { name: 'Data Integration,' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Data Integration,' }).click();
    await expect(this.page.getByText('We unify data sources, create')).toBeVisible();
    await expect(this.page.getByText('We unify data sources, create')).toHaveText('We unify data sources, create visual reports, and deliver actionable insights for informed decision-making. This service is crucial for transforming diverse data into clear visual insights, facilitating better and faster business decisions.');
    await expect(this.page.getByRole('button', { name: 'Big Data Processing and Data' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Big Data Processing and Data' }).click();
    await expect(this.page.getByText('We have the ability to handle')).toBeVisible();
    await expect(this.page.getByText('We have the ability to handle')).toHaveText('We have the ability to handle massive datasets efficiently, while ensuring accuracy, consistency, and reliability of the data. The ability to handle massive datasets while ensuring accuracy, consistency, and reliability is crucial for establishing trust in data, enabling informed and reliable decision-making for business success.');
    await expect(this.page.getByRole('heading', { name: 'Articles', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Related Projects' })).toBeVisible();
    await this.page.getByLabel('next slide').click();
    await expect(this.page.getByLabel('next slide')).toBeVisible();
    await this.page.getByLabel('previous slide').click();
    await expect(this.page.getByLabel('previous slide')).toBeVisible();

  }

  async qaSection() {
    await expect(this.page.getByRole('heading', { name: 'Quality Assurance' })).toBeVisible();
    await expect(this.page.getByText('Excellence and reliability')).toBeVisible();
    await expect(this.page.getByText('Excellence and reliability')).toHaveText('Excellence and reliability ensured through rigorous testing and precision.');
    await expect(this.page.getByRole('heading', { name: 'Our Expertise' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'QA Audit' })).toBeVisible();
    await this.page.getByRole('button', { name: 'QA Audit' }).click();
    await expect(this.page.getByText('Quality Assurance audit, is a')).toBeVisible();
    await expect(this.page.getByText('Quality Assurance audit, is a')).toHaveText('Quality Assurance audit, is a rigorous examination of software we offer, to identify and rectify defects, vulnerabilities, and deviations from quality standards and compliance requirements. By conducting a QA audit with us, you guarantee that your software is not only error- free but also optimized for efficiency, resulting in a more robust and competitive product that meets or exceeds industry standards.');
    await expect(this.page.getByRole('button', { name: 'QA Automation' })).toBeVisible();
    await this.page.getByRole('button', { name: 'QA Automation' }).click();
    await expect(this.page.getByText('Ensures the quality and')).toBeVisible();
    await expect(this.page.getByText('Ensures the quality and')).toHaveText('Ensures the quality and reliability of the software by automating repetitive and time-consuming testing tasks, reducing the risk of human error, and providing consistent and fast feedback on software changes. This leads to faster releases, improved software quality, and increased confidence in the software product.');
    await expect(this.page.getByRole('button', { name: 'Accessibility testing' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Accessibility testing' }).click();
    await expect(this.page.getByText('A critical component of')).toBeVisible();
    await expect(this.page.getByText('A critical component of')).toHaveText('A critical component of software development that ensures your digital products are inclusive and accessible to all users, regardless of their physical or cognitive abilities. We will assist you by thoroughly evaluating your application\'s adherence to accessibility standards such as WCAG, ADA, or Section 508, you can uncover and address barriers that may hinder users with disabilities from accessing and utilizing your software.');
    await expect(this.page.getByRole('button', { name: 'Load and performance testing' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Load and performance testing' }).click();
    await expect(this.page.getByText('An essential aspects of')).toBeVisible();
    await expect(this.page.getByText('An essential aspects of')).toHaveText('An essential aspects of software development that involves evaluating how well your application can handle user interactions and workload, ensuring it remains robust and responsive under various conditions. The benefits are numerous: it helps you identify and rectify performance bottlenecks, prevents system crashes and slowdowns, ensures scalability to accommodate growing user bases, and enhances user experience, ultimately safeguarding your brand\'s reputation and revenue streams. By conducting load and performance testing with us, you can confidently deliver a reliable and high-performing software solution that meets or exceeds user expectations.');
    await expect(this.page.getByRole('heading', { name: 'Articles', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Related Projects' })).toBeVisible();
    await this.page.getByLabel('next slide').click();
    await expect(this.page.getByLabel('next slide')).toBeVisible();
    await this.page.getByLabel('previous slide').click();
    await expect(this.page.getByLabel('previous slide')).toBeVisible();
  }

}

module.exports = ServicesPage;