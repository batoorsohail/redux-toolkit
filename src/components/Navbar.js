import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

import React from 'react'

export const Navbar = () => {
  const { amount } = useSelector((store) => store.cart)
  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux Tool Kit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
