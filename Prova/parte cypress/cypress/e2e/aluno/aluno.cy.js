describe('Funcionalidades do aluno', () => {
  beforeEach(() => {
    login()
  });

  it('Verificando nome do aluno nos projetos', () => {
    
    //verificando nome do aluno nos projetos
    for (let i = 24; i < 29; i++){
      cy.get(`[href="/aluno/projetos/${i}"]`).click()
      cy.get('.sc-ZaPur > :nth-child(1) > p').should('contains.text','jotaro')
      cy.get('.sc-gKBqHi > img').click()
    }
    
  });
})

function login(){
  //visitando pagina de login
  cy.visit('https://confianopai.com/login')

  //acessando o perfil de adm
  cy.get(':nth-child(2) > .sc-ktwOfi').type('gato@gmail.com')           //username
  cy.get(':nth-child(3) > .sc-ktwOfi').type('gato')                //senha
  
  //login button
  cy.get('.sc-csKJxZ').click()

}