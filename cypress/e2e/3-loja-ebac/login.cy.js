///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('mauriciio.kowalewski@gmail.com')
        cy.get('#password').type('Mk.2512')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, mauriciio.kowalewski (não é mauriciio.kowalewski? Sair)')
    })

})