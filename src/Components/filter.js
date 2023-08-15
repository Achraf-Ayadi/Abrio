import React from 'react'

const Filter = ({
  selectedCategories,
  setSelectedCategories,
  selectedFarben,
  setSelectedFarben,
  setSort,
}) => {
  const handleCategoryChange = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories((prevCategories) => [...prevCategories, category])
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((cat) => cat !== category)
      )
    }
  }

  const handleFarbeChange = (farbe, isChecked) => {
    console.log(farbe, isChecked)
    if (isChecked) {
      setSelectedFarben((prevFarben) => [...prevFarben, farbe])
    } else {
      setSelectedFarben((prevFarben) =>
        prevFarben.filter((far) => far !== farbe)
      )
    }
  }

  return (
    <div className='flex sm:flex-row flex-col  sm:justify-between items-center border-b-2 pb-2'>
      <div>
        <h4 className='font-bold'>Kategorie</h4>
        <div className='flex flex-row space-x-4'>
          {['A', 'B', 'C'].map((category, index) => {
            return (
              <div className='flex flex-col ' key={index}>
                <label htmlFor={'color' + category}>{category}</label>
                <input
                  id={category}
                  type='checkbox'
                  value={category}
                  checked={selectedCategories?.includes(category)}
                  onChange={(e) =>
                    handleCategoryChange(category, e.target.checked)
                  }
                ></input>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <h4 className='font-bold'>Farben</h4>
        <div className='flex flex-row space-x-4'>
          {['R', 'G', 'B'].map((farbe, index) => {
            return (
              <div className='flex flex-col  ' key={index}>
                <label
                  htmlFor={'color' + farbe}
                  className={` ${
                    farbe === 'R'
                      ? 'text-red-500'
                      : farbe === 'G'
                      ? 'text-green-500'
                      : 'text-blue-500'
                  }`}
                >
                  {farbe}
                </label>
                <input
                  id={farbe}
                  type='checkbox'
                  value={farbe}
                  checked={selectedFarben?.includes(farbe)}
                  onChange={(e) => handleFarbeChange(farbe, e.target.checked)}
                ></input>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <h1 className='font-bold'>Sortieren</h1>
        <div className='flex flex-row space-x-2 '>
          <button
            className='flex flex-row space-x-4'
            onClick={() => setSort('asc')}
          >
            Asc
          </button>
          <button
            className='flex flex-row space-x-4 '
            onClick={() => setSort('desc')}
          >
            Desc
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filter
