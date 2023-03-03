describe("e2e filter customer spec", () => {
    it("filter by text", () => {
        cy.visit("http://localhost:3000/");
        cy.get("input[placeholder='search by name']")
        .type("Geller")
        .get(".row")
        .then(elems => {
            expect(elems.length).to.eq(2);
        })
    });
})