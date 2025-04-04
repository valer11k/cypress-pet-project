# Cypress Pet Project

## 🌟 Overview
This project is a personal pet project created to practice and demonstrate my skills in end-to-end testing using [Cypress](https://www.cypress.io/). It includes automated tests for various user scenarios, focusing on real-world application testing.
- **cypress/**: Contains well-organized test specifications and necessary configurations.
- **.github/workflows/**: Houses GitHub Actions workflows for continuous integration, keeping the project tested and up-to-date.
- **cypress.config.js**: Configuration file for defining Cypress settings.
- **package.json**: Lists project dependencies and available scripts.
- **package-lock.json**: Maintains consistency by locking dependency versions.

## 🚀 Getting Started
The project utilizes environment variables to manage sensitive data and configuration settings. Make sure to set up your environment file before running tests.
Setting up the project locally is a breeze! Follow these steps to get started:

1. Clone the repository:
   ```bash
   git clone https://github.com/valer11k/cypress-pet-project.git
   ```

2. Move to the project directory:
   ```bash
   cd cypress-pet-project
   ```

3. Install all necessary dependencies:
   ```bash
   npm install
   ```

## 🧪 Running Tests

### Open the Cypress Test Runner for an interactive experience:
```bash
npx cypress open
```

### Run tests in headless mode for quick results:
```bash
npx cypress run
```

## 🤖 Continuous Integration
This project is integrated with GitHub Actions to automate test execution on every commit and pull request. Stay confident knowing that your code changes are continuously validated!
