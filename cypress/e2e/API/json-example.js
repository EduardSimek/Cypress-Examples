describe("JSON OBject Examples", () => {
    it("JSON Object Examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exampleArrayOfObjects = [{"key":"Luke"}, {"key2": "Skywalker"}, {"key3": "22"}]

        const users = {
            "firstName": "Joe", 
            "lastName": "Blogs",
            "Age": 33,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                },
                {
                    "firstName": "Sarah", 
                    "lastName": "Parker",
                },
                {
                    "firstName": "Sarah2", 
                    "lastName": "Marcin",
                },
                {
                    "firstName": "Sarah3", 
                    "lastName": "Jackson",
                }
            ]
        }

        cy.log(exampleObject["key"])
        cy.log(exampleObject["key2"])
        cy.log(exampleObject.key2)

        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[1])
        cy.log(exampleArrayOfValues[2])

        cy.log(users.Students[2].lastName)

        cy.log(exampleArrayOfObjects[0].key)
        cy.log(exampleArrayOfObjects[0].key1)
        cy.log(exampleArrayOfObjects[0].key2)
        
    })
})