/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
        /**
         * Command to run queries on database.
         * @example cy.sqlServer('SELECT * FROM AspNetUsers WHERE Nome = 'João Silva';')
         */
        sqlServer(value: string): Chainable<Element>
    }
}
