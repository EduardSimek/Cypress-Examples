/// <reference types="cypress" /> 

const iterNumber = 10

for (let i = 0; i < iterNumber; i++){
    describe("Verifying variables, cypress commands, test number: " +i, () => {

        const URL = "https://www.automationteststore.com"
    
         
            it("Navigating to specific product pages",() => {
                cy.visit(URL)
                const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
                makeupLink.click() 
                const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")      
                skincareLink.click()
            });
          
        
        
        
    })
}
