//loading type definicion from cypress module

///<reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
         * Custom command to check banner in page
         * @example cy.shouldRenderBanner()
         */
    shouldRenderBanner(): Chainable<Window>
  }
}
