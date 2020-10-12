Feature: Test Login and Signup Feature for the Typeform Website
I want to test the login and signup functionality for Typeform

Scenario: Test Signup functionality (Happy Path Scenario)

Given I open the Signup Page for Typeform
When I verify that SignupPage is asking for details with message "English"
Then I enter my Email on LoginPage as "aashishk77@typeform.com" and my password as "aashishk17"
And I click on Create Free Account and check checkboxes

Scenario: Test Login functionality (Happy Path Scenario)

Given I open the Login Page for Typeform
When I verify that LoginPage is asking for details with message "Hello, who’s this?"
Then I enter my Email on LoginPage as "aashishk77@typeform.com" and my password as "aashishk17"
And I click on Login Button and check Google Login is present as well