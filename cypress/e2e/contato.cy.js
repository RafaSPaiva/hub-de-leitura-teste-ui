describe('Funcionalidade: Contato', ()=>{

beforeEach(()=>{
  cy.visit('index.html')
});

it.only('Deve preencher o formulário de contato corretamente', ()=>{
//aqui sera o primeiro teste e isso e um comentario
  cy.get('[name="name"]').type('Nome Teste')
  cy.get('[name="email"]').type('email@teste.com')
  cy.get('[name="subject"]').select('Parcerias')
  cy.get('[name="message"]').type('Mensagem de teste para o formulário de contato')
  cy.get('#btn-submit').click()
  //resultado esperado
  cy.contains('Contato enviado com sucesso!').should('exist')
});
it.only('Deve validar mensagem de erro ao enviar sem preencher o nome', ()=>{
//deixando campo para comentario da funcao
  cy.get('[name="name"]').clear()
  cy.get('[name="email"]').type('email@teste.com')
  cy.get('[name="subject"]').select('Parcerias')
  cy.get('[name="message"]').type('Mensagem de teste para o formulário de contato')
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
});

it.only('Deve validar mensagem de erro ao enviar sem preencher o email', ()=>{
//deixando campo para comentario da funcao
  cy.get('[name="name"]').type('Nome Teste')
  cy.get('[name="email"]').clear()
  cy.get('[name="subject"]').select('Parcerias')
  cy.get('[name="message"]').type('Mensagem de teste para o formulário de contato')
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
});

it.only('Deve validar mensagem de erro ao enviar sem selecionar o assunto', ()=>{
//deixando campo para comentario da funcao
  cy.get('[name="name"]').type('Nome Teste')
  cy.get('[name="email"]').type('email@teste.com')
  //cy.get('[name="subject"]').select('Parcerias')
  cy.get('[name="message"]').type('Mensagem de teste para o formulário de contato')
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')
});

it.only('Deve validar mensagem de erro ao enviar sem preencher mensagem', ()=>{
//deixando campo para comentario da funcao
  cy.get('[name="name"]').type('Nome Teste')
  cy.get('[name="email"]').type('email@teste.com')
  cy.get('[name="subject"]').select('Parcerias')
  cy.get('[name="message"]').clear()
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
});

});