describe("Testes da criação,registros e login", () => {
  it("Criação de usuario com sucesso", () => {
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Pedro");
    cy.get("#Text1").type("Passos");
    cy.get("#username").type("pp");
    cy.get("#password").type("123");
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contains.text", "Registration successful");
  });

  it("Criação de usuario sem sucesso", () => {
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Pedro");
    cy.get("#Text1").type("Passos");
    cy.get("#username").type("pp");
    cy.get(".btn-primary").should("be.disabled");
  });

  it("Login de usuario com sucesso", () => {
    let infos = criarUser()
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", infos[0])

  });

  it.only("Deletando user e tentando logar", () => {
    let infos = criarUser()
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", infos[0])

    cy.get('.ng-binding > a').click()  //deleting
    cy.get('.btn').click()  //logout

    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should("contain.text","Username or password is incorrect")
  });

});

function criarUser() {

  let hora = new Date().getHours().toString();
  let min = new Date().getMinutes().toString();
  let sec = new Date().getSeconds().toString();
  let ID = hora + min + sec + "ID"
  let Senha = hora + min + sec + "Senha"  
  let infos = [ID, Senha]

  cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
  cy.get(".btn-link").click()
  cy.get("#firstName").type(ID)
  cy.get("#Text1").type(ID)
  cy.get("#username").type(ID)
  cy.get("#password").type(Senha)
  cy.get(".btn-primary").click()
  cy.get(".ng-binding").should("contains.text", "Registration successful")

  return infos
}
