# 🚀 Hub de Leitura - Automação de Testes E2E

![Status Badge](https://img.shields.io/badge/Status-Concluído-green)
![EBAC Badge](https://img.shields.io/badge/Origin-EBAC-blue)
![Cypress Badge](https://img.shields.io/badge/Framework-Cypress-E9E9E9?logo=cypress&logoColor=31E5A1)
![JS Badge](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Faker Badge](https://img.shields.io/badge/Data-Faker.js-green)

Este projeto consiste na automação completa da jornada do usuário na plataforma **Hub de Leitura**. O foco principal foi implementar um fluxo **End-to-End (E2E)** robusto, utilizando as melhores práticas de engenharia de software para garantir que o processo de cadastro e login funcione sem falhas.

## 📋 Sobre o Projeto
O Hub de Leitura é uma plataforma de gestão de livros onde a confiabilidade do cadastro de novos usuários é crítica. Esta automação simula o comportamento real do usuário, desde a criação da conta com dados dinâmicos até a validação do acesso ao Dashboard, garantindo a integridade do sistema após cada atualização de código.

## 🛠️ Metodologia e Ferramentas
A automação seguiu padrões modernos de desenvolvimento de testes:
* **Cypress:** Framework principal para execução de testes E2E e asserções em tempo real.
* **Custom Commands:** Abstração de lógicas de interface em comandos reutilizáveis para reduzir a duplicidade de código.
* **Faker.js:** Geração de massa de dados aleatória e válida para garantir testes isolados e evitar erros de e-mails duplicados.
* **Data Fixtures:** Uso de arquivos JSON para gerenciar dados estáticos e mensagens do sistema.

## 🔍 Detalhes da Implementação (Test Strategy)

### 1. Fluxo Integrado (Single Flow)
* **Objetivo:** Validar em um único ciclo o Cadastro -> Logoff -> Login.
* **Impacto:** Garante que o banco de dados está persistindo as informações corretamente e que a sessão do usuário é gerenciada de forma segura.

### 2. Segurança de Logs e Dados Sensíveis
* **Prática:** Implementação do parâmetro `{ log: false }` em campos de senha.
* **Impacto:** Evita que credenciais de teste apareçam nos logs do console ou em evidências de vídeo/screenshot, seguindo normas de segurança.

### 3. Abstração de Comandos (Clean Code)
* **Estrutura:** Movimentação de seletores e cliques para o `commands.js`.
* **Benefício:** O arquivo de teste torna-se puramente descritivo (BDD Style), facilitando a leitura por membros não técnicos da equipe.

## 📈 Conclusão Técnica
A suíte de testes atingiu 100% de cobertura no fluxo crítico de autenticação. A arquitetura modular permite que novos cenários (como recuperação de senha ou edição de perfil) sejam adicionados com esforço mínimo, mantendo o projeto escalável e de fácil manutenção.

## 💡 Sugestões de Melhoria (Roadmap)
- [ ] **Integração CI/CD:** Configuração de GitHub Actions para execução automática a cada Push.
- [ ] **Relatórios Avançados:** Implementação do Mochawesome Reporter para visualização gráfica de falhas.
- [ ] **Testes de API:** Validar os endpoints de backend antes de iniciar a jornada de UI.

## 📂 Estrutura do Repositório
* `/cypress/e2e`: Arquivo de teste principal (`end-to-end.cy.js`).
* `/cypress/fixtures`: Massa de dados estática (`usuario.json`).
* `/cypress/support`: Comandos customizados (`commands.js`).
* `package.json`: Dependências e scripts de execução.

---
**Autor:** [Rodrigo Lins Lopes]
> Analista de QA em transição de carreira | Estudante de Testes de Software na EBAC.