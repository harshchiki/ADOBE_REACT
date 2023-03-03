describe("e2e delete customer spec", () => {
    it("delete by click of Button", () => {
        cy.visit("http://localhost:3000/");
        cy.get("button")
        .first()
        .click()
        .get(".row")
        .then(elems => {
            expect(elems.length).to.eq(5);
        })
    });
})