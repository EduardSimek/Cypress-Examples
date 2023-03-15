/// <reference types="cypress" /> 

describe("Cypress web security", () => {

    const URL1 = "https://www.webdriveruniversity.com"
    const URL2 = "http://www.google.com"
    const String = "Validate visiting two different domains"
    
    it.skip(String, () =>{
       cy.visit(URL1) 
       cy.visit(URL2)
    })

    it("Validate visiting two different domains via user actions", () =>{
        cy.visit(URL2) 
        cy.get("#automation-test-store").invoke("removeAttr", "target").click()
        
    })

    it ("Origin command", () => {
        cy.origin("webdriveruniversity.com", () => {
            cy.visit("/")
        })

        cy.origin("automationteststore.com", () => {
            cy.visit("/")
        })
        

        //cy.visit("https://www.webdriveruniversity.com")
        //cy.visit("https://www.selectors.webdriveruniversity.com")
    })
})