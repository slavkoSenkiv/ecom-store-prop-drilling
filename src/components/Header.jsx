import logo from "../../public/logo.png";
import { CartContext } from "../store/cart-context";
import CartModal from "./CartModal";
import { useRef, useContext } from "react";

export default function Header() {
  const { items } = useContext(CartContext);

  let actions;
  {
    items.length > 0
      ? (actions = (
          <>
            <button>Close</button>
            <button>Checkout</button>
          </>
        ))
      : (actions = <button>Close</button>);
  }

  const modal = useRef();
  return (
    <>
      <CartModal ref={modal} actions={actions} />
      <header id="main-header">
        <div id="main-title">
          <img src={logo} alt="" />
          <h1>Elegant Context</h1>
        </div>
        <button onClick={() => modal.current.open()}>
          Cart {items.length}
        </button>
      </header>
    </>
  );
}
