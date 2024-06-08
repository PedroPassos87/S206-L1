# S206-L1
Codigos do laboratório de Qualidade de Software

# Teste Pratico 1 - Teste de UI com Cypress
- O site escolhido para teste foi a Wikipedia
- Para obter o relatório no Client, basta inserir "./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'" e o relatório será mostrado
- Para gerar um relatório Mocha é preciso instalar dependencias, "npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator", e fazer alterações no cypress config e import do mochawesome-reporter no support/e2e.js.
- Dessa forma, ao rodar "./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'", será mostrado o relatorio no CLI e também será gerado uma pagina HTML com o relatório Mocha.

# Teste Pratico 2 - Teste de API com Postman
- foi usado o site https://api.restful-api.dev, que é uma api de objetos
- Para obter o relatorio foi usado o newman e o htmlextra, para gerar basta inserir no CLI "newman run projeto.json -r htmlextra" e o relatorio Html será gerado.
- Sobre o newman e o htmlextra, é necessario instalar dependencias. O passo a passo pode ser encontrado nos links:  https://www.npmjs.com/package/newman  ,   https://www.npmjs.com/package/newman-reporter-htmlextra
- Foram criadas 6 suites de teste ( 3 Gets, 1 put,1 post e 1 delete)
- 
