/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
        /**
         * Command to run queries on database.
         * @example cy.sqlServer('SELECT * FROM AspNetUsers WHERE Nome = 'João Silva';')
         */
        sqlServer(value: string): Chainable<Element>
        /**
         * Custom command to create new user.
         * @example cy.createUser()
         */
        createUser(): Chainable<Element>
        /**
         * Custom command to create new user.
         * @example cy.createPonto()
         */
        createPonto(): Chainable<Element>
        /**
         * Custom command to create new user.
         * @example cy.removePlace()
         */
        removePlace(): Chainable<Element>
        /**
         * Custom command to remove user.
         * @example cy.login()
         */
        login(): Chainable<Element>
        /**
         * Custom command to remove user.
         * @example cy.removeUser()
         */
        removeUser(): Chainable<Element>
    }
}
