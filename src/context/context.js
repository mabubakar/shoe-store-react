import React, { Component } from 'react'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  render() {
    ;<ProductContext.Provider value='Context'></ProductContext.Provider>
  }
}
