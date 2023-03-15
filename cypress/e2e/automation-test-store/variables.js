/// <reference types="cypress" /> 

//const { first } = require("cypress/types/lodash");

describe("Verifying variables, cypress commands ", () => {

    const URL = "https://www.automationteststore.com"
    const URL2 = "https://automationteststore.com/index.php?rt=content/contact"
    
    //Takto sa to nerobi do psej matere
    it("Navigating to specific product pages", () => {
        cy.visit(URL)
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        makeupLink.click() 
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")      
        skincareLink.click()
    });

    //Takto sa to robi do psej matere
    it("Navigating to specific product pages", () => {
        cy.visit(URL)
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()     
       
    });

    it("Navigating to specific product pages", () => {
        cy.visit(URL)
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        //Following code will fail
        //const header = cy.get("h1 .maintext")  
        //cy.log(header.text())   

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " +headerText)
            expect(headerText).is.eq('Makeup')
        })
       
    });

    it.only("Validate properties of the contact us page", () => {
        cy.visit(URL2)
        // Uses cypress commands and chaining 
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //JQuery approach 
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
        })

        //Embedded commands(Closure) 
        cy.get("#field_11").then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
        })
  
    });

   
       
 });


    


