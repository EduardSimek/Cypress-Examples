/// <reference types="cypress" />

describe("Verify checkboxex via webdriveruni", () => {

    beforeEach(function () {
        cy.navigateTo_Webdriver_Checkbox_Page()

    })

    // launching cypress command - ./node_modules/.bin/cypress open
    

    it("Check and validate checkbox", () => {
        //cy.visit(URL)
        //cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true })
        //cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked")

        cy.get("#checkboxes > :nth-child(1) > input").as("option-1")
        //cy.get("@option-1").check() 
        cy.get("@option-1").check().should("be.checked")
    });

    it("Unček and validate checkbox - sam čelindž", () => {
        //cy.visit(URL)
        //cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true })

        cy.get(":nth-child(5) > input").as("option-3")
        cy.get("@option-3").uncheck().should("not.be.checked")
    });

    it("ček multipl čekboxex", () => {
        //cy.visit(URL)
        //cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true })

        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should("be.checked")

    });



})