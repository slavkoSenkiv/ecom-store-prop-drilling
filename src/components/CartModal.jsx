import Cart from "./Cart";
import { useRef, forwardRef, useImperativeHandle } from "react";

const CartModal = forwardRef(function CartModal({actions}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog}>
      <p>this is cart modal</p>
      <Cart />
      {actions}
    </dialog>
  );
});

export default CartModal;
