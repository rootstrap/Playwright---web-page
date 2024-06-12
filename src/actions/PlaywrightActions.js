const { expect } = require('@playwright/test');

class PlaywrightActions {
  constructor(page) {
    this.page = page;
  }

  /**
   * In the page object navigates to the url as argument
   * @param {string} url
   */
  async goto(url) {
    await this.page.goto(url, {
      waitUntil: 'domcontentloaded'
    });
  }

  /**
   * Filters a set of locators by its text content receiving a string or Regex, then Clicks at the first element returned by the filter
   * @param {string} locator
   * @param {string | RegExp} item
   */
  async filterListByText(locator, item) {
    await this.page.locator(locator).filter({ hasText: item }).first().click();
  }

  /**
   * Fills out inside a locator and types Enter to trigger an action in the application.
   * NOTE: Due to flakyness of application recently second Enter has been introduced
   * @param {string} locator
   * @param {string} argument
   */
  async typeAndEnter(locator, argument) {
    const element = this.page.locator(locator);
    await element.waitFor({
      state: 'visible'
    });
    await element.fill(argument);
    await element.press('Enter');
    await element.press('Enter');
  }

  /**
   * Generic method to fillout Datepickers at Arly app
   * @param {Locator} datepickerInput - Wrapper locator for date picker, mostly follows: [bx-attr='event-start-date-input']
   * @param {string} dateTarget - either "today" or date formatted "YYYY-MM-DD"
   */
  async fillDatepicker(datepickerInput, dateTarget) {
    const datepicker = datepickerInput.locator(".vdp-datepicker__calendar:not([style*='display: none'])");
    let dayMonth = '.day__month_btn';
    let next = '.next';
    let today = '.today';

    await datepickerInput.click();

    if (dateTarget === 'today') {
      await datepicker.locator(today).click();
    } else {
      const date = new Date(dateTarget);
      const month = Intl.DateTimeFormat('en', { month: 'short' }).format(date);
      const formattedMonthYear = `${month} ${date.getFullYear()}`;
      let monthYearSelected;
      do {
        monthYearSelected = await datepicker.locator(dayMonth).textContent();
        if (formattedMonthYear === monthYearSelected) {
          break;
        }
        await datepicker.locator(next).click();
      } while (formattedMonthYear !== monthYearSelected);

      await datepicker.locator(`//span[.='${date.getDate() + 1}']`).click();
    }
  }

  async waitForLoadSpinner() {
    await expect(this.page.locator('.bouncing-preloader .uk-icon')).toBeHidden();
  }
}

module.exports = PlaywrightActions;
