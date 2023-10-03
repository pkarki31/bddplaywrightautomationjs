module.exports = {

AcceptPrompt:'#gdpr-banner-accept' ,
ShopByCategory:'#gh-shop-a',
ElectronicsCellPhoneSmartWatchAccessories:'text=Cell Phones, Smart Watches & Accessories',
CellPhonesandSmartphones:'text=Cell Phones & Smartphones',
//ShopByBrandSeeAll:'button.btn.btn--small >> nth=1',
//ShopByBrandSeeAll:'div.b-carousel__seeall >> nth=1',
ShopByBrandSeeAll:'.b-carousel__seeall >> text=See All',
//ShopByBrandSeeAll:'//*[@id="mainContent"]/div[2]/section[1]/div[1]/div[2]/button',
//ScreenSize:'//*[@id="c6-mainPanel-Screen%20Size"]',
ScreenSize:'text=Screen Size',
ScreenSizeCheckBox:'input[type="checkbox"] >> nth=2',
//Price:'#c6-mainPanel-price',
//Price:'//*[@id="c4-mainPanel-price"]', 
Price:'//div[contains(@id,"mainPanel-price")]',
Condition:'//div[contains(@id,"mainPanel-condition")]',
ConditionCheckBox:'input[type="checkbox"] >> nth=1',
MinPriceInput:'input[type="text"] >> nth=1',
MaxPriceInput:'input[type="text"] >> nth=2',
SelectedFilterFirst:'//*[@id="c4-tray-4[0[0]]"]',
SelectedFilterSecond:'//*[@id="c4-tray-4[0[1]]"]',
SelectedFilterThird:'//*[@id="c4-tray-4[0[2]]"]',
SearchInput:'input#gh-ac.gh-tb.ui-autocomplete-input',
AllCategoriesDropDown:'#gh-cat',
SearchButton:'input[type="submit"] >> text=Search',
SearchResult:'.srp-results.srp-list.clearfix > li:nth-child(2)'

};



