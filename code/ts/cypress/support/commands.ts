// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('createUser', () => {
    cy.visit('/')
    cy.contains(`Menu`).click()
    cy.contains(`Login`).click()
    cy.contains('Não tem uma conta? Cadastre-se aqui').click()
    cy.fixture('collectorData').then(userFixture => {
        cy.findAllByRole('textbox', {
            name: /nome/i
        }).type(userFixture.name)
        cy.findAllByRole('textbox', {
            name: /email/i
        }).type(userFixture.email)
        cy.findAllByLabelText(/senha/i).type(userFixture.password)
        cy.contains(userFixture.userType).click()
        cy.contains(/salvar/i).click()
    })
    cy.contains('Logout')
})

Cypress.Commands.add('removeUser', () => {
    cy.sqlServer(`DELETE FROM AspNetUsers WHERE Nome = 'João Silva';`)
    sessionStorage.clear()
})

Cypress.Commands.add('login', () => {
    cy.contains(`Menu`).click()
    cy.contains(`Login`).click()
    cy.fixture('collectorData').then(userFixture => {
        cy.findAllByRole('textbox', {
            name: /email/i
        }).type(userFixture.email)
        cy.findAllByLabelText(/senha/i).type(userFixture.password)

        cy.get('button').contains(/login/i).click()
    })
    cy.contains('Logout')
})
