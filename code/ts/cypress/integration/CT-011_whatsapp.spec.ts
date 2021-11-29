context('CT-011 - Sistema deve permitir que usuários contatem o ponto de coleta através do whatsapp', () => {
    beforeEach(() => {
        cy.visit('/')
        sessionStorage.clear()
    })
    it('creates user', () => {
        cy.createUser()
    })

    it('creates place', () => {
        cy.createPonto()
    })

    it('user can click on whatsapp button', () => {
        cy.contains(`Lista`).click()
        cy.fixture('collectionPointData').then(placeFixture => {
            cy.contains(placeFixture.Nome).click()
        })
        cy.findByRole('button', {
            name: /enviar mensagem/i
        }).click()
    })
    it('remove place', () => {
        cy.removePlace()
    })
    it('remove user', () => {
        cy.removeUser()
    })
})
