/// <reference path="../support/index.d.ts" />


import { priceFields, genreFields, platformFields, sortFields } from '../../src/utils/filter/fields'

describe('Game Page', () => {
  before(() => {
    cy.visit('/games')

  })
  it('should render filters columns', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.getFields(sortFields)
    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(genreFields)
  })
})
