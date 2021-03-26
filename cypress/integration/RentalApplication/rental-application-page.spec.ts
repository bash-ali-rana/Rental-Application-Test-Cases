import { demopage } from "../../page-objects/RentalApplication/rental-application-page";
import "@testing-library/cypress/add-commands";

describe("Verify Rental Application Page Functionalities", () => {
  before(() => {
    cy.clearCookies();
    demopage.browse();
  });

  it("should verify the URL is correctly opening the web page", () => {
    demopage.currentPageURL().should("contain", Cypress.config("baseUrl"));
  });

  it("should verify the page title is Acme Demo", () => {
    demopage.pageTitle().should("contain", "Acme Demo");
  });

  it("should verify the page footer has cookies notification", () => {
    demopage.cookiesSectionText().should("contain", "Wir verwenden Cookies");
  });

  it("should close the close the cookies notification", () => {
    demopage.closeCookiesMessage();
    demopage.cookiesSectionText().should("not.exist");
  });

  it("should change language to english", () => {
    demopage.changeLanguageToEnglish();
    cy.contains("Anmelden", { timeout: 3000 }).should("not.exist");
    demopage.closeCookiesMessage();
  });

  it("should verify footer section has support link", () => {
    demopage.pageFooterSupportLink().should("exist");
  });

  it("should verify footer section has privacy policy link", () => {
    demopage.pageFooterPrivacyPolicyLink().should("exist");
  });

  it("should verify footer section has site notice link", () => {
    demopage.pageFooterSiteNoticeLink().should("exist");
  });

  it("should verify footer section has terms & conditions link", () => {
    demopage.pageFooterTermsConditionsLink().should("exist");
  });

  it("should verify household information tab is selected by default", () => {
    demopage.householdInformationTab().should("be.enabled");
  });

  it("should fill form for Household Information and submit", () => {
    demopage.selectNumberOfAdultsDropdownValue();
    demopage.selectNumberOfChildrenDropdownValue();
    demopage.selectNumberOfApplicantDropdownValue();
    demopage.validFirstNameInput();
    demopage.validLastNameInput();
    demopage.submitForm();
  });
});
