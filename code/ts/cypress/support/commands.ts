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

Cypress.Commands.add('createUser', (isDoador?: boolean) => {
    cy.visit('/')
    cy.contains(`Menu`).click()
    cy.contains(`Login`).click()
    cy.contains('Não tem uma conta? Cadastre-se aqui').click()
    cy.fixture(isDoador ? 'donorData' : 'collectorData').then(userFixture => {
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

Cypress.Commands.add('createPonto', (second?: boolean) => {
    cy.login()
    cy.contains(`Adicionar Ponto de Coleta`).click()
    cy.fixture(second ? 'secondCollectionPointData' : 'collectionPointData').then(placeFixture => {
        cy.findAllByRole('textbox', {
            name: /nome/i
        }).type(placeFixture.Nome)
        cy.findAllByRole('textbox', {
            name: /telefone/i
        }).type(placeFixture.Telefone)
        cy.findAllByRole('textbox', {
            name: /cep/i
        }).type(placeFixture.Cep)
        cy.findAllByLabelText(/descrição/i).type(placeFixture.Descricao)
        cy.findAllByLabelText(/latitude/i).type(placeFixture.Latitude)
        cy.findAllByLabelText(/longitude/i).type(placeFixture.Longitude)
        cy.findAllByLabelText(/número/i).type(placeFixture.Numero)
        cy.contains('segunda').click()
        cy.findByLabelText(/de:/i).type(placeFixture.HorarioInicioFuncionamento)
        cy.findByLabelText(/até:/i).type(placeFixture.HorarioFimFuncionamento)
        cy.findByText(/alimento não perecível/i).click()
        cy.contains(/salvar/i).click()

        cy.contains(placeFixture.Nome)
        cy.sqlServer(`SELECT Nome FROM PontoDeColeta WHERE Nome = '${placeFixture.Nome}';`).then(resp =>
            expect(resp).to.eq(placeFixture.Nome)
        )
    })
})
Cypress.Commands.add('removePlace', (second?: boolean) => {
    cy.login()
    cy.contains('Meus Pontos de coleta').click()

    cy.fixture(second ? 'secondCollectionPointData' : 'collectionPointData').then(placeFixture => {
        cy.contains(placeFixture.Nome).click()
        cy.findByRole('button', { name: /deletar/i }).click()
        cy.findByText(/tem certeza que deseja deletar\?/i)
        cy.findByRole('button', {
            name: /sim/i
        }).click()
        cy.contains(placeFixture.Nome).should('have.length', 0)
    })
})
Cypress.Commands.add('removeUser', (isDoador?: boolean) => {
    cy.fixture(isDoador ? 'donorData' : 'collectorData').then(userFixture => {
        console.log(userFixture)
        console.log(`DELETE FROM AspNetUsers WHERE Nome = '${userFixture.name}';`)
        cy.sqlServer(`DELETE FROM AspNetUsers WHERE Nome = '${userFixture.name}';`)
        cy.sqlServer(`SELECT * FROM AspNetUsers WHERE Nome = '${userFixture.name}';`).should('have.length', 0)
    })
    sessionStorage.clear()
})

Cypress.Commands.add('login', (isDoador?: boolean) => {
    cy.contains(`Menu`).click()
    cy.contains(`Login`).click()
    cy.fixture(isDoador ? 'donorData' : 'collectorData').then(userFixture => {
        cy.findAllByRole('textbox', {
            name: /email/i
        }).type(userFixture.email)
        cy.findAllByLabelText(/senha/i).type(userFixture.password)

        cy.get('button').contains(/login/i).click()
    })
    cy.contains('Logout')
})

Cypress.Commands.add('logout', () => {
    cy.login()
    cy.contains(`Logout`).click()
    cy.findByText(/tem certeza que deseja sair\?/i)
    cy.findByRole('button', {
        name: /sim/i
    }).click()
    cy.contains(`Login`)
})
