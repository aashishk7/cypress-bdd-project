class LoginPage {

getLoginPageText() {
    return cy.get('.title__Title-x7fk8j-0');
}

getGoogleLogin(){
    return cy.get('#google');
}

getLoginButton() {
    return cy.get('#btnlogin');
}
}
export default LoginPage