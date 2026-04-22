# 📑 Automação Hub de Leitura - EBAC

<p align="left">
  <img src="https://img.shields.io/badge/-cypress-%23E9E9E9?style=for-the-badge&logo=cypress&logoColor=31E5A1" />
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Faker.js-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Curso-EBAC-blue?style=for-the-badge" />
</p>

## 🚀 Sobre o Projeto
Este projeto foi desenvolvido como parte da conclusão de módulo do curso de **Engenharia de Qualidade de Software** da **EBAC**. O objetivo é realizar a automação de um fluxo **End-to-End (E2E)** completo, simulando a jornada real de um usuário no sistema "Hub de Leitura".

---

## 🛠️ Cenário Automatizado
O teste foi consolidado no arquivo `end-to-end.cy.js` e executa as seguintes ações de forma integrada:
- [x] **Cadastro:** Criação de conta com e-mail dinâmico e dados realistas.
- [x] **Validação de Cadastro:** Verificação de redirecionamento para o Dashboard.
- [x] **Logoff:** Saída controlada do sistema para testar a reentrada.
- [x] **Login:** Acesso utilizando as mesmas credenciais geradas no cadastro.
- [x] **Asserção Final:** Confirmação de acesso ao ambiente logado.

---

## 🏗️ Diferenciais e Boas Práticas
Para garantir um código de nível profissional, foram aplicados os seguintes conceitos:
* **Custom Commands:** Centralização das lógicas de Login e Cadastro no arquivo `commands.js`, facilitando a manutenção e reuso.
* **Massa Dinâmica (Faker.js):** Uso da biblioteca Faker para gerar e-mails exclusivos (ex: `Rodrigo_...`), evitando falhas por duplicidade de dados.
* **Fixtures (JSON):** Separação de dados estáticos e mensagens de sucesso em arquivos de configuração.
* **Segurança:** Implementação de `{ log: false }` em campos de senha para evitar a exposição de dados sensíveis no console do Cypress.

---

## 💻 Instalação e Execução

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/hub-de-leitura-ebac.git
Instale as dependências:

Bash
npm install
Inicie o Hub de Leitura localmente.

Abra o painel do Cypress:

Bash
npx cypress open

👤 Autor
Rodrigo Lins Lopes

QA em transição de carreira focado em automação e qualidade de software.