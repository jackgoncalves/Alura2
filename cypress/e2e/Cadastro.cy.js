/// <reference types="Cypress" />


describe('Cadastro no Sistema Alura Pic', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.title().should('be.equal', 'Sign in')

    })

    it('Verificar mensagem de validação no cadastro', () => {
        cy.VerificaMensagemCadastro()

    })

    it('Validar mensagem somente do Email inválido', () => {
        cy.ValidaMensagemEmail()

    })

    it('Verifico mensagem da senha com menos de 8 caracteres', () => {
        cy.ValidaMensagemSenha()


    })

    it('Verificar se campo user name só aceita caracter minúsculo', () => {
        cy.ValidaUserName()

    })

    Cypress._.times(1, () => {

        it('Registrar novo usuário e faz login', () => {
            cy.RegistraNovoUsuario()
        })

    })

    const usuarios = require('../fixtures/usuarios.json')
    usuarios.forEach(usuario => {
     it(`Registrar vários usuários ${usuario.username}`, () => {
            cy.contains('a', 'Register now').click()

            cy.get('input[placeholder="email"]').type(usuario.email)

            cy.get('input[placeholder="full name"]').type(usuario.fullname)

            cy.get('input[placeholder="user name"]').type(usuario.username)

            cy.get('input[placeholder="password"]').type(usuario.password)

        })

    })

})     