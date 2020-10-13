import React from 'react'

import About from './pages/AboutPage'
import Cart from './pages/CartPage'
import Contact from './pages/ContactPage'
import Default from './pages/Default'
import Home from './pages/HomePage'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProductPage'

import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import SideCart from './components/SideCart'

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart} />
        <Route path='/products' component={Products} />
        <Route exact path='/products:id' component={SingleProduct} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
