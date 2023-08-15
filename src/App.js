import React, { useEffect, useState } from 'react'
import './App.css'
import Filter from './Components/filter'
import Inhalt from './Components/inhalt'
import WarenKorb from './Components/warenKorb'
import data from './daten'

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedFarben, setSelectedFarben] = useState([])
  const [sort, setSort] = useState('asc')
  const [NewProducts, setNewProducts] = useState([])
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )
  const [summe, setSumme] = useState(0)

  useEffect(() => {
    let filteredProducts =
      selectedCategories.length === 0 && selectedFarben.length === 0
        ? data
        : data.filter(
            (item) =>
              item.kategorie.some((category) =>
                selectedCategories.includes(category)
              ) && item.farbe.some((farbe) => selectedFarben.includes(farbe))
          )
    if (sort === 'asc') {
      filteredProducts.sort((a, b) => {
        return a.preis - b.preis
      })
    }
    if (sort === 'desc') {
      filteredProducts.sort((a, b) => {
        return b.preis - a.preis
      })
    }
    setNewProducts(filteredProducts)
  }, [selectedCategories, selectedFarben, sort, cart])

  // Hier wird der Cart in LocalStorage gespeichert
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <section className='sm:w-1/2 bg-[#8aebf8] px-8  w-10/12 mx-auto'>
      <Filter
        setSort={setSort}
        selectedFarben={selectedFarben}
        setSelectedFarben={setSelectedFarben}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      ></Filter>
      <Inhalt
        summe={summe}
        setSumme={setSumme}
        cart={cart}
        setCart={setCart}
        daten={NewProducts}
      ></Inhalt>
      <WarenKorb
        summe={summe}
        setSumme={setSumme}
        cart={cart}
        setCart={setCart}
        daten={NewProducts}
      ></WarenKorb>
    </section>
  )
}

export default App
