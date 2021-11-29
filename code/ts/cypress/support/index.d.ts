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
        createUser(isDoador?: boolean): Chainable<Element>
        /**
         * Custom command to create new user.
         * @example cy.createPonto()
         */
        createPonto(second?: boolean): Chainable<Element>
        /**
         * Custom command to create new user.
         * @example cy.removePlace()
         */
        removePlace(second?: boolean): Chainable<Element>
        /**
         * Custom command to remove user.
         * @example cy.login()
         */
        login(isDoador?: boolean): Chainable<Element>
        /**
         * Custom command to remove user.
         * @example cy.logout()
         */
        logout(): Chainable<Element>
        /**
         * Custom command to remove user.
         * @example cy.removeUser()
         */
        removeUser(isDoador?: boolean): Chainable<Element>
    }
}
