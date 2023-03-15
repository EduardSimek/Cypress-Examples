/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      const URL = cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
      })

      it("Calculating the total age ", () => {
        var userDetails = []
        let numb = 0
        cy.get("#thumbnail-1 td").each(($el, index, $list) => {
            userDetails[index] = $el.text()
        }).then(() => {
            var i
            for(i = 0; i<userDetails.length; i++){
                if (Number(userDetails[i])){
                    numb += Number(userDetails[i])
                    //cy.log(userDetails[i])
                }
            }
            cy.log("Found total age: " + numb)
            expect(numb).to.eq(322)
        })
      });

      it("Calculate and assert the age of a given user based on last name", () => {
        //#thumbnail-1 tr td:nth-child(1) - mena
        //#thumbnail-1 tr td:nth-child(2) - priezviska
        //#thumbnail-1 tr td:nth-child(3) - vek

        const locatingNames = "#thumbnail-1 tr td:nth-child(1)" 
        const locatingLastNames = "#thumbnail-1 tr td:nth-child(2)"
        const locatingAges = "#thumbnail-1 tr td:nth-child(3)"

        cy.get(locatingLastNames).each(($el, index, $list) => {
            const text = $el.text() 
            if (text.includes("Woods")){
                cy.get(locatingLastNames).eq(index).next().then(function(age){
                    const userAge = age.text() 
                    expect(userAge).to.equal("80")
                })
            }

        })
      });
    
      
  });