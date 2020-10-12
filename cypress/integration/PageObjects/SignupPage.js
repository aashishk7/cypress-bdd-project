class SignupPage {

    getSelectedLanguage() {
        return cy.get('.Trigger-sc-1vzvfd2-1 > .Text-wqps8m-0');
    }

    getEmailTextBox(){
        return cy.get('#email');
    }

    getPasswordTextBox() {
        return cy.get('#password');
    }

    getTerms() {
        return cy.get('#terms');
    }

    getConsent() {
        return cy.get('#consents');
    }

    getCreateAccountButton() {
        return cy.get('h1');
    }
    }

export default SignupPage