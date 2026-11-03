/// <reference types="cypress" />

describe('Funcionalidade: Catálogo de Livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });
    it('Deve adicionar a cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', 1)

    });

    it('Deve clicar em todos os botões Adicionar à cesta', () => {
        cy.get('.btn-primary').click({multiple: true})

    });
    it('Deve clicar no primeiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').first().click()
    });

    it('Deve clicar no ultimo botão Adicionar à cesta', () => {
        cy.get('.btn-primary').last().click()
    });
    //utilizar o it.only para rodar apenas um teste, caso queira rodar todos os testes, remover o .only
    it('Deve clicar no terceiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(2).click()
        cy.get('#global-alert-container').should('contain', 'A Divina Comédia')
    });
    it.only ('Deve clicar no nome do livro e direcionar para a página do livro', () => {
        cy.contains('A Divina Comédia').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
    });
    
});