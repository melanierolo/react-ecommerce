import React from "react";
import "./style.css";
import Item from "../Item";

export default function ItemList({ products }) {
  return (
    <div className="products">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
}
