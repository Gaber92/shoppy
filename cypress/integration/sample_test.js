// sample_test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
  })

  describe('Opens landing page', () => {
    it('Visits Google main page', () => {
      cy.visit('www.google.com')
    })
  })

  describe('Should approve pop up window', () => {
    it('Agreees witht terms', () => {
        cy.contains('Strinjam se').click()
    })
  })

  describe('Selects search field', () => {
    it('Agreees witht terms', () => {
        cy.contains('Iskanje').click
        cy.get('[title="Iskanje"]').type('Hello, World')

    })
  })