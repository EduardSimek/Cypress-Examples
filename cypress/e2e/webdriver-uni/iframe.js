/// <reference types="cypress" />

describe("Handling IFrame & Modals", () => {

// launching cypress command - ./node_modules/.bin/cypress open
    const URL = "/"

    it ("Handle webdriveruni and modal", () => {
        cy.visit(URL)
        cy.get("#iframe").invoke("removeAttr", "target").click({force:true})
        cy.get("#frame").then($iframe => {
            const body = $iframe.contents().find("body")
            cy.wrap(body).as("iframe")
        })

        cy.get("@iframe").find("#button-find-out-more").click()
        cy.get("@iframe").find("#myModal").as("modal")

        cy.get("@modal").should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include("Welcome to webdriveruniversity.com we sell a wide range of electrical good") 
        })

        cy.get("@modal").contains("Close").click()
        
    });

})