import React, { useEffect } from 'react'

const Inhalt = ({ daten, cart, setCart, summe, setSumme }) => {
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.name === product.name
    )
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingProductIndex].quantity += 1
      setCart(updatedCart)
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
    }
    daten.find((item) => item === product).lager -= 1
  }
  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.preis * product.quantity
    }, 0)
  }
  useEffect(() => {
    setSumme(calculateTotal() / 100)
  }, [cart])

  return (
    <div className='grid sm:grid-cols-3  gap-4 grid-cols-1 mt-6 border-b-2 pb-4'>
      {daten.map((item, index) => {
        return (
          <div key={index} className='flex flex-col items-center'>
            <div className='w-full h-40 bg-[#455A7C]'></div>
            <div className='bg-gray-200 flex flex-col items-center w-full  pb-4'>
              <h4>{item.name}</h4>
              <div className='flex flex-row space-x-2'>
                <p>Anzahl: </p>
                <p>{item.lager}</p>
              </div>
              <p>{item.preis / 100} €</p>

              <button
                disabled={item.lager === 0}
                className={`bg-blue-400 px-2 rounded hover:bg-blue-300 `}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Inhalt
