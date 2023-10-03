# playwrightAutomation
Playwright Automation with JavaScript and BDDFramework with Cucumber

Verify Node installed

node -v

If node is not present download from below and install : 

https://nodejs.org/en 

Install npm (Node Package Manager) 

npm install -g npm

--Check npm installed : npm -v

Install Dependencies

    npm install

Installing Playwright

    npm init playwright@latest
    
Install cucumber-js 

    npm install @cucumber/cucumber

Run below command in terminal 

cp .env.example .env
    
Running the Test

If we want to run the feature file in features folder

    npm run test

Running Specific Feature file using tags :

    For viaSearch.feature run : npm run testKeywordSearch

    For viaCategory.feature run : npm run testCategorySearch
    
#Assumstion 

-- For Scenario 1 Item Location filter was not showing anything so I skipped adding that as filter and added Condition filters

-- Some time user clicks on See All from Shop By Brand step from viaCategory.feature is failing as ShopByBrandSeeAll locator is not accessable , tried multiple locators but seems issue with enviorment as same locator is working when runing same test again .
