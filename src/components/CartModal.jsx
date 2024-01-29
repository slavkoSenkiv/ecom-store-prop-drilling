import { createPortal } from "react-dom";
import Cart from "./Cart";
import { useRef, forwardRef, useImperativeHandle } from "react";

const CartModal = forwardRef(function CartModal({ actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} id="modal">
      <h2>Cart</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
