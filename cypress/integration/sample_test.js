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

  describe('My First Test', () => {
    it('Visits Google main page', () => {
      cy.visit('www.google.com')
    })
  })

  describe('My Secound test', () => {
    it('Agreees witht terms', () => {
        cy.contains('Strinjam se').click()
    })
  })