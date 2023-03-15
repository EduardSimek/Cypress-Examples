/// <reference types="cypress" />

describe("Test mouse actions", () => {

    // launching cypress command - ./node_modules/.bin/cypress open
        const URL = "http://www.webdriveruniversity.com"
    
        it("Scroll element into view", () => {
            cy.visit(URL)
            cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})
                 
        });

        it("I should be able to drag and drop a draggable item", () => {
            cy.visit(URL)
            cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})

            cy.get("#draggable").trigger("mousedown", {which: 1})

            cy.get("#droppable").trigger("mousemove").trigger("mouseup", {force:true})
                 
        });

        it("I should be able to perform a double mouse click", () => {
            cy.visit(URL)
            cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})
            cy.get("#double-click").dblclick()
                         
        });

        it.only("I should be able hold down the left mouse click button on a given element", () => {
            cy.visit(URL)
            cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})
            cy.get("#click-box").trigger("mousedown", {which: 1}).then(($element) => {
                expect($element).to.have.css("background-color", "rgb(0, 255, 0)")
            })
                         
        });

        

        
    
})