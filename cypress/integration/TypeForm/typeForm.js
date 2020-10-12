import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../PageObjects/LoginPage';
import SignupPage from '../PageObjects/SignupPage';

//Object Creation for PageObject Page Class and assigning it to a constant variable

const loginPage=new LoginPage();
const signupPage= new SignupPage();
    
//test steps 
Given('I open the Signup Page for Typeform', () => {
    cy.visit(Cypress.env('signupurl'));
})

Given('I open the Login Page for Typeform', () => {
    cy.visit(Cypress.env('loginurl'));
})

When('I verify that SignupPage is asking for details with message {string}',(expectedMessage)=> {
    signupPage.getSelectedLanguage().then(function(element){
        console.log(element.text());
        expect(element.text().includes(expectedMessage)).to.be.true;
    })
})

When('I verify that LoginPage is asking for details with message {string}',(expectedMessage)=> {
    loginPage.getLoginPageText().then(function(element){
        console.log(element.text());
        expect(element.text().includes(expectedMessage)).to.be.true;
    })
})

Then('I enter my Email on LoginPage as {string} and my password as {string}',(userName,password)=> {
    cy.enterCredentials(userName,password);
})

And ('I click on Create Free Account and check checkboxes',() => {
    signupPage.getTerms().click();
    signupPage.getConsent().click();
    signupPage.getCreateAccountButton().click();
})

And ('I click on Login Button and check Google Login is present as well',() => {
    loginPage.getGoogleLogin();
    loginPage.getLoginButton().click();
})