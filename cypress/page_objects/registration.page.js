class RegistrationPage {
    get firstNameInput() { return cy.get('[name="firstName"]'); }
    get lastNameInput() { return cy.get('[name="lastName"]'); }
    get emailInput() { return cy.get('[name="email"]'); }
    get passwordInput() { return cy.get('[name="password"]'); }
    get registerButton() { return cy.get('[type="submit"]'); }
    get errorMessage() { return cy.get('[role="alert"]'); }
    get fieldsErrorMessages() { return cy.get("p.MuiFormHelperText-root") };
    
    registerUser(firstName, lastName, email,password) {
      this.firstNameInput.type(firstName)
      this.lastNameInput.type(lastName)
      this.emailInput.type(email)
      this.passwordInput.type(password)
      this.registerButton.click();
    }
  
    registerExistingUser() {
      cy.fixture('userCredentials.json').then((userCredentials) => {
        this.firstNameInput.type(userCredentials.firstName)
        this.lastNameInput.type(userCredentials.lastName)
        this.emailInput.type(userCredentials.email)
        this.passwordInput.type(userCredentials.password)
        this.registerButton.click();
      });
    }
  }
  
  export default new RegistrationPage();