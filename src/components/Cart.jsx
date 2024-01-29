import { CartContext } from "../store/cart-context";
import { useContext } from "react";

export default function Cart() {
  const { items, updateItemInCart } = useContext(CartContext);
  const totalSum = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <ul id="cart-items">
        {items.map((cartItem, index) => {
          const formatedItemPrice = ` ($${cartItem.price})`;
          return (
            <li key={index}>
              <div>
                <span>{cartItem.name}</span>
                <span>{formatedItemPrice}</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => updateItemInCart(cartItem.id, -1)}>
                  -
                </button>
                <span>{cartItem.quantity}</span>
                <button onClick={() => updateItemInCart(cartItem.id, 1)}>
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <p id="cart-total-price">Total Sum: ${totalSum.toFixed(2)}</p>
    </>
  );
}
