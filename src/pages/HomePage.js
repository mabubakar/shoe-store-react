import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Hero title='awesom gadgets' max='true'>
        <Link to='/products' className='main-link' style={{ margin: '2rem' }}>
          our Products
        </Link>
      </Hero>
    </>
  )
}

export default HomePage
