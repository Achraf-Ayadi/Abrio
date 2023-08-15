import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import WarenKorb from '../Components/warenKorb'

describe('WarenKorb component', () => {
  // Define mock data and mock functions
  const mockCart = [
    { name: 'Product 1', preis: 1000, quantity: 2 },
    { name: 'Product 2', preis: 2000, quantity: 1 },
  ];
  const mockSumme = 5000;
  const mockDaten = [
    { name: 'Product 1', preis: 1000, lager: 10 },
    { name: 'Product 2', preis: 2000, lager: 5 },
  ];
  const mockSetCart = jest.fn();
  const mockSetDaten = jest.fn();

  // Test to check if items are displayed correctly in the cart
  it('displays items in the cart', () => {
    render(
      <WarenKorb summe={mockSumme} cart={mockCart} daten={mockDaten} setCart={mockSetCart} />
    );

    // Check if product names are displayed
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();

    // Check if product prices and quantities are displayed
    expect(screen.getByText('10 €')).toBeInTheDocument();
    expect(screen.getByText('20 €')).toBeInTheDocument();
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  // Test to check if the remove button triggers the removeFromCart function
  it('removes item from cart', () => {
    render(
      <WarenKorb summe={mockSumme} cart={mockCart} daten={mockDaten} setCart={mockSetCart} />
    );

    // Find all remove buttons and click on the first one
    const removeButtons = screen.getAllByRole('button', { name: /remove/i });
    fireEvent.click(removeButtons[0]);

    // Check if setCart function is called with updated cart
    expect(mockSetCart).toHaveBeenCalledWith([{ ...mockCart[1] }]);
  });
});