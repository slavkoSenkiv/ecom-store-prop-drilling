import logo from "../../public/logo.png";
import CartModal from "./CartModal";
import { useRef } from "react";
import items from "../store/cart-context";

export default function Header() {
  let actions;
  {items.length > 0
    ? (actions = (
        <div>
          <button>Close</button>
          <button>Checkout</button>
        </div>
      ))
    : (actions = (
        <div>
          <button>Close</button>
        </div>
      ));}

  const modal = useRef();
  return (
    <div id="main-header">
      <CartModal ref={modal} actions={actions}/>
      <span id="main-title">
        <img src={logo} alt="" />
        <h1>Elegant Context</h1>
      </span>
      <button onClick={() => modal.current.open()}>Cart (X)</button>
    </div>
  );
}
