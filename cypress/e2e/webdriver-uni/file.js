/// <reference types="Cypress" /> 

describe("Test File Upload via webdriveruni", () => {


    it("Upload a file...", () =>{
        const URL = cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({force:true})
        cy.get("#myFile").selectFile("cypress/e2e/webdriver-uni/cv.png")
        cy.get("#submit-button").click()
    })

    it ("Upload No file...", () => {
        const URL = cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({force:true})
        cy.get("#submit-button").click()
    })
})