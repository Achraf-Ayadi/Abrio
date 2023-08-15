import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Inhalt from '../Components/inhalt'

describe('Inhalt component', () => {
  const mockDaten = [
    { name: 'Product 1', lager: 10, preis: 1000 }, // Example data
    { name: 'Product 2', lager: 5, preis: 2000 },
    // ... Add more example data as needed
  ]

  it('adds item to cart and updates total sum', () => {
    const setCart = jest.fn()
    const setSumme = jest.fn()

    render(
      <Inhalt
        daten={mockDaten}
        cart={[]}
        setCart={setCart}
        summe={0}
        setSumme={setSumme}
      />
    )

    const addToCartButton = screen.getByText('Add to Cart')
    fireEvent.click(addToCartButton)

    expect(setCart).toHaveBeenCalledWith([{ ...mockDaten[0], quantity: 1 }])
    expect(setSumme).toHaveBeenCalled()
  })
})
