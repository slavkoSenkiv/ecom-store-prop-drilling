import logo from "../../public/logo.png";
import { CartContext } from "../store/cart-context";
import CartModal from "./CartModal";
import { useRef, useContext } from "react";

export default function Header() {
  const {items} = useContext(CartContext);

  let actions;
  {items.length > 0
    ? (actions = (
        <div>
          <button>Close (?)</button>
          <button>Checkout (?)</button>
        </div>
      ))
    : (actions = (
        <div>
          <button>Close (?)</button>
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
      <button onClick={() => modal.current.open()}>Cart {items.length}</button>
    </div>
  );
}