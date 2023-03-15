/// <reference types="cypress" /> 
/// <reference types="cypress-xpath" />

describe("Inspect automation test store items using chain of commands", () =>{
    const URL = "https://www.automationteststore.com/"
    it("Click on the first item using item header", () => {
        cy.visit(URL)
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    });

    it.only("Click on the first item using item text", () => {
        cy.visit(URL)
        cy.get('.prdocutname').contains('BeneFit Girl Meets Pearl').click().then(function(itemHeaderText) {
            console.log("Selected the following item: " + itemHeaderText.text())
            cy.log("Selected the following item: " + itemHeaderText.text())
        })
    });

    it("Click on the first item using index ", () => {
        cy.visit(URL)
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
})