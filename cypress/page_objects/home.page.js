class Homepage {
    get loginButton() { return cy.get('[href="/auth/login"]'); }
    get registerButton() { return cy.get('[href="/auth/register"]'); }
    get switchToDarkMode() { return cy.get('[type="checkbox"]'); }
    get searchFieldInput() { return cy.contains(".MuiFormControl-root label", "Search").parent().find("input"); }
    get cityFieldInput() {return cy.contains(".MuiFormControl-root label", "City").parent().find("input"); }
    get bedroomsDropdown() { return cy.contains(".MuiFormControl-root label", "Bedrooms").parent().find('[aria-haspopup="listbox"]'); }
    get selectNumberOfBedrooms() { return cy.get('[role="listbox"]'); }
    get startSearchButton() { return cy.contains("Start Search"); }
    get setminPrice() { return cy.get('input[data-index="0"]'); }
  
    setNumbersOfBedrooms() {
      this.bedroomsDropdown.click();
      this.selectNumberOfBedrooms.contains("2+").click();
    }
  }
  
export default new Homepage();