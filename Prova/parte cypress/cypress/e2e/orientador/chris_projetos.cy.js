describe('Funcionalidades da página projetos Orientador', () => {
    
    beforeEach(() => {
        login()
    });

    it('Verificando informações da pagina', () => {
        //header
        cy.get('.sc-dJGMql').should('have.text','Orientador')

        //verificando nome do orientador no projeto
        cy.get('.sc-bZHSRq > :nth-child(3)').contains('Chris')

        //testando busca
        cy.get('.sc-ckdEwu').type('java')      //procurando 'Java'
        cy.get('.sc-bZHSRq > .sc-kMzELR').should('contain.text', 'java')  //verificando nome do projeto

        cy.get('.sc-ckdEwu').clear().type('b')      //procurando 'Java'
        cy.get('.sc-bZHSRq > .sc-kMzELR').should('contain.text', 'bloons')  //verificando nome do projeto



        //indo para o manual do orientador
        cy.get('[href="/orientador/manual"]').click()

        //header
        cy.get('.sc-juusvx').should('have.text','Manual do Orientador')



        //indo para fases da fetin
        cy.get('[href="/orientador/fases"]').click()

    });




});

function login(){
    //visitando pagina de login
    cy.visit('https://confianopai.com/login')
 
    //acessando o perfil de adm
    cy.get(':nth-child(2) > .sc-ktwOfi').type('Chris@')           //username
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')                //senha
    
    //login button
    cy.get('.sc-csKJxZ').click()
 
 }