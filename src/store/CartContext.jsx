import { createContext, useReducer } from "react";

const CartContext = createContext({
 items: [],
 addItem: (item) => {},
 removeItem: (id) => {},
})

//reducer function
function cartReducer(state, action) {
 if (action.type === 'ADD_ITEM') {
  //add item to the cart
  //find existing item index
  const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
  
  //if item exists in the cart it has index greater than -1

  const updatedItems = [...state.items]
  
  if (existingCartItemIndex > -1) {
   const existingItem = state.items[existingCartItemIndex]
   const updatedItem = {
    ...existingItem,
    quantity: existingItem.quantity + 1,
   }
   updatedItems[existingCartItemIndex] = updatedItem;
  } else { 
   //if we don't have the item in the cart
   updatedItems.push({...action.item, quantity:1})

  }
return {...state, items: updatedItems}
 }

 if(action.type==="REMOVE_ITEM") {

 }
 return state
}


function CartContextProvider({ children }) {

 const [state, dispatch] = useReducer(cartReducer, {
  items: [],
 })


 return (
  <CartContext.Provider>{ children}</CartContext.Provider>
 )
}

export { CartContextProvider, CartContext }