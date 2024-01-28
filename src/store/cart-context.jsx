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
    const existingItemInCartIndex = updatedCartItems.findIndex(
      (product) => product.id === action.payload
    );
    const existingInCartItem = updatedCartItems[existingItemInCartIndex];

    if (existingInCartItem) {
      const updatedItem = {
        ...existingInCartItem,
        quantity: existingInCartItem.quantity + 1,
      };
      updatedCartItems[existingInCartItem] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedCartItems.push({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedCartItems,
    };
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
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
