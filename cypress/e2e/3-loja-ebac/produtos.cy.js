///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () =>  {

        beforeEach(() => {
            cy.visit("http://lojaebac.ebaconline.art.br/produtos/")
        });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
           //.first()
            //last()
            //.eq(2)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
            cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
        
    });
});