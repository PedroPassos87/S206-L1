const { it } = require("mocha");

describe('Teste das funcionalidade da aba Projetos com sucesso', () => {

    beforeEach(() => {
        login()
      });
    
      it('Acessar pagina de adicionar equipe',() => {
    
        //acessando pagina
        cy.get('[href="/adm/projetos"]').click()
        //verificando header
        cy.get('.sc-hhyKGa').should('have.text','Projetos')

        //botao de adicionar equipe
        cy.get('.sc-gYrqIg > .sc-jdHILj').click()

        //verificando header
        cy.get('.sc-bPrlCs').should('have.text','Adicionar Equipe')
      })

      it('Adicionar equipe com sucesso manualmente',() => {

        //acessando pagina
        cy.get('[href="/adm/projetos"]').click()
        //verificando header
        cy.get('.sc-hhyKGa').should('have.text','Projetos')

        //botao de adicionar equipe
        cy.get('.sc-gYrqIg > .sc-jdHILj').click()

        //verificando header
        cy.get('.sc-bPrlCs').should('have.text','Adicionar Equipe')
    
        //botao inserir manualmente
        cy.get('[href="/adm/add-projeto/cadastro"]').click()

        //------------X------------X------------X----------------

        //integrante 1
        cy.get(':nth-child(2) > :nth-child(1) > .sc-jnlcPO').type('Pedro Passos')
        cy.get(':nth-child(2) > :nth-child(2) > .sc-jnlcPO').type('ph.passos@ges.inatel.br')

        //orientador
        cy.get(':nth-child(6) > :nth-child(1) > .sc-jnlcPO').type('Sr.Vitinho')
        cy.get(':nth-child(6) > :nth-child(2) > .sc-jnlcPO').type('SpringMan@gmail.com')

        //criar
        cy.get('.sc-eGgGjL').click()

        //pop-up sucesso
        cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible').should('have.text','Equipe criada com sucesso!')


      })

      it('Editando nome do projeto com sucesso', () => {
        //acessando pagina
        cy.get('[href="/adm/projetos"]').click()

        //acessando projeto 1
        cy.get('.Toastify__toast-body > :nth-child(2)').should('not.exist')  //pop-up save nao existe
        cy.get('[href="/adm/projetos/1"]').click() 
        cy.get('.sc-iCKXBC').click()    //botao edit
        cy.get('.sc-iVheDh').clear().type('Minecraft 5')
        cy.get('.sc-iCKXBC > :nth-child(1)').click()  //icon save
        cy.get('.hsAEpB > .sc-csKJxZ').click() //botao salvar projeto
        cy.get('.Toastify__toast-body > :nth-child(2)').should('exist')  //pop-up save
        //saindo do projeto
        cy.get('.active').click()
        //verificando mudança na pagina principal
        cy.get('[href="/adm/projetos/1"] > .sc-bZHSRq > .sc-kMzELR').should('contain','Minecraft 5')

        //acessando projeto 1
        cy.get('.Toastify__toast-body > :nth-child(2)').should('not.exist')  //pop-up save nao existe
        cy.get('[href="/adm/projetos/1"]').click() 
        cy.get('.sc-iCKXBC').click()    //botao edit
        cy.get('.sc-iVheDh').clear().type('Minecraft 7')
        cy.get('.sc-iCKXBC > :nth-child(1)').click()  //icon save
        cy.get('.hsAEpB > .sc-csKJxZ').click() //botao salvar projeto
        cy.get('.Toastify__toast-body > :nth-child(2)').should('exist')  //pop-up save
        //saindo do projeto
        cy.get('.active').click()
        //verificando mudança na pagina principal
        cy.get('[href="/adm/projetos/1"] > .sc-bZHSRq > .sc-kMzELR').should('contain','Minecraft 7')

      });

    });

describe('Testes de possiveis irregularidades na criação de projetos', () => {
  beforeEach(() => {
    login()
  });

  it('Criar projeto com aluno inexistente', () => {
    
  
    //botao de adicionar equipe
    cy.get('.sc-gYrqIg > .sc-jdHILj').click()

    //botao inserir manualmente
    cy.get('[href="/adm/add-projeto/cadastro"]').click()

    //pop up nao existe ainda
    cy.get('.Toastify__toast-body').should('not.exist')

    
    //integrante 1 nao existe
    cy.get(':nth-child(2) > :nth-child(1) > .sc-jnlcPO').type('Carol mc')
    cy.get(':nth-child(2) > :nth-child(2) > .sc-jnlcPO').type('carol@ges.inatel.br')

    //orientador existente
    cy.get(':nth-child(6) > :nth-child(1) > .sc-jnlcPO').type('Sr.Vitinho')
    cy.get(':nth-child(6) > :nth-child(2) > .sc-jnlcPO').type('SpringMan@gmail.com')

    //criar
    cy.get('.sc-eGgGjL').click()

    //pop up informando erro
    cy.get('.Toastify__toast-body').should('exist')
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain.text','Aluno não cadastrado')

  });

});


function login(){
    //visitando pagina de login
    cy.visit('https://confianopai.com/login')
 
    //acessando o perfil de adm
    cy.get(':nth-child(2) > .sc-ktwOfi').type('Arnold9@')           //username
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')                //senha
    
    //login button
    cy.get('.sc-csKJxZ').click()
 
 }

 function contProjetos(){


 }