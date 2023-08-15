import React from 'react'

import { IoRemoveOutline } from 'react-icons/io5'
const WarenKorb = ({ summe, cart, setCart, daten }) => {
  const removeFromCart = (removeProduct) => {
    setCart(cart.filter((product) => product.name !== removeProduct.name))
    // Anzahl der products wieder im lager
    daten.find((item) => item.name === removeProduct.name).lager +=
      removeProduct.quantity
  }
  return (
    <div className=' mt-4 pb-8 space-y-4'>
      <h4>WARENKORB</h4>
      <div className='flex flex-col space-y-8 justify-between'>
        {cart.length === 0 && (
          <p className='flex justify-center'>Warenbkorb ist leer</p>
        )}
        <div className='space-y-2'>
          {cart.map((item, index) => {
            return (
              <div key={index} className='grid grid-cols-5 sm:gap-4 gap-2 '>
                <p className='text- col-span-5 sm:col-span-1 underline sm:no-underline'>
                  {item.name}
                </p>
                <p>{item.preis / 100} €</p>
                <p>X</p>
                <p>{item.quantity}</p>

                <button
                  className='text-red-400 flex justify-center my-auto  rounded-full hover:bg-red-300   '
                  onClick={() => removeFromCart(item)}
                >
                  <IoRemoveOutline size='25' />
                </button>
              </div>
            )
          })}
        </div>

        <div className='text-right'>
          <p>Summe: {summe} €</p>
        </div>
      </div>
    </div>
  )
}

export default WarenKorb
