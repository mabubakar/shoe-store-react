import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import Store from './Store'
// Context
export const GlobalContext = createContext(Store)

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, Store)

  // Actions
  const getShoeItem = id => {
    dispatch({
      type: 'GET_SHOE_ITEM_FROM_ID',
      payload: id,
    })
  }

  const addItem = id => {
    dispatch({
      type: 'ADD_ITEM_TO_STORE',
      payload: id,
    })
  }

  const minusItem = id => {
    dispatch({
      type: 'MINUS_ITEM_FROM_STORE',
      payload: id,
    })
  }

  const removeItems = ids => {
    dispatch({
      type: 'REMOVE_ITEMS_FROM_STORE',
      payload: ids,
    })
  }

  const emptyCart = () => {
    dispatch({
      type: 'EMPTY_CART',
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        cartCount: state.cartCount,
        cartItems: state.cartItems,
        shoeData: state.shoeData,
        shoeItem: state.shoeItem,
        getShoeItem,
        addItem,
        removeItems,
        minusItem,
        emptyCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
