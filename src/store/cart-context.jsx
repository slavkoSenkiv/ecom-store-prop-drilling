import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemInCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    console.log("adding item");
  }
  if (action.type === "UPDATE_ITEM") {
    console.log("updating item");
  }
}

export default function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });

  function handleAddItemToCart() {
    cartDispatch({
      type: "ADD_ITEM"
    });
  }

  function handleUpdateItemInTheCart() {
    cartDispatch({
      type: "UPDATE_ITEM"
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
