const { expect } = require('@playwright/test');
const data = require('../../data/data.json');

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
  


  async masterClassStudyCase() {
    const elements = data.masterClassStudyCase.elements;
    await this.page.getByRole('link', { name: data.masterClassStudyCase.link }).click();
    await expect(this.page.getByRole(elements.imgThumbnails.role, elements.imgThumbnails.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.headingMasterclass.role, elements.headingMasterclass.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.headingServicesProvided.role, elements.headingServicesProvided.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textProjectType.text)).toBeVisible();
    await expect(this.page.getByText(elements.textIndustry.text)).toBeVisible();
    await expect(this.page.getByText(elements.textStaffAugmentation.text)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Education$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Streaming$/ }).first()).toBeVisible();
    await expect(this.page.locator(elements.locatorPresent.locator).filter({ hasText: elements.locatorPresent.filter.hasText }).nth(elements.locatorPresent.filter.nth)).toBeVisible();
    await expect(this.page.getByRole(elements.headingTheTeam.role, elements.headingTheTeam.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textProductDesigners.text)).toBeVisible();
    await expect(this.page.getByText(elements.textAndroidDevelopers.text)).toBeVisible();
    await expect(this.page.getByText(elements.textiOSDevelopers.text)).toBeVisible();
    await expect(this.page.getByText(elements.textWebDevelopers.text)).toBeVisible();
    await expect(this.page.getByText(elements.textRokuTVDevelopers.text)).toBeVisible();
    await expect(this.page.getByText(elements.textQAAnalysts.text)).toBeVisible();
    await expect(this.page.getByText(elements.textScrumMaster.text)).toBeVisible();
    await expect(this.page.getByRole(elements.headingAboutTheClient.role, elements.headingAboutTheClient.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textMasterClassStreaming.text)).toBeVisible();
    await expect(this.page.getByRole(elements.headingQuote.role, elements.headingQuote.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.headingHelpingBuildNew.role, elements.headingHelpingBuildNew.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textMasterclassNeededToScale.text)).toBeVisible();
    await expect(this.page.getByText(elements.textRootstrapPartner.text)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Image of a mobile phone' }).first()).toBeVisible();
    await expect(this.page.getByRole(elements.headingElevatesFrontEnd.role, elements.headingElevatesFrontEnd.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textSeamlessly.text)).toBeVisible();
    await expect(this.page.getByRole(elements.imgMultipleMockups.role, elements.imgMultipleMockups.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textThroughoutPartnership.text)).toBeVisible();
    await expect(this.page.getByText(elements.textWeAssisted.text)).toBeVisible();
    await expect(this.page.getByRole(elements.headingSupported2021.role, elements.headingSupported2021.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.headingGrowthDuringCovid.role, elements.headingGrowthDuringCovid.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textCovidPandemic.text)).toBeVisible();
    await expect(this.page.getByRole(elements.headingKeyTechnologiesUsed.role, elements.headingKeyTechnologiesUsed.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.headingMobileTVTechnologies.role, elements.headingMobileTVTechnologies.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textNativeTechnologies.text)).toBeVisible();
    await expect(this.page.getByRole(elements.headingWebDevelopment.role, elements.headingWebDevelopment.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textReactTechnologies.text)).toBeVisible();
    await expect(this.page.getByRole(elements.headingDevOpsTechnologies.role, elements.headingDevOpsTechnologies.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textHerokuAWSNginx.text)).toBeVisible();
    await expect(this.page.getByRole(elements.headingBackendDevelopment.role, elements.headingBackendDevelopment.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textRubyOnRails.text)).toBeVisible();
    await expect(this.page.getByRole(elements.headingDataEngineering.role, elements.headingDataEngineering.locator)).toBeVisible();
    await expect(this.page.getByText(elements.textSegmentOptimizel.text)).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  async emeritusStudyCase() {
    const elements = data.emeritusStudyCase.elements;
    await this.page.getByRole('link', { name: data.emeritusStudyCase.link }).click();
    await expect(this.page.getByText(elements.revampText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.imgThumbnails.name, elements.imgThumbnails.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.headingServicesProvided.name, elements.headingServicesProvided.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectTypeText.value)).toBeVisible();
    await expect(this.page.getByText(elements.industryText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Web & Mobile Development$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Higher Education$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Ed Tech$/ }).first()).toBeVisible();
    await expect(this.page.locator(elements.onwardsLocator.value).filter({ hasText: elements.onwardsLocator.filter.hasText }).nth(elements.onwardsLocator.filter.nth)).toBeVisible();
    await expect(this.page.getByRole(elements.teamHeading.name, elements.teamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.frontEndDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.backEndDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.qaAnalystText.value)).toBeVisible();
    await expect(this.page.getByText(elements.webDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.projectManagerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productManagerText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.additionalThumbnailsImg.name, elements.additionalThumbnailsImg.locator)).toBeVisible();
    await this.page.mouse.move(0, 100);
    await expect(this.page.getByText(elements.committedText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.rootstrapWorkHeading.name, elements.rootstrapWorkHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.broadenText.value)).toBeVisible();
    await expect(this.page.getByText(elements.jesseOconText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.transformationHeading.name, elements.transformationHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.challengeHeading.name, elements.challengeHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.turnedToRootstrapText.value)).toBeVisible();
    await expect(this.page.getByText(elements.enrollmentText.value)).toBeVisible();
    await expect(this.page.getByText(elements.taskedWithText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.whatWeDidHeading.name, elements.whatWeDidHeading.locator)).toBeVisible();
    await this.scrollAndCheckVisibility(this.page, '[class="c-emeritus-phone-image _1"]');
    await this.scrollAndCheckVisibility(this.page, '[class="c-emeritus-phone-image _2"]');
    await this.scrollAndCheckVisibility(this.page, '[class="c-emeritus-phone-image _3"]');
    await expect(this.page.getByRole(elements.grewTheHeading.name, elements.grewTheHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.newBackEndText.value)).toBeVisible();
    await expect(this.page.getByText(elements.achievementsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.singleSignOnText.value)).toBeVisible();
    await expect(this.page.getByText(elements.subdomainsText.value)).toBeVisible();
    await this.page.mouse.move(0, 100);
    await expect(this.page.getByRole(elements.multipleMockupsImg.name, elements.multipleMockupsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.scalableHeading.name, elements.scalableHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.resultsText.value, { exact: elements.resultsText.exact })).toBeVisible();
    await expect(this.page.getByText(elements.revenueText.value)).toBeVisible();
    await expect(this.page.getByText(elements.revenueIncreaseText.value, { exact: elements.revenueIncreaseText.exact })).toBeVisible();
    await expect(this.page.getByText(elements.revenueDetailText.value)).toBeVisible();
    await expect(this.page.getByText(elements.enrollmentTextPercentage.value)).toBeVisible();
    await expect(this.page.getByText(elements.enrollmentIncreaseText.value, { exact: elements.enrollmentIncreaseText.exact })).toBeVisible();
    await expect(this.page.getByText(elements.enrollmentDetailText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.keyTechnologiesHeading.name, elements.keyTechnologiesHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.webDevelopmentHeading.name, elements.webDevelopmentHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.reactjsText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.backendDevelopmentHeading.name, elements.backendDevelopmentHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.rubyOnRailsText.value, { exact: elements.rubyOnRailsText.exact })).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  async liveStockStudyCase() {
    const elements = data.liveStockStudyCase.elements;
    await this.page.getByRole('link', { name: data.liveStockStudyCase.link }).click();
    await expect(this.page.getByText(elements.leadingFutureText.value)).toBeVisible();
    await expect(this.page.locator(elements.videoSection.value).filter({ hasText: elements.videoSection.filter.hasText }).locator(elements.videoSection.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.revolutionizingHeading.name, elements.revolutionizingHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.servicesProvidedHeading.name, elements.servicesProvidedHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectTypeText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Proof of concept$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Health$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Veterinary$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Image diagnosis$/ }).first()).toBeVisible();
    await expect(this.page.getByText(elements.industryText.value)).toBeVisible();
    await expect(this.page.locator(elements.weeksLocator.value).filter({ hasText: elements.weeksLocator.filter.hasText }).nth(elements.weeksLocator.filter.nth)).toBeVisible();
    await expect(this.page.getByRole(elements.teamHeading.name, elements.teamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.dataScientistText.value)).toBeVisible();
    await expect(this.page.getByText(elements.mlSpecialistsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productDesignerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.elevatingCattleHealthText.value)).toBeVisible();
    await expect(this.page.getByText(elements.cowBreedingText.value)).toBeVisible();
    await this.page.mouse.move(0, 100);
    await expect(this.page.getByRole(elements.multipleMockupsImg.name, elements.multipleMockupsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.transformingCattleHealthHeading.name, elements.transformingCattleHealthHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.detectingLamenessText.value)).toBeVisible();
    await expect(this.page.getByText(elements.developArtificialText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.challengeHeading.name, elements.challengeHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.createMVPSolutionText.value)).toBeVisible();
    await expect(this.page.getByText(elements.fivePointText.value)).toBeVisible();
    await expect(this.page.getByText(elements.straightBackText.value)).toBeVisible();
    await expect(this.page.getByText(elements.longStepsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.incurvedBackMovementText.value)).toBeVisible();
    await expect(this.page.getByText(elements.shortStepsText.value, { exact: elements.shortStepsText.exact })).toBeVisible();
    await expect(this.page.locator(elements.incurvedBackText1.value).nth(elements.incurvedBackText1.nth)).toBeVisible();
    await expect(this.page.getByText(elements.veryShortStepsText.value)).toBeVisible();
    await expect(this.page.locator(elements.incurvedBackText2.value).nth(elements.incurvedBackText2.nth)).toBeVisible();
    await expect(this.page.getByText(elements.obviousLamenessText.value)).toBeVisible();
    await expect(this.page.getByText(elements.veryEvidentLamenessText.value)).toBeVisible();
    await expect(this.page.getByText(elements.lyingDownText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.addressingNeedsHeading.name, elements.addressingNeedsHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.researchedSelectedText.value)).toBeVisible();
    await expect(this.page.getByText(elements.goalDetectText.value)).toBeVisible();
    await expect(this.page.locator(elements.addressingNeedsVideo.value).filter({ hasText: elements.addressingNeedsVideo.filter.hasText }).locator(elements.addressingNeedsVideo.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.resultedApproachHeading.name, elements.resultedApproachHeading.locator)).toBeVisible();
    await this.moreProjectsCaroussel();
  }

  async madisonReedStudyCase() {
    const elements = data.madisonReedStudyCase.elements;
    await this.page.getByRole('link', { name: data.madisonReedStudyCase.link }).click();
    await expect(this.page.getByText(elements.titleText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.thumbnailsImg.name, elements.thumbnailsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.beyondAppHeading.name, elements.beyondAppHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.servicesProvidedHeading.name, elements.servicesProvidedHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectTypeText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Mobile App development$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator(elements.mid2020Q1Locator.value).filter({ hasText: elements.mid2020Q1Locator.filter.hasText }).nth(elements.mid2020Q1Locator.filter.nth)).toBeVisible();
    await expect(this.page.getByText(elements.industryText.value, { exact: elements.industryText.exact })).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Beauty$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Hair Care$/ }).first()).toBeVisible();
    await expect(this.page.getByRole(elements.teamHeading.name, elements.teamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectManagerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productDesignersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productManagersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.reactNativeDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.qaAnalystText.value)).toBeVisible();
    await expect(this.page.getByText(elements.scrumMasterText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.covidText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.appReviewHeading.name, elements.appReviewHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.clientReviewText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.urgentNeedHeading.name, elements.urgentNeedHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.coreLogicText.value)).toBeVisible();
    await this.page.mouse.move(0, 100);
    await expect(this.page.getByRole(elements.additionalThumbnailsImg.name, elements.additionalThumbnailsImg.locator)).toBeVisible();
    await expect(this.page.getByText(elements.challengeText.value)).toBeVisible();
    await expect(this.page.getByText(elements.facedChallengeText.value)).toBeVisible();
    await expect(this.page.getByText(elements.chosenPartnerText.value)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Madison Reed\'s app' }).nth(1)).toBeVisible();
    await expect(this.page.getByRole(elements.beginProcessHeading.name, elements.beginProcessHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.processFocusHeading.name, elements.processFocusHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.subscriptionManagementHeading.name, elements.subscriptionManagementHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.ecommerceSolutionText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.colorBarCompanionHeading.name, elements.colorBarCompanionHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.intuitiveInterfaceText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.loyaltyMembershipHeading.name, elements.loyaltyMembershipHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.fosterBrandText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.developedAppsHeading.name, elements.developedAppsHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.updatedAppsText.value)).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  async eyeLevelStudyCase() {
    const elements = data.eyeLevelStudyCase.elements;
    await expect(this.page.getByRole(elements.allProjectsHeading.name, elements.allProjectsHeading.locator)).toBeVisible();
    await this.page.getByRole('link', { name: data.eyeLevelStudyCase.link }).click();
    await expect(this.page.getByText(elements.titleText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.thumbnailsImg.name, elements.thumbnailsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.eyeLevelHeading.name, elements.eyeLevelHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.servicesProvidedHeading.name, elements.servicesProvidedHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectTypeText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Managed Services$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Ed Tech$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator(elements.presentLocator.value).filter({ hasText: elements.presentLocator.filter.hasText }).nth(elements.presentLocator.filter.nth)).toBeVisible();
    await expect(this.page.getByRole(elements.teamHeading.name, elements.teamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.productDesignerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.frontendDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.backendDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.qaAnalystText.value)).toBeVisible();
    await expect(this.page.getByText(elements.designerText.value, { exact: elements.designerText.exact })).toBeVisible();
    await expect(this.page.getByText(elements.scrumMasterText.value)).toBeVisible();
    await expect(this.page.getByText(elements.projectManagerText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.clientDescriptionText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.smilingGirlImg.name, elements.smilingGirlImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.setOutHeading.name, elements.setOutHeading.locator)).toBeVisible();
    await this.scrollAndCheckVisibility(this.page, '[class="c-gradient-divider-container"]');
    await expect(this.page.getByRole(elements.mainChallengeHeading.name, elements.mainChallengeHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.additionalRequirementText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.mockupScreensImg.name, elements.mockupScreensImg.locator)).toBeVisible();
    await expect(this.page.getByText(elements.initiallyTutorsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.parentsNeededText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.mockupScreensInAppImg.name, elements.mockupScreensInAppImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.experienceHeading.name, elements.experienceHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.diverseMockupsImg.name, elements.diverseMockupsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.whatWeDidHeading.name, elements.whatWeDidHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.developmentWorkText.value)).toBeVisible();
    await expect(this.page.getByText(elements.phase1Text.value)).toBeVisible();
    await expect(this.page.getByRole(elements.revenueStreamsHeading.name, elements.revenueStreamsHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.firstPhaseText.value)).toBeVisible();
    await expect(this.page.getByText(elements.phase2Text.value)).toBeVisible();
    await expect(this.page.getByRole(elements.personalizedContentHeading.name, elements.personalizedContentHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.milestone2Text.value)).toBeVisible();
    await expect(this.page.getByText(elements.phase3Text.value)).toBeVisible();
    await expect(this.page.getByRole(elements.matchingStudentsHeading.name, elements.matchingStudentsHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.thirdPhaseText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.keyTechnologiesHeading.name, elements.keyTechnologiesHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.reactNativeText.value)).toBeVisible();
    await expect(this.page.getByText(elements.reactJSText.value)).toBeVisible();
    await expect(this.page.getByText(elements.herokuText.value)).toBeVisible();
    await expect(this.page.getByText(elements.rubyOnRailsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.activeAdminDBText.value)).toBeVisible();
    await this.moreProjectsCaroussel();
  }

  async fuzzyStudyCase() {
    const elements = data.fuzzyStudyCase.elements;
    await expect(this.page.getByRole(elements.allProjectsHeading.name, elements.allProjectsHeading.locator)).toBeVisible();
    await this.page.getByRole('link', { name: data.fuzzyStudyCase.link }).click();
    await expect(this.page.getByText(elements.titleText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.thumbnailsImg.name, elements.thumbnailsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.servicesProvidedHeading.name, elements.servicesProvidedHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectTypeText.value)).toBeVisible();
    await expect(this.page.getByText(elements.industryText.value, { exact: elements.industryText.exact })).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Embedded Teams$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator(elements.to2023Locator.value).filter({ hasText: elements.to2023Locator.filter.hasText }).nth(elements.to2023Locator.filter.nth)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Pet Food & Supplies$/ }).nth(1)).toBeVisible();
    await expect(this.page.getByRole(elements.teamHeading.name, elements.teamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.productDesignersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.androidDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.iosDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.webDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.qaAnalystText.value)).toBeVisible();
    await expect(this.page.getByText(elements.frontendDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.designerText.value, { exact: elements.designerText.exact })).toBeVisible();
    await expect(this.page.getByRole(elements.smilingGirlImg.name, elements.smilingGirlImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.clientDescriptionText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.challengeHeading.name, elements.challengeHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.startupDescriptionText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.whatWeDidHeading.name, elements.whatWeDidHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.ecommWebHeading.name, elements.ecommWebHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.sellingGoodsHeading.name, elements.sellingGoodsHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.taskDescriptionText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.ecommerceSubscriptionsHeading.name, elements.ecommerceSubscriptionsHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.commitmentText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.redesigningAcademyHeading.name, elements.redesigningAcademyHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.taskedDescriptionText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.telehealthHeading.name, elements.telehealthHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.buildingMedicalHeading.name, elements.buildingMedicalHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.redesignedText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.telemedicineHeading.name, elements.telemedicineHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.portalDescriptionText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.empoweringTeamHeading.name, elements.empoweringTeamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.questionnairesText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.diverseMockupsImg.name, elements.diverseMockupsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.keyTechnologiesHeading.name, elements.keyTechnologiesHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.mobileTechnologiesText.value)).toBeVisible();
    await expect(this.page.getByText(elements.ecommerceText.value)).toBeVisible();
    await expect(this.page.getByText(elements.webDevelopmentText.value)).toBeVisible();
    await expect(this.page.getByText(elements.devopsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.dataEngineeringText.value)).toBeVisible();
    await expect(this.page.getByText(elements.backendText.value)).toBeVisible();
    await expect(this.page.getByText(elements.contentManagerText.value)).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  async farmersDogStudyCase() {
    const elements = data.farmersDogStudyCase.elements;
    await expect(this.page.getByRole(elements.allProjectsHeading.name, elements.allProjectsHeading.locator)).toBeVisible();
    await this.page.getByRole('link', { name: data.farmersDogStudyCase.link }).click();
    await expect(this.page.getByText(elements.titleText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.thumbnailsImg.name, elements.thumbnailsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.farmersDogHeading.name, elements.farmersDogHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.servicesProvidedHeading.name, elements.servicesProvidedHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectTypeText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Embedded Teams$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator(elements.toPresentLocator.value).filter({ hasText: elements.toPresentLocator.filter.hasText }).nth(elements.toPresentLocator.filter.nth)).toBeVisible();
    await expect(this.page.getByText(elements.industryText.value, { exact: elements.industryText.exact })).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Pet Food & Supplies$/ }).nth(1)).toBeVisible();
    await expect(this.page.getByRole(elements.teamHeading.name, elements.teamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.qaAutomationText.value)).toBeVisible();
    await expect(this.page.getByText(elements.qaManualText.value)).toBeVisible();
    await expect(this.page.getByText(elements.reactDeveloperText.value)).toBeVisible();
    await expect(this.page.getByText(elements.nodeJsDeveloperText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productManagerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productDesignerText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.charmingSceneImg.name, elements.charmingSceneImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.clientDescriptionText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.valuedHeading.name, elements.valuedHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.challengeHeading.name, elements.challengeHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.strategicText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.appMockupsImg.name, elements.appMockupsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.partneredHeading.name, elements.partneredHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.whatWeDidHeading.name, elements.whatWeDidHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.vetPortalHeading.name, elements.vetPortalHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.continuousImprovementHeading.name, elements.continuousImprovementHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.committedText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.integrationRefactoringHeading.name, elements.integrationRefactoringHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.joinedVetText.value)).toBeVisible();
    await this.scrollAndCheckVisibility(this.page, '[class="c-image-parallax cc-desktop cc-h-auto"]');
    await expect(this.page.getByRole(elements.desktopOnboardingImg.name, elements.desktopOnboardingImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.orderShipmentHeading.name, elements.orderShipmentHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.activelyText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.developmentMaintenanceHeading.name, elements.developmentMaintenanceHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.superBowlText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.adorableDogsImg.name, elements.adorableDogsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.captivatingDogImg.name, elements.captivatingDogImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.redesignMainSiteHeading.name, elements.redesignMainSiteHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.redesignedText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.coreAPIHeading.name, elements.coreAPIHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.coreAPIText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.friendlyTeamHeading.name, elements.friendlyTeamHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.keyTechnologiesHeading.name, elements.keyTechnologiesHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.webDevelopmentText.value)).toBeVisible();
    await expect(this.page.getByText(elements.reactJSText.value)).toBeVisible();
   // await expect(this.page.getByText(elements.typescriptText.value)).toBeVisible();
    await expect(this.page.getByText(elements.devOpsText.value)).toBeVisible();
    //await expect(this.page.getByText(elements.awsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.dataEngineeringText.value)).toBeVisible();
    await expect(this.page.getByText(elements.segmentText.value)).toBeVisible();
    await expect(this.page.getByText(elements.splitIOText.value)).toBeVisible();
    await expect(this.page.getByText(elements.backendDevelopmentText.value)).toBeVisible();
   // await expect(this.page.getByText(elements.nodeJsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.graphQLText.value)).toBeVisible();
    await expect(this.page.getByText(elements.postgresText.value)).toBeVisible();
    await expect(this.page.getByText(elements.dynamoDBText.value)).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  
  async blidsyStudyCase() {
    const elements = data.blidsyStudyCase.elements;
    await expect(this.page.getByRole(elements.allProjectsHeading.name, elements.allProjectsHeading.locator)).toBeVisible();
    await this.page.getByRole('link', { name: data.blidsyStudyCase.link }).click();
    await expect(this.page.getByRole(elements.bildsyHeading.name, elements.bildsyHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.accessibleText.value)).toBeVisible();
    await expect(this.page.locator(elements.bgImageFirst.value).nth(elements.bgImageFirst.nth)).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.pioneerText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.challengeHeading.name, elements.challengeHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.remodelingText.value)).toBeVisible();
    await expect(this.page.locator(elements.bgImageNthChild.value)).toBeVisible();
    await expect(this.page.getByRole(elements.whatWeDidHeading.name, elements.whatWeDidHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.sourcingText.value)).toBeVisible();
    await expect(this.page.getByText(elements.modelingText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.resultHeading.name, elements.resultHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.pushingText.value)).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  
  async hatchCodingStudyCase() {
    const elements = data.hatchCodingStudyCase.elements;
    await expect(this.page.getByRole(elements.allProjectsHeading.name, elements.allProjectsHeading.locator)).toBeVisible();
    await this.page.getByRole('link', { name: data.hatchCodingStudyCase.link }).click();
    await expect(this.page.getByText(elements.leveragingAIText.value).first()).toBeVisible();
    await expect(this.page.getByRole(elements.thumbnailsImg.name, elements.thumbnailsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.servicesProvidedHeading.name, elements.servicesProvidedHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectTypeText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Managed Services$/ }).nth(1)).toBeVisible();
    await expect(this.page.getByText(elements.industryText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^eLearning$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^AI\/ML$/ }).first()).toBeVisible();
    await expect(this.page.getByRole(elements.theTeamHeading.name, elements.theTeamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.productManagerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productDesignerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.deliveryManagerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.engineeringManagerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.backendDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.frontendDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.devopsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.qaTesterText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.smilingGirlImg.name, elements.smilingGirlImg.locator).first()).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.aiPoweredText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.responsiveHeading.name, elements.responsiveHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.founderText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.challengeHeading.name, elements.challengeHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.soughtText.value)).toBeVisible();
    await expect(this.page.getByText(elements.developedText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.developedHeading.name, elements.developedHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.whatWeDidHeading.name, elements.whatWeDidHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.solveWithAIHeading.name, elements.solveWithAIHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.enablesText.value)).toBeVisible();
    await expect(this.page.getByText(elements.glimpseText.value)).toBeVisible();
    await expect(this.page.getByText(elements.demonstratesText.value)).toBeVisible();
    await expect(this.page.getByText(elements.infallibleText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.solveWithAIChallengesHeading.name, elements.solveWithAIChallengesHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.generateCodeText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.explainWithAIHeading.name, elements.explainWithAIHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.selectText.value)).toBeVisible();
    await expect(this.page.getByText(elements.analyzeText.value)).toBeVisible();
    await expect(this.page.getByText(elements.enhancesText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.explainWithAIChallengesHeading.name, elements.explainWithAIChallengesHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.instructedText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.securityHeading.name, elements.securityHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.youngText.value)).toBeVisible();
    await expect(this.page.getByText(elements.errorsText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.integratingHeading.name, elements.integratingHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.researchText.value)).toBeVisible();
    await expect(this.page.getByText(elements.jsonResponseText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.productGoalsHeading.name, elements.productGoalsHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.conversionRateText.value)).toBeVisible();
    await expect(this.page.getByText(elements.deployText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.keyTechnologiesHeading.name, elements.keyTechnologiesHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.backendPythonText.value)).toBeVisible();
    await expect(this.page.getByText(elements.mobileReactText.value)).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  
  async exiStudyCase() {
    const elements = data.exiStudyCase.elements;
    await expect(this.page.getByRole(elements.allProjectsHeading.name, elements.allProjectsHeading.locator)).toBeVisible();
    await this.page.getByRole('link', { name: data.exiStudyCase.link }).click();
    await expect(this.page.getByText(elements.futureText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.thumbnailsImg.name, elements.thumbnailsImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.servicesProvidedHeading.name, elements.servicesProvidedHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectTypeText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Staff Augmentation$/ }).nth(1)).toBeVisible();
    await expect(this.page.getByText(elements.presentText.value)).toBeVisible();
    await expect(this.page.getByText(elements.industryText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Health-tech$/ }).nth(1)).toBeVisible();
    await expect(this.page.getByRole(elements.teamHeading.name, elements.teamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.frontendWebText.value)).toBeVisible();
    await expect(this.page.getByText(elements.backendDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.mobileDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.qaAnalystText.value)).toBeVisible();
    await expect(this.page.getByText(elements.qaAutomationText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productManagerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.scrumMasterText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productDesignersText.value)).toBeVisible();
    await expect(this.page.getByRole('img', { name: 'Smiling girl studying and' }).first()).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.evidenceBasedText.value)).toBeVisible();
    await expect(this.page.getByText(elements.challengeText.value)).toBeVisible();
    await expect(this.page.getByText(elements.approachedText.value)).toBeVisible();
    await expect(this.page.getByText(elements.legacyCodebaseText.value)).toBeVisible();
    await expect(this.page.getByText(elements.legacyCodebaseDescText.value)).toBeVisible();
    await expect(this.page.getByText(elements.scalabilityConcernsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.lackOfTestsText.value)).toBeVisible();
    await this.scrollAndCheckVisibility(this.page, '[class="c-max-w-container"]');
    await expect(this.page.getByRole(elements.whatWeDidHeading.name, elements.whatWeDidHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.measuringActivityHeading.name, elements.measuringActivityHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.digitalTherapeuticText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.buildingContentHeading.name, elements.buildingContentHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.cmsText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.accessingHealthDataHeading.name, elements.accessingHealthDataHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.participantsText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.complianceHeading.name, elements.complianceHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.notJustAnotherText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.incentivizingUsersHeading.name, elements.incentivizingUsersHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.incentivizeText.value)).toBeVisible();
    await expect(this.page.getByText('Results', { exact: true })).toBeVisible();
    await expect(this.page.getByText(elements.trustedText.value)).toBeVisible();
    await expect(this.page.getByText(elements.obtainMaintainText.value)).toBeVisible();
    await expect(this.page.getByText(elements.establishedEngineeringText.value)).toBeVisible();
    await expect(this.page.getByText(elements.improvedPerformanceText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.keyTechnologiesHeading.name, elements.keyTechnologiesHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.frontendReactJSText.value)).toBeVisible();
    await expect(this.page.getByText(elements.backendNodeText.value)).toBeVisible();
    await expect(this.page.getByText(elements.cmsVueJSText.value)).toBeVisible();
    await expect(this.page.getByText(elements.mobileSwiftText.value)).toBeVisible();
    await expect(this.page.getByText(elements.dataPostgreSQLText.value)).toBeVisible();
    await expect(this.page.getByText(elements.infrastructureAWSText.value)).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  
  async doorSpaceStudyCase() {
    const elements = data.doorSpaceStudyCase.elements;
    await expect(this.page.getByRole(elements.allProjectsHeading.name, elements.allProjectsHeading.locator)).toBeVisible();
    await this.page.getByRole('link', { name: data.doorSpaceStudyCase.link }).click();

    await expect(this.page.locator(elements.h1Heading.value)).toBeVisible();
    await expect(this.page.getByRole(elements.servicesProvidedHeading.name, elements.servicesProvidedHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectTypeText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Managed Service$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator(elements.presentDiv.value).filter(elements.presentDiv.filter).nth(elements.presentDiv.nth)).toBeVisible();
    await expect(this.page.getByText(elements.industryText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^MedTech$/ }).first()).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Healthcare$/ }).first()).toBeVisible();
    await expect(this.page.getByRole(elements.theTeamHeading.name, elements.theTeamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.productDesignerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productManagerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.reactDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.webDevelopersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.backendDeveloperText.value)).toBeVisible();
    await expect(this.page.getByText(elements.qaAnalystText.value)).toBeVisible();
    await expect(this.page.getByText(elements.projectManagerText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.smilingGirlImg.name, elements.smilingGirlImg.locator).first()).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.doorSpaceText.value)).toBeVisible();
    await expect(this.page.locator(elements.doorSpaceP.value).filter(elements.doorSpaceP.filter)).toBeVisible();
    await expect(this.page.getByRole(elements.exceededHeading.name, elements.exceededHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.magicText.value)).toBeVisible();
    await expect(this.page.getByText(elements.founderText.value)).toBeVisible();
    await expect(this.page.getByText(elements.challengeText.value)).toBeVisible();
    await expect(this.page.getByText(elements.healthcareText.value)).toBeVisible();
    await this.scrollAndCheckVisibility(this.page, '[class="c-max-w-container"]');
    await expect(this.page.getByRole(elements.smilingGirlImgNth.name, elements.smilingGirlImgNth.locator).nth(1)).toBeVisible();
    await expect(this.page.getByRole(elements.whatWeDidHeading.name, elements.whatWeDidHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.strategicPartnershipHeading.name, elements.strategicPartnershipHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.beforeRootstrapText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.developingPortalHeading.name, elements.developingPortalHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.connectingEmployeesText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.smilingGirlImg2.name, elements.smilingGirlImg2.locator).nth(2)).toBeVisible();
    await expect(this.page.getByRole(elements.continuousEducationHeading.name, elements.continuousEducationHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.usText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.textExtractionHeading.name, elements.textExtractionHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.newModuleText.value)).toBeVisible();
    await expect(this.page.getByText(elements.resultsText.value, { exact: elements.resultsText.exact })).toBeVisible();
    await expect(this.page.getByRole(elements.keyTechnologiesHeading.name, elements.keyTechnologiesHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.mobileReactText.value)).toBeVisible();
    await expect(this.page.getByText(elements.webAngularText.value)).toBeVisible();
    await expect(this.page.getByText(elements.devOpsAWSText.value)).toBeVisible();
    await expect(this.page.getByText(elements.backendNodeJSText.value)).toBeVisible();
    await expect(this.page.getByText(elements.textExtractionModuleText.value)).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  
  async nonProfitStudyCase() {
    const elements = data.nonProfitStudyCase.elements;
    await expect(this.page.getByRole(elements.allProjectsHeading.name, elements.allProjectsHeading.locator)).toBeVisible();
    await this.page.getByRole('link', { name: data.nonProfitStudyCase.link }).click();
    await expect(this.page.getByRole(elements.nonProfitHeading.name, elements.nonProfitHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.powerOfDesignText.value)).toBeVisible();
    await expect(this.page.locator(elements.bgImageFirst.value).first()).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.globalNonProfitText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.challengeHeading.name, elements.challengeHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.mainChallengeText.value)).toBeVisible();
    await expect(this.page.getByText(elements.chosenPartnerText.value)).toBeVisible();
    await expect(this.page.locator(elements.bgImageNthChild.value)).toBeVisible();
    await expect(this.page.getByRole(elements.whatWeDidHeading.name, elements.whatWeDidHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.closeCollaborationText.value)).toBeVisible();
    await expect(this.page.getByText(elements.keyInsightText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.theResultHeading.name, elements.theResultHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.communityUsersText.value)).toBeVisible();
    await this.moreProjectsCaroussel();
  }
  
  async summumStudyCase() {
    const elements = data.summumStudyCase.elements;
    await expect(this.page.getByRole(elements.allProjectsHeading.name, elements.allProjectsHeading.locator)).toBeVisible();
    await this.page.getByRole('link', { name: data.summumStudyCase.link }).click();
    await expect(this.page.locator(elements.mobileAppSectionImg.value).filter(elements.mobileAppSectionImg.filter).locator(elements.mobileAppSectionImg.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.servicesProvidedHeading.name, elements.servicesProvidedHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectTypeText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Staff Augmentation$/ }).nth(1)).toBeVisible();
    await expect(this.page.locator(elements.dateDiv.value).filter(elements.dateDiv.filter).nth(elements.dateDiv.nth)).toBeVisible();
    await expect(this.page.getByText(elements.industryText.value)).toBeVisible();
    await expect(this.page.locator('div').filter({ hasText: /^Tele-medicine$/ }).nth(1)).toBeVisible();
    await expect(this.page.getByRole(elements.theTeamHeading.name, elements.theTeamHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.productManagerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.productDesignerText.value)).toBeVisible();
    await expect(this.page.getByText(elements.reactNativeDeveloperText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.aboutClientHeading.name, elements.aboutClientHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.basedInUruguayText.value)).toBeVisible();
    await expect(this.page.locator(elements.bgImageParallaxFirst.value).first()).toBeVisible();
    await expect(this.page.getByText(elements.excellentResultsText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.excellentResultsHeading.name, elements.excellentResultsHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.managerText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.challengeHeading.name, elements.challengeHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.existingAppText.value)).toBeVisible();
    await this.scrollAndCheckVisibility(this.page, '[id="w-node-_05a6510d-610b-77fc-88cd-e60b6e25461a-118cb451"]');
    await this.scrollAndCheckVisibility(this.page, '[id="w-node-_45f921ab-feb4-0fb7-44f7-a3374dde823d-118cb451"]');
    await this.scrollAndCheckVisibility(this.page, '[id="w-node-bffe1138-3d67-7c46-11c6-6e1eedeb1886-118cb451"]');
    await this.scrollAndCheckVisibility(this.page, '[id="w-node-bd966c80-9fa0-d187-9fd7-fe83357dcb5f-118cb451"]');
    await expect(this.page.getByRole(elements.whatWeDidHeading.name, elements.whatWeDidHeading.locator)).toBeVisible();
    await expect(this.page.getByRole(elements.customerResearchHeading.name, elements.customerResearchHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.projectStartText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.newProductHeading.name, elements.newProductHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.architectureText.value)).toBeVisible();
    await expect(this.page.locator(elements.bgImageParallaxChild.value)).toBeVisible();
    await expect(this.page.getByRole(elements.newFrontEndHeading.name, elements.newFrontEndHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.researchText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.resultsHeading.name, elements.resultsHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.yearsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.trustedPartnershipText.value)).toBeVisible();
    await expect(this.page.getByText(elements.examAppointmentsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.medicalAppointmentsText.value)).toBeVisible();
    await expect(this.page.getByText(elements.activeUsersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.medicationOrdersText.value)).toBeVisible();
    await expect(this.page.getByText(elements.videoCallsText.value)).toBeVisible();
    await expect(this.page.getByRole(elements.keyTechnologiesHeading.name, elements.keyTechnologiesHeading.locator)).toBeVisible();
    await expect(this.page.getByText(elements.mobileReactText.value)).toBeVisible();
    await this.moreProjectsCaroussel();
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