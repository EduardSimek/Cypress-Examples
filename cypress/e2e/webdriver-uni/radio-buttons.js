/// <reference types="cypress" />

describe("Verify radiobuttons via webdriveruni", () => {

    const URL = "http://www.webdriveruniversity.com"
    beforeEach(function () {
        cy.visit(URL)
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true })
    })

    // launching cypress command - ./node_modules/.bin/cypress open


    it("Check and validate radiobuttons", () => {
        cy.get("#radio-buttons").find("[type='radio']").first().check()
        cy.get("#radio-buttons").find("[type='radio']").eq(1).check()

    });

    it("Validate the states of specific radio buttons", () => {

        cy.get("[value='lettuce']").should("not.be.checked")
        cy.get("[value='pumpkin']").should("be.checked")

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should("be.checked")
        cy.get("[value='pumpkin']").should("not.be.checked")

        cy.get("[value='cabbage']").should("be.disabled")

    });




})