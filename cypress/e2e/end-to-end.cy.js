/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Testes End To End do fluxo de cadastro e login', () => {

    beforeEach(() => {
        // Configurações iniciais
        cy.fixture('usuario').as('user');
        cy.visit('register.html') // Acessa a página de cadastro;
    });

    it('Deve fazer o cadastro e validar o login com o usuário cadastrado', function () {

        const emailFaker = faker.internet.email({ firstName: 'Rodrigo' });
        const senha = this.user.senha;

        // --- ETAPA 1: CADASTRO ---
        cy.cadastrarUsuario(
            this.user.nome,
            emailFaker,
            this.user.telefone,
            senha
        )

        // Validação de entrada no Dashboard
        cy.url().should('include', this.user.msgSucesso);

        // --- ETAPA 2: LOGOFF ---
        cy.get('.user-actions > .btn-outline-danger').click();
        cy.url().should('include', 'login.html');

        // --- ETAPA 3: LOGIN ---
        // Preencher o formulário de login com as credenciais do usuário recém-cadastrado.
        cy.login(
            emailFaker,
            senha
        )

        // Validação final de acesso
        cy.url().should('include', this.user.msgSucesso);
    });
});