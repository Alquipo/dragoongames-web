/// <reference path="../support/index.d.ts" />

import { xorBy } from "cypress/types/lodash"

describe("Home Page", () => {
  it('should render home sections', () => {
    //visitar pagina
    cy.visit('/')

    //selecionou os banners
    cy.get('.slick-slider').within(() => {
      cy.findAllByRole('heading', { name: /Cyberpunk 2077/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500)

      cy.findAllByRole('heading', { name: /Horizon zero Down/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(3) > button').click()

      cy.findAllByRole('heading', { name: /Control Ultimate Edition/i })
      cy.findByRole('link', { name: /buy now/i })


    })
  })
})
