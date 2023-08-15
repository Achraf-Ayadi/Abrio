import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Filter from '../Components/filter'

describe('Filter component', () => {
  it('selects categories correctly', () => {
    const setSelectedCategories = jest.fn()
    render(
      <Filter
        selectedCategories={['A']}
        setSelectedCategories={setSelectedCategories}
        selectedFarben={[]}
        setSelectedFarben={() => {}}
        sort=''
        setSort={() => {}}
        daten={[]}
      />
    )

    fireEvent.click(screen.getByLabelText('B'))
    expect(setSelectedCategories).toHaveBeenCalledWith(['A', 'B'])
  })

  it('selects colors correctly', () => {
    const setSelectedFarben = jest.fn()
    render(
      <Filter
        selectedCategories={[]}
        setSelectedCategories={() => {}}
        selectedFarben={['R']}
        setSelectedFarben={setSelectedFarben}
        sort=''
        setSort={() => {}}
        daten={[]}
      />
    )

    fireEvent.click(screen.getByLabelText('G'))
    expect(setSelectedFarben).toHaveBeenCalledWith(['R', 'G'])
  })
})
