/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe("Test Contact Us from via Automation Test Store", () => {
    before(function () {
        cy.fixture("user-details").as("user")
    })
    if ("Should be able to submit a succesfull submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com") 
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: " +linkText.text())
        })
        cy.get("@user").then((user) => {
            cy.get("#ContactUsFrm_first_name").type(user.first_name)
            cy.get("#ContactUsFrm_email").type(user.email)
        })

        cy.get("#ContactUsFrm_email").should("have.attr", "name", "email") 
        cy.get("#ContactUsFrm_enquiry").type("Do you provide additional discount on bulk orders?") 
        cy.get("button[title='Submit']").click() 
        cy.get(".mb40 > :nth-child(3)").should("have.text", "Your enquiry has been succesfully sent to the store owner!")
        cy.log("Test has completed")
        
    });
   

})