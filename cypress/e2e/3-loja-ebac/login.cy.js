///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/my-account/')
        
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('mauriciio.kowalewski@gmail.com')
        cy.get('#password').type('Mk.2512')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, mauriciio.kowalewski (não é mauriciio.kowalewski? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('fabio.kowalewski@gmail.com')
        cy.get('#password').type('Mk.2512')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error > li').should('exist')

        
    });

    it('Deve exibir mensagem de erro ao exibir senha inválida', () => {
        cy.get('#username').type('mauriciio.kowalewski@gmail.com')
        cy.get('#password').type('Mk.251')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail mauriciio.kowalewski@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error > li').should('exist')
        
        
    });
})