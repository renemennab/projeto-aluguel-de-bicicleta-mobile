context('CT-001 - Sistema deve permitir que usuários se cadastrem', () => {
    beforeEach(() => {
        cy.visit('/')
        sessionStorage.clear()
    })
    it('user is not on db', () => {
        cy.sqlServer(`SELECT * FROM AspNetUsers WHERE Nome = 'João Silva';`).should('have.length', 0)
    })
    it('can visit page', () => {
        cy.visit('/')
    })
    it('user doesnt have access to menu options, just login', () => {
        cy.contains(`Menu`).click()
        cy.contains(`Login`)
        cy.get('li>a').should('have.length', 1)
    })
    it('on login, user can register', () => {
        cy.contains(`Menu`).click()
        cy.contains(`Login`).click()
        cy.contains('Não tem uma conta? Cadastre-se aqui')
    })
    it('user can fill profile as collector', () => {
        cy.contains(`Menu`).click()
        cy.contains(`Login`).click()
        cy.contains('Não tem uma conta? Cadastre-se aqui')
    })

    it('user can fill profile as donor', () => {
        cy.sqlServer(`DELETE FROM AspNetUsers WHERE Nome = 'João Silva';`)
        console.log('before', sessionStorage)
        cy.contains(`Menu`).click()
        cy.contains(`Login`).click()
        cy.contains('Não tem uma conta? Cadastre-se aqui').click()
        cy.fixture('collectorData').then(userFixture => {
            cy.findAllByRole('textbox', {
                name: /nome/i
            }).type(userFixture.name)
            cy.findAllByRole('textbox', {
                name: /email/i
            }).type(userFixture.email)
            cy.findAllByLabelText(/senha/i).type(userFixture.password)
            cy.contains(userFixture.userType).click()
            cy.contains(/salvar/i)
                .click()
                .should(() => {
                    console.log('after', sessionStorage)
                    expect(sessionStorage.getItem('nome')).to.eq('João Silva')
                    expect(sessionStorage.getItem('id')).to.not.be.null
                })
            cy.contains('Logout')
            cy.get('li>a').should('have.length', 5)
            cy.sqlServer(`SELECT Nome FROM AspNetUsers WHERE Nome = 'João Silva';`).then(resp =>
                expect(resp).to.eq('João Silva')
            )
        })
    })

    it('clean up user from db', () => {
        cy.sqlServer(`DELETE FROM AspNetUsers WHERE Nome = 'João Silva';`)
    })
})

// Entrar no navegador
// Acessar o site
// Clicar em "Menu" e "Cadastro"
// Inserir os dados, inclusive o tipo de usuário
// Realizar cadastro

// Aparecer mensagem de êxito ao criar o cadastro
// Dados devem ser salvos no banco de dados
// Senha deve ser cryptografada
// Deve ser gerado um identificador único para aquele usuário
