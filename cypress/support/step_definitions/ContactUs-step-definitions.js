//import { Given } from "@badeball/cypress-cucumber-preprocessor"; 
import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
//import { first } from "cypress/types/lodash";

const URL = "https://www.webdriveruniversity.com"
const firstName = "Džov", lastName = "Limonadovy", email = "limonadovysamozrejmeakyiny@gmail.com"
const comment = "Ta ja neznaju što mam vjac dodať....učim sa sajpress postupne dakuštičko"

Given('I navigate to the webdriveruniversity homepage', () => {
    cy.visit(URL)
})

When("I click on the contact us button", () =>{
    cy.get("#contact-us").click()
})

And("I type a first name", () =>{
    cy.get("input[name='first_name']").type(firstName)
})

And("I type a last name", () =>{
    cy.get("input[placeholder='Last Name']").type(lastName)
    
})

And("I enter an email adress", () =>{
    cy.get("input[name='email']").type(email)
    
})

And("I type a comment", () =>{
    cy.get("textarea[placeholder='Comments']").type(comment)
    
})

And("I click on the submit button", () =>{
    cy.get("input[type='submit']").click()
    
})

Then("I should be presented a succesfull contact us submission message", () => {
    const H1Text = cy.get("h1").should("have.text", "Thank You for your Message!")
            H1Text.then(($h1Text) => {
                const _H1 = $h1Text.text()
                cy.log("Text " +_H1+ " je správne zvalidovaný.")
            })
})