const { expect, assert } = require("chai");
const { chromium, test } = require('playwright');
const { BasePage } = require("../page-objects/basePage");
const { AcceptPrompt , ShopByCategory,ElectronicsCellPhoneSmartWatchAccessories,CellPhonesandSmartphones,
    ShopByBrandSeeAll,ScreenSize,ScreenSizeCheckBox,Price,MinPriceInput,MaxPriceInput,SelectedFilterFirst,
    SelectedFilterSecond,SelectedFilterThird,SearchInput,
    AllCategoriesDropDown,SearchButton,SearchResult,Condition,ConditionCheckBox
 } = require("../pagelocators/locators");
 require('dotenv').config();





class HomePage extends BasePage {

    constructor(page) {
        super(page);
    }

    async accpetCookies() {
        return await page.locator(AcceptPrompt).click()
    }

    async pause() {

        return await super.wait();

    }

    async clickShopByCategory(){

        return await super.waitAndClick(ShopByCategory);
    }

    async clickElectronicsCellPhoneAccessories(){

        return await super.waitAndClick(ElectronicsCellPhoneSmartWatchAccessories);
    }

    async clickCellPhonesandSmartphones(){

         await super.waitAndClick(CellPhonesandSmartphones);
        
    }

    async clickSeeAllShopByBrand(){
    
        return await super.waitAndClick(ShopByBrandSeeAll);
        
    }

    async clickScreenSize(){

        return await super.waitAndClick(ScreenSize);
    }

    async clickScreenSizeCheckbox(){

        return await super.waitAndClick(ScreenSizeCheckBox);
    }

    async clickPriceTab(){

        return await super.waitAndClick(Price);
    }

    async enterMinAndMaxPrice(minPrice,maxPrice){

        await page.locator(MinPriceInput).click();
        
        await page.locator(MinPriceInput).fill(minPrice);

        await page.locator(MaxPriceInput).click();
        
        await page.locator(MaxPriceInput).fill(maxPrice);
    }

    async enterProductToSearch(searchProduct){

        await page.locator(SearchInput).click();
        
        await page.locator(SearchInput).fill(searchProduct);

    }

    async selectCategoryFromDropDown(selectValue){

     await super.selectValueFromDropdown(AllCategoriesDropDown,selectValue);

    return await super.waitAndClick(SearchButton);

    }

    async verifyProduct(searchedProduct){

     return await super.verifyElementContainText(SearchResult,searchedProduct)
   }

   async selectConditionFilter(){

    await super.waitAndClick(Condition)
    return await super.waitAndClick(ConditionCheckBox)
  }

  async verifyAppliedFilters(){

   // Geting Attribut for selected filters 

   await super.verifyElementContainTextInAttribute(SelectedFilterFirst,process.env.FIRST_FILTER)
    // const firstFilter = await page.locator(SelectedFilterFirst);
    // const firstFilterAttribute = await firstFilter.getAttribute('data-aspecttype');
    // console.log("firstFilterAttribute : "+firstFilterAttribute)
    

   await super.verifyElementContainTextInAttribute(SelectedFilterSecond,process.env.SECOND_FILTER)
    // const secondFilter = await page.locator(SelectedFilterSecond);
    // const secondFilterAttribute = await secondFilter.getAttribute('data-aspecttype');
    // console.log("secondFilterAttribute : "+secondFilterAttribute)

    await super.verifyElementContainTextInAttribute(SelectedFilterThird,process.env.THIRD_FILTER)
    // const thirdFilter = await page.locator(SelectedFilterThird);
    // const thirdFilterAttribute = await thirdFilter.getAttribute('data-aspecttype');
    // console.log("thirdFilterAttribute : "+thirdFilterAttribute)
   
  }


    
}
module.exports = { HomePage }