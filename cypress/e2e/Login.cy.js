/// <reference types="Cypress" />


describe('Login no Sistema Alura Pic', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.title().should('be.equal', 'Sign in')
  
    })

    it('Efetuar login com usuário válido', () => {
        cy.LoginValido(Cypress.env('userName'), Cypress.env('password'))
    
      })
    
      it.only('Efetuar login com usuário inválido', () => {
        cy.LoginInvalido()
        cy.contains('h4', 'Login').should('be.visible')
    
      })

      it('Efetuar login com intercept', () => {
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('postReq')

        cy.LoginValido(Cypress.env('userName'), Cypress.env('password'))
    
        cy.wait('@postReq')

      })

})     