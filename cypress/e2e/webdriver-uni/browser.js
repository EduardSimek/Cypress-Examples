/// <reference types="cypress" />

describe("Validate Webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        const URL = "http://www.webdriveruniversity.com"
        cy.visit(URL) 
        cy.get("#contact-us").invoke("removeAttr", "target").click({force:true}) 
        cy.url().should("include", "contactus")

        cy.go("back")
        cy.reload() 

        cy.go("forward")
        cy.url().should("include", URL)

        cy.go("forward") 
        cy.url("include", "contactus")

        cy.go("back")
        cy.get("#login-portal").invoke("removeAttr", "target").click({force:true}) 
        cy.url().should("include", "Login-Portal")
        cy.go("back")

        cy.get("#to-do-list").invoke("removeAttr", "target").click({force:true})
        cy.url().should("include", "To-Do-List")
        
    })

   
})
