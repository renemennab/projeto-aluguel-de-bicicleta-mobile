context('CT-010 - Sistema deve permitir que usuários favoritem pontos de coleta', () => {
    beforeEach(() => {
        cy.visit('/')
        sessionStorage.clear()
    })
    it('creates collector', () => {
        cy.createUser()
    })

    it('creates place', () => {
        cy.createPonto()
    })

    it('creates donor', () => {
        cy.createUser(true)
    })
    it('trying to favourite redirects to login', () => {
        cy.contains(`Lista`).click()
        cy.fixture('collectionPointData').then(placeFixture => {
            cy.contains(placeFixture.Nome).click()
        })
        cy.findByRole('button', { name: /adicionar aos favoritos/i }).click()
        cy.location('pathname').should('contain', 'login')
    })
    it('user can favourite a place', () => {
        cy.login(true)
        cy.findByRole('button', {
            name: /mapa do bem/i
        }).click()
        cy.contains(`Lista`).click()
        cy.fixture('collectionPointData').then(placeFixture => {
            cy.contains(placeFixture.Nome).click()
        })
        cy.findByRole('button', { name: /adicionar aos favoritos/i }).click()
        cy.get('.fas')
    })
    it('favourited place appears in favourites page', () => {
        cy.login(true)
        cy.contains(`Favoritos`).click()
        cy.fixture('collectionPointData').then(placeFixture => {
            cy.contains(placeFixture.Nome).click()
        })
    })
    it('remove place', () => {
        cy.removePlace()
    })
    it('remove firts user', () => {
        cy.removeUser()
    })
    it('remove second user', () => {
        cy.removeUser(true)
    })
})
