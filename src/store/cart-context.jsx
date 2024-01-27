import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemInCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {

    const updatedCartItems = [...state.items];

    const itemToAddIndex = DUMMY_PRODUCTS.findIndex(
      (product) => product.id === action.payload
    );

    if (existingCartItem) {

    } else {

      updatedCartItems.push(DUMMY_PRODUCTS[itemToAddIndex]);

    }

    return { 
      ...state, 
      items: updatedCartItems };
  }

  if (action.type === "UPDATE_ITEM") {
    console.log("updating item");
    return { ...state };
  }
}

export default function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });

  function handleAddItemToCart(id) {
    cartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateItemInTheCart() {
    cartDispatch({
      type: "UPDATE_ITEM",
    });
  }

  const ctxValue = {
    items: cartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemInCart: handleUpdateItemInTheCart,
  };

  return (
    <CartContext.Provider value={ctxValue}> {children}</CartContext.Provider>
  );
}
