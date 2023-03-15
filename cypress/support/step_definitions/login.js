import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

let stub

Before(() => {
    cy.log("Executed before step") 
    stub = cy.stub()
})


const URL = "http://www.webdriveruniversity.com/Login-Portal/index.html"

Given('I access the Webdriveruniversity Login Portal page', () => {
    cy.visit(URL)
})

When("I enter a username {word}", (userName) =>{
    cy.get("#text").type(userName);
})

And("I enter a password {word}", (userName) =>{
    cy.get("#password").type(userName);
})

And("I click on the login button", () =>{
    cy.get("#login-button").click()
    cy.on('window:alert', stub)
    
})

Then("I should be presented with the following message {word} {word}", (message, message2) => {
    const expectedMsg = message + " " + message2
    cy.log(expectedMsg)
    cy.log(stub.getCall(0)) 
    expect(stub.getCall(0)).to.be.calledWith(expectedMsg)
})


