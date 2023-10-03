const { test, expect } = require("chai");
const { chai } = require('chai');
const { chromium } = require("playwright");


class BasePage  {


  constructor(page) {
    this.page = page;

  }

  async open(Url) {

    try {
      
      await page.goto(`${Url}`);
    } catch (error) {
      console.log(`Error navigating to ${Url} : ${error.message}`)
    }
  }

  async wait() {

    return await page.waitForTimeout(1000);

  }
  async waitAndClick(selector) {
    await page.waitForSelector(selector);
    return await page.click(selector);

  }

  async selectValueFromDropdown(selector, value) {

    const dropdown = await page.locator(selector);
    dropdown.click({ force: true });
  return await dropdown.selectOption({ label: value, setTimeout: 10000 });
  
  }

 async verifyElementContainText(selector, text) {
    await page.waitForSelector(selector);
    const textValue = await page.innerText(selector);
    var textfromUI = textValue.toUpperCase();
    var textfromfeaturefile = text.toUpperCase();
    return expect(textfromUI).to.be.contain(textfromfeaturefile);

  }

  async verifyElementContainTextInAttribute(selector, text) {
    await page.waitForSelector(selector);

    const element = await page.locator(selector);
    const elementAttributeText = await element.getAttribute('data-aspecttype');
    console.log("elementAttributeText "+elementAttributeText)
    var textfromUI = elementAttributeText.toUpperCase();
    var textfromENVfile = text.toUpperCase();
    return expect(textfromUI).to.be.contain(textfromENVfile);

  }


}

module.exports = {BasePage}; 