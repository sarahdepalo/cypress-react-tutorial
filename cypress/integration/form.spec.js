describe('Form', () => {
    beforeEach(() => { //used to avoid uneccessary repetition. For each block of the test we will visit the local host.
        cy.visit('/')
    });

    it('it focuses the input', () => {
        cy.focused().should('have.class', 'form-control')
    });

    it('accepts input', () => {
        const input = "Learn about Cypress";
        cy.get('.form-control') // obtains the DOM element with .form-control as a calls. Then we check if it has a value that matches the input variable above.
            .type(input)
            .should('have.value', input)
    });

    it('displays list of todos', () => {
        cy.get('li')
            .should('have.length', 2) //two todos should always be displayed at the start
    });

    it('adds a new todo', () => {
        const input = "Learn about Cypress";
        cy.get('.form-control')
            .type(input)
            .type('{enter}') //hit enter rather than making another test for the button 
            .get('li')
            .should('have.length', 3)
    });

    //find the button with class btn-danger, click it, grab the li and test the length again. 
    it('deletes a todo', () => {
        cy.get('li')
            .first()
            .find('.btn-danger')
            .click()
            .get('li')
            .should('have.length', 1);
    });

    it.only('deletes all todo', () => {
        cy.get('li')
            .first()
            .find('.btn-danger')
            .click()
            .get('li')
            .first()
            .find('.btn-danger')
            .click()
            .get('.no-task')
            .should('have.text', 'All of your tasks are complete. Nicely done!')
    });

});