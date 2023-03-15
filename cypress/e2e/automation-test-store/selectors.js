/// <reference types="Cypress" /> 


describe ("Selector examples", () => {

    const URL_PAGE = "http://www.webdriveruniversity.com/Contact_us/contactus.html"
    it.only("Examples of Selectors via WebdriverUni Contact Us Page", () => {
        cy.visit(URL_PAGE) 
        //cy.get("input")

        cy.get("input[name='first_name']").type("Joško Púčik akože je moje meno")
        cy.get("input[id='ContactUsFrm_email']").type("jozefoslav.phucik@janevjemusakaadresasatovola.cz")
        cy.get("div[id='field_13']").type("Toto je chiba, poslušne hlásin")
        cy.get(button[type = 'reset']).click()
    })



})