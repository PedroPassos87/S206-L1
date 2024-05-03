# S206-L1
Codigos do laboratório de Qualidade de Software

# Teste Pratico 1 - Teste de UI com Cypress
- O site escolhido para teste foi a Wikipedia
- Para obter o relatório no Client, basta inserir "./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'" e o relatório será mostrado
- Para gerar um relatório Mocha é preciso instalar dependencias, "npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator", e fazer alterações no cypress config e import do mochawesome-reporter no support/e2e.js.
- Dessa forma, ao rodar "./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'", será mostrado o relatorio no CLI e também será gerado uma pagina HTML com o relatório Mocha.
