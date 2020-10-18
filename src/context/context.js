import React, { Component } from 'react'
import { LinkData } from './LinkData'
import { socialData } from '../context/socialData'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: LinkData,
    socialIcons: socialData,
    cart: [],
  }

  //HAndle Sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  //HAndle SideCart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen })
  }

  //Close Cart
  closeCart = () => {
    this.setState({ cartOpen: false })
  }

  //Open Cart
  openCart = () => {
    this.setState({ cartOpen: true })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer
export { ProductProvider, ProductConsumer }
