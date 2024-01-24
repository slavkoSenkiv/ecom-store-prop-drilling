import Product from "./Product";
import { DUMMY_PRODUCTS } from "../dummy-products";

export default function Shop() {
  return (
    <div id="shop">
      <h1>Shop</h1>
      <ul id="products">
        {DUMMY_PRODUCTS.map((product, index) => {
          const { image, title, price, description } = product;
          return (
            <li key={index}>
              <Product
                image={image}
                title={title}
                price={price}
                description={description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
