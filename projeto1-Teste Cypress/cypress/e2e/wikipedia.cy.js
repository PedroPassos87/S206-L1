describe('Testando o site wikepedia', () => {

  beforeEach(() => {
    cy.visit('https://pt.wikipedia.org')                             //entrando no site
  });


  it('Acessando o site e procurando uma pessoa com sucesso', () => {
    cy.get('#searchInput').type('Diego Pituca')                      //buscando um jogador de futebol na barra de pesquisa
    cy.get('.cdx-search-input > .cdx-button').click()                //clique no botao pesquisar
    cy.get('.mw-page-title-main').should('have.text','Diego Pituca') //verificando se esta na pagina do DIego Pituca
  })

  it('Acessando o site de um usuario que nao existe no site', () => {
    cy.get('#searchInput').type('Pedro huijhuijhuijhuij')            //buscando um nome inexistente
    cy.get('.cdx-search-input > .cdx-button').click()                //clique no botao pesquisar
    cy.get('.mw-search-nonefound').should('exist')                   //verificando se o aviso de pessoa nao existente aparece
  })

  it('Login invalido', () => {
    cy.get('#pt-login-2 > a > span').click()                         //clicando no botao "Entrar"
    cy.get('#firstHeading').should('have.text','Entrar')             //verificando header da pagina
    //inserindo valores incorretos no usuario e senha
    cy.get('#wpName1').type('pppppppppp')                            
    cy.get('#wpPassword1').type('1234567890')
    cy.get('#wpLoginAttempt').click()                                //tentando logar 

    cy.get('.mw-message-box').should('exist')                        //verificando se pop up aparece
    cy.get('.cdx-message__content').should('contain','nome de utilizador ou a palavra-passe inseridos estão incorretos.')

  })
})