/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe("Test Contact Us from via Automation Test Store", () => {

    const TEXT = "Your enquiry has been successfully sent to the store owner!"
    const URL = "https://www.automationteststore.com"
    const URL2 = "http://www.webdriveruniversity.com/Contact-Us/contactus.html"
    const Message = "WebDriver | Contact Us"
    const ErrorMessage = "Error: all fields are required"

    it.only ("Should be able to submit a succesfull submission via contact us form, but with reset button", () => {
        cy.visit(URL)
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
        })
        //cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type("Joe")
        const emailInput = cy.get('#ContactUsFrm_email')

        emailInput.type("LimonadovySamozrejmeAkyIny@gmail.com")
        emailInput.should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Nevjem što man vjac dodať, soms uplne f rospakoch")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', TEXT)

    });

    it ("Should be able to submit a succesfull submission via contact us form, but with submitt button", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("Joe")
        cy.get('#ContactUsFrm_email').type("LimonadovySamozrejmeAkyIny@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("Nevjem što man vjac dodať, soms uplne f rospakoch")
        cy.get('.col-md-6 > .btn').click()

    });  // launching cypress command - ./node_modules/.bin/cypress open
    // launching cypress command via terminal ty debilko -> ./node_modules/.bin/cypress run --spec cypress/e2e/kiwi-assignment/kiwi.js*

    it ("Should be able to submit a succesfull submission via contact us form, but not all the fields are fulfilled", () => {
        cy.visit(URL2)
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', Message)
        cy.url().should('include', 'contactus.html')
        cy.get('[name="first_name"]').type("Joe")
        //cy.get('[name="last_name"]').type("LimonadovySamozrejmeAkyIny")
        cy.get('[name="email"]').type("LimonadovySamozrejmeAkyIny@gmail.com")
        cy.get('[name="message"]').type("Nevjem što man vjac dodať, soms uplne f rospakoch")
        cy.get("[type='submit']").click()
        //cy.get('.element_error').contains(ErrorMessage)
        print("Chybe priezvisko ty idiota!!!!!")

    });

    it ("Should be able to submit a succesfull submission via contact us form, and that is", () => {
        cy.visit(URL2)
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
        
        

    });

   

})