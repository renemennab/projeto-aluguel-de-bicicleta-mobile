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

    it('logs out', () => {
        cy.logout()
    })

    it('user can view a place', () => {
        cy.contains(`Lista`).click()
        cy.fixture('collectionPointData').then(placeFixture => {
            cy.contains(placeFixture.Nome).click()
        })
        cy.contains(/telefone/i)
    })
    it('remove place', () => {
        cy.removePlace()
    })
    it.only('remove user', () => {
        cy.removeUser()
    })
})
