@KeywordSearch
Feature: : Search Product via Search Field 


    As a user 
    I want to search a product using Search Macbook Product  
    

    Scenario Outline: Verify searched product result should contains "Macbook" .
        Given go to ebay site 
        When user accept the cookies
        When user enter "<Product>" in search box 
        When user select "<Category>" from All Categories drop down list and Click Search
        Then wait for 3 seconds
        Then wait for 3 seconds
        Then verify 1st result contains "<Product>" in Description




    Examples:
            | Product | Category                       |
            | macbook | Computers/Tablets & Networking |