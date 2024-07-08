/// <reference types ="Cypress"/>


describe('Teste Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
       cy.login_teste('standard_user','secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });


    it('Validando Login Incorreto', () => {
       cy.login_teste('userErrado','secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
        

    });

    it('Validar senha incorreta', () => {
        cy.login_teste('standard_user','senhaIncorreta')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});