context('CT-003, CT-004, CT-005 - Crud de Ponto', () => {
    beforeEach(() => {
        cy.visit('/')
        sessionStorage.clear()
    })
    it('creates user', () => {
        cy.createUser()
    })

    it('CT-003 - Sistema deve permitir que usuários cadastrem ponto de coleta', () => {
        cy.login()
        cy.contains(`Adicionar Ponto de Coleta`).click()
        cy.fixture('collectionPointData').then(placeFixture => {
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
            cy.get('li>a').should('have.length', 1)
            cy.sqlServer(`SELECT Nome FROM PontoDeColeta WHERE Nome = '${placeFixture.Nome}';`).then(resp =>
                expect(resp).to.eq(placeFixture.Nome)
            )
        })
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
        })
    })
    it('CT-005 - Sistema deve permitir que usuários deletem ponto de coleta', () => {
        cy.login()
        cy.contains('Meus Pontos de coleta').click()

        cy.fixture('collectionPointData').then(placeFixture => {
            cy.contains(placeFixture.NovoNome).click()
        })
        cy.findByRole('button', { name: /deletar/i }).click()
        cy.findByText(/tem certeza que deseja deletar\?/i)
        cy.findByRole('button', {
            name: /sim/i
        }).click()
        cy.get('li>a').should('have.length', 0)
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
