/// <reference types="Cypress" />


describe('Teste fim a fim Alura Pic', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.title().should('be.equal', 'Sign in')

    })

    it('Efetuar Cadastro de um novo usuário', () => {
        cy.RegistraNovoUsuario()


    })

    it('Efetua login com o novo usuário cadastrado', () => {
        cy.LoginValido(Cypress.env('userName'), Cypress.env('password'))

    })

    it('Realizar upload de uma foto', () => {
        cy.LoginValido(Cypress.env('userName'), Cypress.env('password'))
        cy.UploadFoto()


    })

    it('Excluir foto', ()=>{
        cy.LoginValido(Cypress.env('userName'), Cypress.env('password'))
        cy.UploadFoto()

        cy.get('img[alt="Planeta Art"]').click()

        cy.contains('.text-left.break-word', 'Planeta Art').should('be.visible')

        cy.get('.fa.fa-trash-o.fa-2x.pull-right').click()

        cy.url().should('include', 'jack1234')

        

    })




    // it('Realizar upload passando um alias', ()=>{
    //     cy.LoginValido(Cypress.env('userName'), Cypress.env('password'))
    //     cy.get('.fa.fa-plus-circle.fa-2x').click()

    //     cy.fixture('planet.jpg').as('ArquivoPlaneta')
    //     cy.get('input[type="file"]')
    //         .selectFile('@ArquivoPlaneta', {force: true})
    //         .should(($input)=>{
    //             console.log($input)
    //             expect($input[0].files[0].name).to.equal('planet.jpg')
    //         })
    // })
})











