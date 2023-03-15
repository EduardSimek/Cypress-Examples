import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO"
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO"


/// <reference types="Cypress" />

describe("Test Contact Us for via WebdriverUni", () => {
    const PassedMsg = "Thank You for your Message!", errorMsg = "Error: Invalid email address"
    const PassedMsg2 = "Ta ja neznaju što man vjac dodať,jedine jak šebe mam naučic toten sajpres?"
    const homepage_PO = new Homepage_PO() 
    const contact_Us_PO = new Contact_Us_PO() 
    Cypress.config("defaultCommandTimeout", 20000)

    before(function () {
        cy.fixture("example").then(function(data){
            globalThis.data = data
        })
    })

    beforeEach(function () {
        homepage_PO.visitHomepage()
        homepage_PO.clickOn_ContactUs_Button()
    })

    it("Should be able to submit a succesfull submission via contact us form", () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.title().should("include", "WebDriver | Contact Us")
        cy.url().should("include", "contactus")
        contact_Us_PO.contactFrom_Submission(Cypress.env("first_name"), data.last_name, data.email, "Ja nevjem čo vjac dodať", "h1", PassedMsg)
    });

    it("Should not be able to submit a succesfull submission via contact us form as all fields are required", () => {
        contact_Us_PO.contactFrom_Submission(data.first_name, data.last_name, " ", PassedMsg2, "body", errorMsg)
    });

    


})