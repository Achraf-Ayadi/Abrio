import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import WarenKorb from '../Components/warenKorb'

describe('WarenKorb component', () => {
  const mockCart = [
    { name: 'Product 1', preis: 1000, quantity: 2 }, // Example cart item
    { name: 'Product 2', preis: 2000, quantity: 3 },
    // ... Add more example cart items as needed
  ]

  it('removes item from cart', () => {
    const setCart = jest.fn()

    render(<WarenKorb summe={0} cart={mockCart} setCart={setCart} />)

    const removeButton = screen.getByRole('button', { name: 'Remove' })
    fireEvent.click(removeButton)

    expect(setCart).toHaveBeenCalledWith([
      { name: 'Product 2', preis: 2000, quantity: 3 },
    ])
  })
})
