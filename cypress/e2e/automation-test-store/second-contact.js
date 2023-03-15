/// <reference types="cypress" /> 

describe("Test Contact Us form via WebdriverUni", () => {

    const Message = "WebDriver | Contact Us"

    
    it("Should be able to submit a succesfull submission via contact us form", () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#contact-us").invoke("removeAttr", "target").click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', Message)
        cy.url().should('include', 'contactus.html')
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("LimonadovySamozrejmeAkyIny")
        cy.get('[name="email"]').type("LimonadovySamozrejmeAkyIny@gmail.com")
        cy.get('[name="message"]').type("Nevjem što man vjac dodať, soms uš akoše dakuštičko uplne vof rospakoch")
        cy.get("[type='submit']").click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        console.log("Test has completed")
        cy.log("Sam mesidž for ju")

    })

    it("Should be able to submit a succesfull submission via contact us form", () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#contact-us").invoke("removeAttr", "target").click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', Message)
        cy.url().should('include', 'contactus.html')
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("LimonadovySamozrejmeAkyIny")
        cy.get('[name="email"]').type("LimonadovySamozrejmeAkyIny@gmail.com")
        cy.get('[name="message"]').type("Nevjem što man vjac dodať, soms uš akoše dakuštičko uplne vof rospakoch")
        cy.get("[type='submit']").click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        console.log("Test has completed")
        cy.log("Sam mesidž for ju")
        
    })
})