import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  it('displays filtered and sorted products', () => {
    render(<App />)

    // Test filtering by category and color
    const categoryCheckbox = screen.getByLabelText('A')
    fireEvent.click(categoryCheckbox)

    const colorCheckbox = screen.getByLabelText('R')
    fireEvent.click(colorCheckbox)

    // Test sorting
    const sortAscButton = screen.getByText('Asc')
    fireEvent.click(sortAscButton)
  })

  it('adds item to cart and updates total sum', () => {
    render(<App />)

    // Test adding an item to the cart
    const addToCartButton = screen.getByText('Add to Cart')
    fireEvent.click(addToCartButton)

    // Test the presence of the item in the cart
    const cartItem = screen.getByText('Product 1')
    expect(cartItem).toBeInTheDocument()

    // Test updating the total sum
    const totalSum = screen.getByText('Summe:')
    expect(totalSum).toHaveTextContent('1000 Euro')
  })
})
