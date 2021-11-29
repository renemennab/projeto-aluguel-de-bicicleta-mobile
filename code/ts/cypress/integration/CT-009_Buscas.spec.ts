context('CT-009 - Sistema deve permitir que usuários realizem buscas', () => {
    beforeEach(() => {
        cy.visit('/')
        sessionStorage.clear()
    })
    it('creates user', () => {
        cy.createUser()
    })

    it('creates first place', () => {
        cy.createPonto()
    })

    it('creates second place', () => {
        cy.createPonto(true)
    })

    it('user can filter places', () => {
        cy.contains(`Lista`).click()
        cy.fixture('collectionPointData').then(placeFixture => {
            cy.contains(placeFixture.Nome)
            cy.get('input').clear().type(placeFixture.Nome)
            cy.get('li.assetList--card').should('have.length', 1)
        })
    })
    it('remove first place', () => {
        cy.removePlace()
    })
    it('remove second place', () => {
        cy.removePlace(true)
    })
    it('remove user', () => {
        cy.removeUser()
    })
})
