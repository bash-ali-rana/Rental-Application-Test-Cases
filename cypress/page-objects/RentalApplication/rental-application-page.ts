import { data } from "cypress/types/jquery";
import { validFirstLastName } from "../../fixtures/data";
import { invalidFirstLastName } from "../../fixtures/data";

class RentalApplicationPage {
  public navigate() {
    cy.visit("/");
  }

  public pageTitle() {
    return cy.title();
  }

  public currentPageURL() {
    return cy.url();
  }

  public cookiesSectionText() {
    return cy.get(".jss1 > div:nth-child(4) > div:nth-child(1) > span");
  }
  public get cookiesSectionCloseButton() {
    return cy.get(".MuiIconButton-label > .material-icons");
  }

  public get languageDropdown() {
    return cy.get(
      ".jss1109 > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root"
    );
  }

  public get englishLanguageSelection() {
    return cy.findByRole("option", { name: /English/i });
  }

  public get deutschLanguageSelection() {
    return cy.findByRole("option", { name: /Deutsch/i });
  }

  public pageFooterSupportLink() {
    return cy.findByRole("link", { name: /Support/i });
  }

  public pageFooterPrivacyPolicyLink() {
    return cy.findByRole("link", { name: /Privacy Policy/i });
  }

  public pageFooterSiteNoticeLink() {
    return cy.findByRole("link", { name: /Site Notice/i });
  }

  public pageFooterTermsConditionsLink() {
    return cy.findByRole("link", { name: /Terms & Conditions/i });
  }

  public householdInformationTab() {
    return cy.get(".Mui-selected");
  }

  public numberOfAdultsDropdown() {
    return cy.get("#mui-component-select-noOfAdultsMovingIn");
  }

  public numberOfChildrenDropdown() {
    return cy.get("#mui-component-select-noOfChildrenMovingIn");
  }

  public numberOfApplicantDropdown() {
    return cy.get("#mui-component-select-noOfPeopleOnContract");
  }

  public dropDownValue() {
    return cy.get('[data-value="1"]');
  }

  public firstNameField() {
    return cy.findByPlaceholderText("First name");
  }

  public lastNameField() {
    return cy.findByPlaceholderText("Last name");
  }


  public applicantInfoTab(){
    return cy.findByRole("tab",{name:validFirstLastName.firstName})
  }

  public browse() {
    this.navigate();
  }

  public closeCookiesMessage() {
    this.cookiesSectionCloseButton.click();
  }

  public changeLanguageToEnglish() {
    this.languageDropdown.click();
    this.englishLanguageSelection.click();
  }

  public changeLanguageToDeutsch() {
    this.closeCookiesMessage();
    this.languageDropdown.click();
    this.deutschLanguageSelection.click();
  }

  public selectNumberOfAdultsDropdownValue() {
    this.numberOfAdultsDropdown().click();
    this.dropDownValue().click();
  }

  public selectNumberOfChildrenDropdownValue() {
    this.numberOfChildrenDropdown().click();
    this.dropDownValue().click();
  }

  public selectNumberOfApplicantDropdownValue() {
    this.numberOfChildrenDropdown().click();
    this.dropDownValue().click();
  }

  public validFirstNameInput() {
    this.firstNameField().type(validFirstLastName.firstName);
  }

  public validLastNameInput() {
    this.lastNameField().type(validFirstLastName.lastName);
  }

  public submitForm() {
    cy.get("form").submit();
  }
}

export const demopage = new RentalApplicationPage();
