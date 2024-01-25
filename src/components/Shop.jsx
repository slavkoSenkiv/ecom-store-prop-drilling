import Product from "./Product";
import { DUMMY_PRODUCTS } from "../dummy-products";

export default function Shop() {
  return (
    <div id="shop">
      <h2>Elegant clothing for everyone</h2>
      {DUMMY_PRODUCTS.length === 0 ? (
        <p>There are no products to display!</p>
      ) : (
        <ul id="products">
          {DUMMY_PRODUCTS.map((product, index) => {
            return (
              <li key={index}>
                <Product product={product} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
