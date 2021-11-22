context('CT-003, CT-004, CT-005 - Crud de Ponto', () => {
    beforeEach(() => {
        cy.visit('/')
        sessionStorage.clear()
    })
    it('creates user', () => {
        cy.createUser()
    })

    it('CT-003 - Sistema deve permitir que usuários cadastrem ponto de coleta', () => {
        cy.createPonto()
    })

    it('CT-004 - Sistema deve permitir que usuários editem ponto de coleta', () => {
        cy.login()
        cy.contains('Meus Pontos de coleta').click()

        cy.fixture('collectionPointData').then(placeFixture => {
            cy.contains(placeFixture.Nome).click()
            cy.findByRole('link', { name: /editar/i }).click()
            cy.findAllByRole('textbox', {
                name: /nome/i
            })
                .clear()
                .type(placeFixture.NovoNome)
            cy.contains(/atualizar/i).click()
            cy.get('li>a').should('have.length', 1)
            cy.contains(placeFixture.NovoNome)

            cy.contains(placeFixture.NovoNome).click()
            cy.findByRole('link', { name: /editar/i }).click()
            cy.findAllByRole('textbox', {
                name: /nome/i
            })
                .clear()
                .type(placeFixture.Nome)
            cy.contains(/atualizar/i).click()
            cy.get('li>a').should('have.length', 1)
            cy.contains(placeFixture.Nome)
        })
    })
    it('CT-005 - Sistema deve permitir que usuários deletem ponto de coleta', () => {
        cy.removePlace()
    })
    it('remove user', () => {
        cy.removeUser()
    })
})

// Entrar no navegador
// Acessar o site
// Fazer login
// Abrir o menu
// Clicar em "Meus Pontos de coleta"
// Clicar na opção criar ponto de coleta
// Preencher as informações
// Salvar
// Confirma que deseja salvar
