import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import verificationErrorMessages from "../../fixtures/verificationErrorMessages.json";
import userCredentials from "../../fixtures/userCredentials.json";

describe("Login", () => {
  it("Should login", () => {
    cy.visit("/");
    homePage.loginButton.click();
    loginPage.login(userCredentials.email, userCredentials.password);

    dashboardPage.fullNameInput.should("have.text", verificationErrorMessages.dashboard.fullName);
    dashboardPage.roleType.should("have.text", verificationErrorMessages.dashboard.role);
  });
});