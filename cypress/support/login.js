Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://qa-web.khalti.com.np/#/');
    cy.get('input[name="id"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});