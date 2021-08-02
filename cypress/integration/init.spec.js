// This test will confirm that Cypress is up and running for the whole app
describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true);
    });

    it('visits the app', () => {
        cy.visit('/'); // since we set up the local host in the cypress.json we can just use /
    });
});