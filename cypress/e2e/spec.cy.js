describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://whitelineextfmtest.intertecsys.net/foundation/login')
    cy.get("input[name ='username']").type("user1")
  })
})