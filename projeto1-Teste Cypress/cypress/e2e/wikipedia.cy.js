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

  it('Acessando pagina de mudanças recentes e ocultando sidebar', () => {
    cy.get('#ca-talk > a > span').click()                                        //clicando no botao 'Discussao' na pagina principal
    cy.get('.mw-page-title-namespace').should('contain','Wikipédia Discussão')   //verificando se o header da pagina esta correto 

    cy.get('#vector-toc-pinned-container').should('exist')   //sidebar existe
    cy.get('#vector-toc > .vector-pinnable-header > .vector-pinnable-header-unpin-button').click()     //botao ocultar
    cy.get('#vector-toc-pinned-container').should('not.be.visible')   //verificando se sidebar foi ocultada
  })

  it('Acessando tutorial de edição a partir da pagina inicial ', () => {
    cy.get('.hp-welkom-2 > [href="/wiki/Ajuda:Tutorial/Edi%C3%A7%C3%A3o"]').click()     //clicando no link de edição
    cy.get('.mw-page-title-main').should('contain','Tutorial/Edição')  //verificando titulo da pagina
    cy.get('.mw-content-ltr > :nth-child(5)').should('contain','Editar artigos')  //verificando um dos tópicos da pagina

    cy.get('tr > :nth-child(10) > a').click()                      //clicando no link de formatação
    cy.get('.mw-page-title-main').should('contain','Formatação')   //verificando titulo da pagina
  })

})