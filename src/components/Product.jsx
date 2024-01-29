import { CartContext } from "../store/cart-context";
import { useContext } from "react";

export default function Product({ product }) {
  const { id, image, title, price, description } = product;

  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="product">
      <img src={image} alt="" />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <span className="product-actions">
          <button onClick={() => addItemToCart(id)}>+ Add to cart</button>
        </span>
      </div>
    </article>
  );
}
