export default (state, action) => {
  switch (action.type) {
    case 'GET_SHOE_ITEM_FROM_ID':
      {
        let shoeItem = state.shoeData.find(x => x.id === Number(action.payload))
        if (shoeItem) {
          return {
            ...state,
            shoeItem,
          }
        }
      }
      break

    case 'ADD_ITEM_TO_STORE': {
      let cartItems = [...state.cartItems]
      let id = action.payload
      let cartItemIndex = cartItems.findIndex(x => x.id === Number(id))

      if (cartItemIndex === -1) {
        let shoeItem = state.shoeData.find(x => x.id === Number(id))
        shoeItem.count = 1
        cartItems.push(shoeItem)
      } else {
        cartItems[cartItemIndex].count++
      }

      return {
        ...state,
        cartItems: [...cartItems],
        cartCount: state.cartCount + 1,
      }
    }

    case 'MINUS_ITEM_FROM_STORE': {
      let cartItems = [...state.cartItems]
      let id = action.payload
      let cartItemIndex = cartItems.findIndex(x => x.id === Number(id))

      if (cartItemIndex !== -1) {
        cartItems[cartItemIndex].count--
      }

      return {
        ...state,
        cartItems: [...cartItems],
        cartCount: state.cartCount - 1,
      }
    }

    case 'REMOVE_ITEMS_FROM_STORE': {
      let cartItems = [...state.cartItems]
      console.log(action.payload)
      let ids = [...action.payload]
      let idsToDelete = ids.map(x => x.dataIndex)

      let newCartItems = cartItems.filter(
        (x, index) => !idsToDelete.includes(index),
      )
      let newCartCount = newCartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.count,
        0,
      )

      return {
        ...state,
        cartItems: [...newCartItems],
        cartCount: newCartCount,
      }
    }

    case 'EMPTY_CART': {
      return {
        ...state,
        cartItems: [],
        cartCount: 0,
      }
    }
    default:
      return state
  }
}
