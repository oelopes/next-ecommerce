describe('add product to cart', () => {
  it('should be able to navigate to the product page an add it to the cart', () => {
    cy.visit('/')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')
    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    // should not duplicate products on cart
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')
    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})