/// <reference types="Cypress" />

describe("Test Contact Us for via WebdriverUni", () => {
    const URL = "http://www.webdriveruniversity.com/Contact-Us/contactus.html"

    beforeEach(function () {
        cy.visit(URL)
        cy.get("#contact-us").invoke("removeAttr", "target").click({force:true})
    })

    before(function () {
        cy.fixture("example").then(function(data){
            globalThis.data = data
            
        })
    })

    it("Should be able to submit a succesfull submission via contact us form", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click({force: true})
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type("Ja nevjem čo vjac dodať")
        cy.get('[type="submit"]').click()

    });

    it("Should not be able to submit a succesfull submission via contact us form as all fields are required", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Limonadovy")
        cy.get('textarea.feedback-input').type("Ja nevjem čo vjac dodať")
        cy.get('[type="submit"]').click()
    });
//////////////////////////////////////////////


    it("Should be able to submit a succesfull submission via contact us form (Podla kurzu)", () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Limonadovy")
        cy.get('[name="email"]').type("joelimonadovy@centrum.sk")
        cy.get('textarea.feedback-input').type("Ja nevjem čo vjac dodať")
        cy.get('[type="submit"]').click()

    });

    it("Should not be able to submit a succesfull submission via contact us form as all fields are required (Podla kurzu)", () => {
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Limonadovy")
        cy.get('textarea.feedback-input').type("Ja nevjem čo vjac dodať")
        cy.get('[type="submit"]').click()
    });


})