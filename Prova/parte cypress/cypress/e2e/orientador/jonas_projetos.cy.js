describe('Funcionalidades da página projetos Orientador', () => {
    
    beforeEach(() => {
        login()
    });

    it('Verificando informações da pagina', () => {
        //header
        cy.get('.sc-dJGMql').should('have.text','Orientador')

        //verificando nome do orientador no projeto
        cy.get('.sc-bZHSRq > :nth-child(3)').contains('Jonas')

        //testando busca
        cy.get('.sc-ckdEwu').type('Gato')      //procurando 'Java'
        cy.get('.sc-bZHSRq > .sc-kMzELR').should('contain.text', 'Gato')  //verificando nome do projeto

        //abrindo projeto
        cy.get('.sc-gjLLEI').click()

        cy.get('.sc-cMdfCE').should('contain.text','Gato')    //verificando nome do projeto
        cy.get('.sc-iYqbYc > :nth-child(1)').should('contain.text','Jonas')//verificando orientador

        //saindo do projeto
        cy.get('.sc-gKBqHi > img').click()

        //verificando url
        cy.url().should('contain', 'https://confianopai.com/orientador/projetos')


    });




});

function login(){
    //visitando pagina de login
    cy.visit('https://confianopai.com/login')
 
    //acessando o perfil de adm
    cy.get(':nth-child(2) > .sc-ktwOfi').type('jonas@gmail.com')           //username
    cy.get(':nth-child(3) > .sc-ktwOfi').type('jonas')                //senha
    
    //login button
    cy.get('.sc-csKJxZ').click()
 
 }