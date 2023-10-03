const { Given, When, Then, defineStep } = require('@cucumber/cucumber');
const { HomePage } = require('../page-objects/homePage');


const homePage  = new HomePage()

When('user enter {string} in search box', async  (searchProduct) =>{
    
    return await homePage.enterProductToSearch(searchProduct);
  });

When(/^user select "([^"]*)" from All Categories drop down list and Click Search/, async (dropDownValue) =>{
    
    return await homePage.selectCategoryFromDropDown(dropDownValue);
  });

  Then('verify 1st result contains {string} in Description', async (searchProduct) =>{
    
    return await homePage.verifyProduct(searchProduct);
  });

