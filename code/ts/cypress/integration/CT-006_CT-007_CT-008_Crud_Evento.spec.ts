context('CT-006, CT-007, CT-008 - Crud de evento', () => {
    beforeEach(() => {
        cy.visit('/')
        sessionStorage.clear()
    })
    it('creates user', () => {
        cy.createUser()
    })
    it('creates ponto', () => {
        cy.createPonto()
    })

    it('CT-006 - Sistema deve permitir que usuários cadastrem evento de doação', () => {
        cy.login()
        cy.contains(`Adicionar evento de doação`).click()
        cy.fixture('collectionPointData').then(placeFixture => {
            cy.contains(placeFixture.Nome).click()
        })
        cy.fixture('eventData').then(eventFixture => {
            cy.findAllByRole('textbox', {
                name: /nome/i
            }).type(eventFixture.Nome)
            cy.findAllByLabelText(/descrição/i).type(eventFixture.Descricao)
            cy.findAllByLabelText(/Data/i).type(eventFixture.Data)
            cy.findAllByLabelText(/ponto de coleta/i).select(eventFixture.NomePonto)
            cy.findByLabelText(/de:/i).type(eventFixture.Inicio)
            cy.findByLabelText(/até:/i).type(eventFixture.Fim)
            cy.contains(/salvar/i).click()
            cy.findByRole('heading', {
                name: eventFixture.Nome
            })
            cy.contains(eventFixture.Nome)
            cy.sqlServer(`SELECT Nome FROM Evento WHERE Nome = '${eventFixture.Nome}';`).then(resp =>
                expect(resp).to.eq(eventFixture.Nome)
            )
        })
    })

    it('CT-007 - Sistema deve permitir que usuários editem evento de doação', () => {
        cy.login()
        cy.contains('Meus Eventos').click()

        cy.fixture('eventData').then(eventFixture => {
            cy.contains(eventFixture.Nome).click()
            cy.findByRole('link', { name: /editar/i }).click()
            cy.findAllByRole('textbox', {
                name: /nome/i
            })
                .clear()
                .type(eventFixture.NovoNome)
            cy.contains(/salvar/i).click()
            cy.findByRole('heading', {
                name: eventFixture.NovoNome
            })
            cy.contains(eventFixture.NovoNome)
        })
    })
    it('CT-008 - Sistema deve permitir que usuários deletem evento de doação', () => {
        cy.login()
        cy.contains('Meus Eventos').click()

        cy.fixture('eventData').then(eventFixture => {
            cy.contains(eventFixture.NovoNome).click()
        })
        cy.findByRole('button', { name: /deletar/i }).click()
        cy.findByText(/tem certeza que deseja deletar\?/i)
        cy.findByRole('button', {
            name: /sim/i
        }).click()
        cy.contains('Meus Eventos').click()
        cy.fixture('eventData').then(eventFixture => {
            cy.contains(eventFixture.NovoNome).should('not.exist')
        })
    })
    it('remove place', () => {
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
// Clicar na opção criar evento de doação
// Preencher as informações
// Salvar
// Confirma que deseja salvar
