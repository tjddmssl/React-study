import React, { useState } from "react";
import "./App.css";
import Products from "./components/Products";
//내가 Products.jsx이름 바꿈

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
