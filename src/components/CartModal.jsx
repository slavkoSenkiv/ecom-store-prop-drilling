import Cart from "./Cart";
import { useRef, forwardRef, useImperativeHandle } from "react";

const CartModal = forwardRef(function CartModal({actions}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      }
    };
  });

  return (
    <dialog ref={dialog} id="modal">
      <h2>Cart</h2>
      <Cart />
      {actions}
    </dialog>
  );
});

export default CartModal;
