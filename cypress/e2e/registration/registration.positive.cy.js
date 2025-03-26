import { faker } from "@faker-js/faker";
import dashboardPage from "../../page_objects/dashboard.page";
import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import loginPage from "../../page_objects/login.page";
import verificationErrorMessages from "../../fixtures/verificationErrorMessages.json";

const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe("Registration", () => {
  it
  ("Should register a new user account", () => {
    cy.visit("/");
    homePage.registerButton.click();
    registrationPage.registerUser(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );

    dashboardPage.fullNameInput.should("include.text", userData.firstName);
    dashboardPage.fullNameInput.should("include.text", userData.lastName);

    dashboardPage.roleType.should("include.text", verificationErrorMessages.dashboard.role);

    dashboardPage.personIcon.click();
    cy.contains("Logout").click();

    loginPage.login(userData.email, userData.password);

    dashboardPage.fullNameInput.should("include.text", userData.firstName);
    dashboardPage.fullNameInput.should("include.text", userData.lastName);

    dashboardPage.roleType.should("include.text", verificationErrorMessages.dashboard.role);
  });
});