import React from 'react'
import { FaBars, FaCartPlus } from 'react-icons/fa'
import styled from 'styled-components'
import { ProductConsumer } from '../context/context'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <>
      <ProductConsumer>
        {value => {
          const { cartItems, handleSidebar, handleCart } = value
          return (
            <NavWrapper>
              <div className='nav-center'>
                <FaBars className='nav-icon' onClick={handleSidebar} />
                <img src={logo} alt='tech store logo' />
                <div className='nav-cart'>
                  <FaCartPlus className='nav-icon' onClick={handleCart} />
                  <div className='cart-item'>{cartItems}</div>
                </div>
              </div>
            </NavWrapper>
          )
        }}
      </ProductConsumer>
    </>
  )
}

const NavWrapper = styled.nav``

export default Navbar
