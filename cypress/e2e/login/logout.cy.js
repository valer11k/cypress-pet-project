import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import verificationErrorMessages from "../../fixtures/verificationErrorMessages.json";
import userCredentials from "../../fixtures/userCredentials.json";

describe("Login", () => {
  it("Should logout", () => {
    cy.loginApi(userCredentials.email, userCredentials.password)
    cy.visit("/auth/login");
    
    dashboardPage.fullNameInput.should("have.text", verificationErrorMessages.dashboard.fullName);
    dashboardPage.roleType.should("have.text", verificationErrorMessages.dashboard.role);

    dashboardPage.personIcon.click();
    cy.contains("Logout").click();

    loginPage.signInText.should("have.text", verificationErrorMessages.login.signInText);
  });
});