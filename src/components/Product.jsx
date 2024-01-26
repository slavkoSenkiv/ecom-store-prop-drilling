import { CartContext } from "../store/cart-context";
import { useContext } from "react";

export default function Product({ product }) {
  const { image, title, price, description } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-content">
        <h3>{title}</h3>
        <p className="prduct-price">{`$${price}`}</p>
        <p>{description}</p>
        <span className="product-actions">
          <button onClick={addItemToCart}>+ Add (?)</button>
        </span>
      </div>
    </div>
  );
}
