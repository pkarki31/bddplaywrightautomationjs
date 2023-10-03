const { Given, When, Then, defineStep } = require('@cucumber/cucumber');
const { HomePage } = require('../page-objects/homePage');
require('dotenv').config();



const homePage  = new HomePage()

Given('go to ebay site', async() => {
    console.log("url: "+process.env.URL)
    await homePage.open(process.env.URL);

  });

  When ('wait for 3 seconds', async () => {
    await homePage.pause()

  });

  When('user accept the cookies', async () => {
    
    await homePage.accpetCookies()
  });

  Then('user clicks on Shop by Category', async () =>{

    await homePage.clickShopByCategory()
    
  });

  Then('user clicks on Cell Phones, Smart Watches & Accessories under Electronics', async () =>{
     
    await homePage.clickElectronicsCellPhoneAccessories()

  });

  Then('user clicks on Cell Phones & Smartphones', async () =>{
    
    await homePage.clickCellPhonesandSmartphones()
  });

  Then('user clicks on See All from Shop By Brand', async () =>{
    
    await homePage.clickSeeAllShopByBrand()
    
  });

  Then('user clicks on Screen Size', async () =>{
    
    await homePage.clickScreenSize()
  });

  Then('user select Screen size by clicking Check box', async () =>{
    
    await homePage.clickScreenSizeCheckbox()
  });

  Then('user clicks on Price tab', async () =>{
    
    await homePage.clickPriceTab()
  });

  Then('user enter {string} and {string}', async (minPrice, maxPrice) =>{
     
    await homePage.enterMinAndMaxPrice(minPrice,maxPrice)
  });

  Then('user go to Condition filters and select Check box', async () =>{
    
    await homePage.selectConditionFilter()
  });

  Then('verify applied filters contain Screen Size , Price and Condition', async () =>{
    
    await homePage.verifyAppliedFilters()
  });


