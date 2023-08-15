import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Filter from '../Components/filter'

test('selects colors correctly', () => {
  // Mock function for setting selected colors
  const setSelectedColors = jest.fn()

  // Render the Filter component with mock props
  render(
    <Filter
      selectedColors={['R']} // Replace with initial selected colors
      setSelectedColors={setSelectedColors}
    />
  )

  // Simulate clicking a color checkbox
  const colorCheckbox = screen.getByLabelText('R') // Replace with actual color label
  fireEvent.click(colorCheckbox)

  expect(setSelectedColors).toHaveBeenCalledWith(['R', 'G']) // Replace with expected selected colors
})
