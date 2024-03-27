// *** Comandos personalizados de LOGIN *** 

Cypress.Commands.add('LoginValido', (nome,senha) =>{

    cy.get('input[placeholder="user name"]').type(nome)
    cy.get('input[placeholder="password"]').type(senha, {log: false})
    cy.get('button[type="submit"]').click()
    cy.contains('a', '(Logout)').should('be.visible')

})

Cypress.Commands.add('LoginInvalido', () =>{

    cy.get('input[placeholder="user name"]').type('jose')
      cy.get('input[placeholder="password"]').type('senha', {log: false})
      cy.get('button[type="submit"]').click()
      cy.on('window:alert', (alertText) =>{
         expect(alertText).to.equal('Invalid user name or password')
      })

})


// *** Comandos personalizados de CADASTROS *** 

Cypress.Commands.add('VerificaMensagemCadastro', ()=>{

    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('button', 'Register').click()

    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')

    cy.get('ap-vmessage').should('have.length', 4)

})

Cypress.Commands.add('ValidaMensagemEmail', ()=>{

    cy.contains('a', 'Register now').click()
    cy.get('input[placeholder="email"]').type('jack')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')

})

Cypress.Commands.add('ValidaMensagemSenha', ()=>{

    cy.contains('a', 'Register now').click()
    cy.get('input[placeholder="password"]').type('123')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')

})

Cypress.Commands.add('ValidaUserName', ()=>{

    cy.contains('a', 'Register now').click()
    cy.get('input[placeholder="user name"]').type('Jack')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')

})

Cypress.Commands.add('RegistraNovoUsuario',()=>{

    cy.contains('a', 'Register now').click()

        cy.get('input[placeholder="email"]').type('jack.gonca@gmail.com')
    
        cy.get('input[placeholder="full name"]').type('jackgonca')
    
        cy.get('input[placeholder="user name"]').type('jack1234')
    
        cy.get('input[placeholder="password"]').type('12345678', {log: false})

        cy.wait(4000)
    
        cy.get('button[class="btn btn-primary btn-block"]').click()

        cy.wait(4000)

        cy.url().should('include', '/home')

        // cy.contains('h4', 'Login').should('be.visible')
        

})

Cypress.Commands.add('UploadFoto', ()=>{

    cy.get('.fa.fa-plus-circle.fa-2x').click()

    cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/planet.jpg', { force: true })
        .should(($input) => {
            // console.log($input)
            expect($input[0].files[0].name).to.equal('planet.jpg')
        })
    
    cy.get('textarea[placeholder="photo description"]').type('Planeta Art')
    cy.get('button[type="submit"]').click()
    
    cy.get('.text-center.display-4')
        .contains('uploading 100%')
        .should('be.visible')
        
})



