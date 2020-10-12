import React from 'react'

import About from './pages/AboutPage'
import Cart from './pages/CartPage'
import Contact from './pages/ContactPage'
import Default from './pages/Default'
import Home from './pages/HomePage'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProductPage'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' components={Home} />
        <Route path='/about' components={About} />
        <Route path='/contact' components={Contact} />
        <Route path='/cart' components={Cart} />
        <Route path='/products' components={Products} />
        <Route exact path='/products:id' components={SingleProduct} />
        <Route components={Default} />
      </Switch>
    </>
  )
}

export default App
