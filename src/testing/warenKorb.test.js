import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import WarenKorb from '../Components/warenKorb'

test('removes item from cart', () => {
  const mockCart = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 3 },
  ]
  const setCart = jest.fn()

  render(<WarenKorb summe={0} cart={mockCart} setCart={setCart} />)

  const removeButton = screen.getByText(/remove/i)
  fireEvent.click(removeButton)
})
