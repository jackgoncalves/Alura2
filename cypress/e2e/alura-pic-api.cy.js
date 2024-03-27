/// <reference types="Cypress" />

describe('Teste API', ()=>{

    it('Buscar fotos do usuário', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos?page=1'
        }).then((resposta)=>{
            console.log(resposta)
            expect(resposta.status).to.equal(200)
            expect(resposta.body).is.not.empty
            expect(resposta.body[0]).to.have.property('description')
            expect(resposta.body[0].description).to.equal('Farol iluminado')

        })
    })

    it('Busca api', ()=>{
        cy.request('https://apialurapic.herokuapp.com/flavio/photos')
        .should((res)=>{
            const { status, body } = res
            expect(status).to.equal(200)
            expect(body).is.not.empty
            expect(body[0]).to.have.property('description')
            expect(body[0].description).to.equal('Farol iluminado')

        })
    })

    it.only('Fazer login do usuário', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((resposta)=>{
            expect(resposta.status).to.equal(200)
            expect(resposta.body).is.not.empty
            expect(resposta.body).to.have.property('id')
            expect(resposta.body.id).to.equal(1)
            expect(resposta.body).to.have.property('email')
            expect(resposta.body.email).to.equal('flavio@alurapic.com.br')


        })
    })
})
    

    