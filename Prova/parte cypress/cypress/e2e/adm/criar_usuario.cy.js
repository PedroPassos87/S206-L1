describe('Funcionalidades do Login', () => {

  it.only('login de adm com sucesso', () => {
    //visitando pagina de login
    cy.visit('https://confianopai.com/login')

    //acessando o perfil de adm
    cy.get(':nth-child(2) > .sc-ktwOfi').type('Arnold9@')           //username
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')                //senha
    
    //login button
    cy.get('.sc-csKJxZ').click()

    //verificando se foi pra pagina de projetos, que é a default
    cy.url().should('include', 'https://confianopai.com/adm/projetos')

    //verificando header
    cy.get('.sc-dJGMql').should('have.text','Administrador')
  })

  it('logout', () => {
    //visitando pagina de login
    cy.visit('https://confianopai.com/login')

    //acessando o perfil de adm
    cy.get(':nth-child(2) > .sc-ktwOfi').type('Arnold9@')           //username
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')                //senha
    
    //login button
    cy.get('.sc-csKJxZ').click()

    //verificando se foi pra pagina de projetos, que é a default
    cy.url().should('include', 'https://confianopai.com/adm/projetos')

    //verificando header
    cy.get('.sc-dJGMql').should('have.text','Administrador')

    //botao logout
    cy.get('.sc-csKJxZ').click()
    //verificando pagina
    cy.url().should('include', 'https://confianopai.com/login')
    
  })

  it('login de adm sem sucesso', () => {
    //visitando pagina de login
    cy.visit('https://confianopai.com/login')

    //acessando o perfil de adm com dados errados
    cy.get(':nth-child(2) > .sc-ktwOfi').type('Ppmilgrau')           //username
    cy.get(':nth-child(3) > .sc-ktwOfi').type('19092')                //senha
    
    //verificando alerta ao tentar logar
    cy.on('window:alert', cy.stub().as('alerted'))
    cy.get('.sc-csKJxZ').click()
    cy.get('@alerted')
      .should('have.been.calledOnce')
      .and('have.been.calledWith', 'Falha no login, verifique suas credenciais.')
  })
})

describe('funcionalidade da aba criar usuário',() => {
  
  beforeEach(() => {
    login()
  });

  it('Acessar pagina',() => {

    //acessando pagina
    cy.get('[href="/adm/novo-usuario"]').click()

    //verificando header
    cy.get('.sc-bSstmL').should('have.text','Criar usuário')
  })
  
  it('Criar usuario com sucesso',() => {

    //acessando pagina
    cy.get('[href="/adm/novo-usuario"]').click()

    //verificando texto da caixa de seleção
    cy.get('.sc-crHHJw').should('have.value','')

    //selecionando o tipo de usuário
    cy.get('.sc-crHHJw').select('Aluno')

    //verificando texto da caixa de seleção
    cy.get('.sc-crHHJw').should('have.value','aluno')

    //inserindo dados
    let infos = criarUser()                                                               //gerando dados aleatorios
    cy.get(':nth-child(1) > .sc-jSUdEz > .sc-jPpdYo').type(infos[0])                      //nome
    cy.get(':nth-child(2) > .sc-jSUdEz > .sc-jPpdYo').type(infos[1])                      //email
    cy.get(':nth-child(3) > .sc-jSUdEz > .sc-jPpdYo').type(infos[2])                      //senha 

    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()                             //botao criar usuario

    //pop up criado com sucesso
    cy.get('.Toastify__toast-body').should('be.visible')
    cy.get('.Toastify__toast-body').should('have.text','Usuário criado com sucesso!')
  })
  
  it('Usuario com email invalido nao deve ser criado',() => {
    //acessando pagina
    cy.get('[href="/adm/novo-usuario"]').click()

    //verificando texto da caixa de seleção
    cy.get('.sc-crHHJw').should('have.value','')

    //selecionando o tipo de usuário
    cy.get('.sc-crHHJw').select('Aluno')

    //verificando texto da caixa de seleção
    cy.get('.sc-crHHJw').should('have.value','aluno')

    cy.get(':nth-child(1) > .sc-jSUdEz > .sc-jPpdYo').type('pepe')                    //nome
    cy.get(':nth-child(2) > .sc-jSUdEz > .sc-jPpdYo').type('ppppp.com')        //email
    cy.get(':nth-child(3) > .sc-jSUdEz > .sc-jPpdYo').type('123456')

    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()                             //botao criar usuario
  })

  
})


  

function login(){
   //visitando pagina de login
   cy.visit('https://confianopai.com/login')

   //acessando o perfil de adm
   cy.get(':nth-child(2) > .sc-ktwOfi').type('Arnold9@')           //username
   cy.get(':nth-child(3) > .sc-ktwOfi').type('123')                //senha
   
   //login button
   cy.get('.sc-csKJxZ').click()

}

function criarUser() {

  let hora = new Date().getHours().toString();
  let min = new Date().getMinutes().toString();
  let sec = new Date().getSeconds().toString();
  let ID = hora + min + sec + "ID"
  let Senha = hora + min + sec + "Senha"  
  let Email = hora + min + sec + "@email.com"
  let infos = [ID, Email, Senha]

  return infos
}
