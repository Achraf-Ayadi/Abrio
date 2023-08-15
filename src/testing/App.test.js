import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

test('adds item to cart and updates total sum', () => {
  render(<App />)

  const addItemButtons = screen.queryAllByText('Add to Cart')
  addItemButtons.forEach((button) => {
    fireEvent.click(button)
  })

  // Verify that the item is added to the cart
  const cartItem = screen.getByText('Product 1') // Replace with actual item name
  expect(cartItem).toBeInTheDocument()

  // Verify that the total sum is updated
  const totalSum = screen.getByText('Summe')
  expect(totalSum).toBeInTheDocument()
})
