const playwright = require("playwright")
const { chromium } = require('playwright');
const expect = require('chai').expect
const {Before, After, BeforeAll, AfterAll} = require("@cucumber/cucumber");


BeforeAll(async () =>{

console.log("Lanch Browser")
global.browser = await playwright['chromium'].launch({ headless: false })

})

AfterAll(async () => {

console.log("Close Browser")
await global.browser.close()

})


Before(async () => {
    console.log("Create new context and page")
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage() 
   
})

After(async () => {
    console.log("Close context and Page")
    await global.page.close()
    await global.context.close()

})
