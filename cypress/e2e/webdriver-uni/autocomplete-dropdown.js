describe("Verify autocomplete dropdown lists via webdriveruni", () => {

    // launching cypress command - ./node_modules/.bin/cypress open
        const URL = "http://www.webdriveruniversity.com"

        const FirstID = "#myInputautocomplete-list > *", button_cl = "#submit-button", myInputID = "#myInput"
    
        it("Select specific product via autocomplete list", () => {
            cy.visit(URL)
            cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click({force:true})

            cy.get(`${myInputID}`).type("A") 
            cy.get(`${FirstID}`).each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = "Avacado"

                if (prod === productToSelect) {
                    $el.trigger("click")

                    cy.get(`${button_cl}`).click()
                    cy.url().should("include", productToSelect)
                }
            })

            cy.get(`${myInputID}`).type("G") 
            cy.get(`${FirstID}`).each(($el, index, $list) => {
                const prod2 = $el.text() 
                const productToSelect2 = "Grapes"

                if (prod2 === productToSelect2){
                    //$el.click()
                    $el.trigger("click")

                    cy.get(`${button_cl}`).click()
                    cy.url().should("include", productToSelect2)
                }

            }).then(() => {
                cy.get(`${myInputID}`).type("G") 
                cy.get(`${FirstID}`).each(($el, index, $list) => {
                    const prod2 = $el.text() 
                    const productToSelect2 = "Grapes"
    
                    if (prod2 === productToSelect2){
                        $el.click()
    
                        cy.get(`${button_cl}`).click()
                        cy.url().should("include", productToSelect2)
                    }
    
            })


            
        })
              
            
        });

})