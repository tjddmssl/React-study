import React, { useState } from "react";
import useProducts from "../../hooks/use-products";

//!`Products()`의 useProducts({ salesOnly: checked }) => `useProducts()`의 useProducts({ salesOnly })이부분,,,,, useEffect의 dependency 로직
/** 1. `checked` mutate
2. calling `useState()`
3. re-assign new `checked`
4. calling `Products()`
5. calling `useProducts()`
6. calling `useEffect()`
7. `products` mutate
8. return new `products` with prev `loading`, `error`
9. re-assign new `products`
10. calling `Products()`
11. re-render */
export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
