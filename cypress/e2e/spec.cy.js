describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.cypress.io/')
    cy.url().should("include", "https://www.cypress.io/")
  })
})