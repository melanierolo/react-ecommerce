import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock.js";
import ItemList from "../ItemList/index.js";
import "./style.css";

export default function ItemListContainer({ message }) {
  const [products, setProducts] = useState([]);

  // Executes once
  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);
  return (
    <section className="container">
      <h2>{message}</h2>
      {/* I'll pass the products as a pro */}
      <ItemList products={products} />
    </section>
  );
}
