/// <reference types="cypress" />

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {
    
    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve realizar cadastro com sucesso', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Jonny')
        cy.get('#email').type(email)
        cy.get('#phone').type('1234567890')
        cy.get('#password').type('password123')
        cy.get('#confirm-password').type('password123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')

    });

});