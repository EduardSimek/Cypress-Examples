/// <reference types="cypress" />

describe("Handle Javascript alerts", () => {
    const URL = "https://www.webdriveruniversity.com/Popup-Alerts/index.html"


    
    it ("Confirm JS alerts contains the correct text", () => {
        cy.visit(URL)
        //cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true})

        cy.get("#button1").click()

        cy.on("window:alert", (str) => {
            expect(str).to.equal("I am an alert box!")
        })

        
    })

    it ("Validate JS confirm alert box works correctly when clicking ok", () => {
        cy.visit(URL)
        //cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true})

        cy.get("#button4").click()

        cy.on("window:confirm", (str) => {
            return true
        })

        cy.get("#confirm-alert-text").contains("You pressed OK!")

        
    })

    it ("Validate JS confirm alert box works correctly when clicking kensl", () => {
        cy.visit(URL)
        //cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true})

        cy.get("#button4").click()

        cy.on("window:confirm", (str) => {
            return false
        })

        cy.get("#confirm-alert-text").contains("You pressed Cancel!")

        
    })

    it ("Validate JS confirm alert box using a stub", () => {
        cy.visit(URL)
        //cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true})

        const stub = cy.stub()
        cy.on("window:confirm", stub)

        cy.get("#button4").click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith("Press a button!")
        }).then(() => {
            return true;
        }).then(() => {
            cy.get("#confirm-alert-text").contains("You pressed OK!")
        })

        

        
    })

})