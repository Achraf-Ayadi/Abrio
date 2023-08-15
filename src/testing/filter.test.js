import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Filter from '../Components/filter'

describe('Filter component', () => {
  test('renders without errors', () => {
    render(<Filter />)
  })

  test('selects and unselects categories correctly', () => {
    render(<Filter />)

    const categoryCheckbox = screen.getByLabelText('A')
    fireEvent.click(categoryCheckbox)

    expect(categoryCheckbox.checked).toBe(true)

    fireEvent.click(categoryCheckbox)

    expect(categoryCheckbox.checked).toBe(false)
  })

  test('selects and unselects colors correctly', () => {
    render(<Filter />)

    const colorCheckbox = screen.getByLabelText('R')
    fireEvent.click(colorCheckbox)

    expect(colorCheckbox.checked).toBe(true)

    fireEvent.click(colorCheckbox)

    expect(colorCheckbox.checked).toBe(false)
  })

  test('clicks on Asc button correctly', () => {
    const setSort = jest.fn()
    render(<Filter setSort={setSort} />)

    const ascButton = screen.getByText('Asc')
    fireEvent.click(ascButton)

    expect(setSort).toHaveBeenCalledWith('asc')
  })

  test('clicks on Desc button correctly', () => {
    const setSort = jest.fn()
    render(<Filter setSort={setSort} />)

    const descButton = screen.getByText('Desc')
    fireEvent.click(descButton)

    expect(setSort).toHaveBeenCalledWith('desc')
  })
})
