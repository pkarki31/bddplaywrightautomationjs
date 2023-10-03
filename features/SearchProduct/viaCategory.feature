@CategorySearch
Feature: : Search Product via Category 


    As a user 
    I want to search a product using multiple filter  
    

    Scenario Outline: Verify that the filter tags are applied    
        Given go to ebay site 
        Then user accept the cookies
        Then user clicks on Shop by Category 
        Then user clicks on Cell Phones, Smart Watches & Accessories under Electronics
        Then user clicks on Cell Phones & Smartphones
        Then user clicks on See All from Shop By Brand
        Then user clicks on Screen Size
        Then user select Screen size by clicking Check box
        Then user clicks on Price tab
        When user enter "<MinPrice>" and "<MaxPrice>"
        Then user go to Condition filters and select Check box
        Then verify applied filters contain Screen Size , Price and Condition 

        


        
        
     Examples:
            | MinPrice  | MaxPrice | 
            | 100       | 300      |
       
        
            



