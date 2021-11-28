context('CT-012, CT-013 - Login e out', () => {
    beforeEach(() => {
        cy.visit('/')
        sessionStorage.clear()
    })
    it('create user', () => {
        cy.createUser()
    })
    it('CT-012 - Sistema deve permitir que usuários efetuem login', () => {
        cy.login()
    })
    it('CT-013 - Sistema deve permitir que usuários efetuem logout', () => {
        cy.logout()
    })

    it('remove user', () => {
        cy.removeUser()
    })
})
