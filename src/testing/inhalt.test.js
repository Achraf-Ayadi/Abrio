import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Inhalt from '../Components/inhalt'

describe('Inhalt component', () => {
  const mockDaten = [
    {
      name: 'Produkt 1',
      farbe: ['R'],
      kategorie: ['A'],
      lager: 0,
      preis: 1000,
    },
    {
      name: 'Produkt 2',
      farbe: ['B'],
      kategorie: ['A'],
      lager: 3,
      preis: 899,
    },
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

    const addToCartButton = screen.getAllByText('Add to Cart')[0] 
    fireEvent.click(addToCartButton)


    expect(setCart).toHaveBeenCalledWith([{ ...mockDaten[0], quantity: 1 }])
    expect(setSumme).toHaveBeenCalled()
  })

  
})
