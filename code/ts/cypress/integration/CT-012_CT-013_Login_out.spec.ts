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
        cy.login()
        cy.contains(`Logout`).click()
        cy.findByText(/tem certeza que deseja sair\?/i)
        cy.findByRole('button', {
            name: /sim/i
        }).click()
        cy.contains(`Login`)
    })

    it('remove user', () => {
        cy.removeUser()
    })
})
