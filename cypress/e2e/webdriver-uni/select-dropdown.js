/// <reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {

    // launching cypress command - ./node_modules/.bin/cypress open
        const URL = "http://www.webdriveruniversity.com"
    
        it("Select specific values via select dropdown lists", () => {
            cy.visit(URL)
            cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true})

            cy.get("#dropdowm-menu-1").select("c#")
            cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng")
            cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery")

            cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven")
            cy.get("#dropdowm-menu-2").select("TestNG").contains("TestNG")


            
            
        });

        it.only("Select specific values via select dropdown lists (Should have value)", () => {
            cy.visit(URL)
            cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true})


            cy.get("#dropdowm-menu-1").select("java").should("have.value", "java")
            cy.get("#dropdowm-menu-1").select("c#").should("have.value", "c#")
            cy.get("#dropdowm-menu-1").select("python").should("have.value", "python")
            cy.get("#dropdowm-menu-1").select("sql").should("have.value", "sql")

            cy.get("#dropdowm-menu-2").select("eclipse").should("have.value", "eclipse")
            cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven")
            cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng")
            cy.get("#dropdowm-menu-2").select("junit").should("have.value", "junit")

            cy.get("#dropdowm-menu-3").select("html").should("have.value", "html")
            cy.get("#dropdowm-menu-3").select("css").should("have.value", "css")
            cy.get("#dropdowm-menu-3").select("javascript").should("have.value", "javascript")
            cy.get("#dropdowm-menu-3").select("jquery").should("have.value", "jquery")

    
        });

        it.only("Select specific values via select dropdown lists (Should have text)", () => {
            cy.visit(URL)
            cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true})

            cy.get("#dropdowm-menu-1").select("java").contains("JAVA")
            cy.get("#dropdowm-menu-1").select("c#").contains("C#")
            cy.get("#dropdowm-menu-1").select("python").contains("Python")
            cy.get("#dropdowm-menu-1").select("sql").contains("SQL")

            cy.get("#dropdowm-menu-2").select("eclipse").contains("Eclipse")
            cy.get("#dropdowm-menu-2").select("maven").contains("Maven")
            cy.get("#dropdowm-menu-2").select("testng").contains("TestNG")
            cy.get("#dropdowm-menu-2").select("junit").contains("JUnit")

            cy.get("#dropdowm-menu-3").select("html").contains("HTML")
            cy.get("#dropdowm-menu-3").select("css").contains("CSS")
            cy.get("#dropdowm-menu-3").select("javascript").contains("JavaScript")
            cy.get("#dropdowm-menu-3").select("jquery").contains("JQuery")

            

    
        });



        
    
})