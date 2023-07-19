import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock.js";
import ItemList from "../ItemList/index.js";
import { useParams } from "react-router-dom";
import "./style.css";

export default function ItemListContainer({ message }) {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  // Manages side effects triggered by changes in idCategory
  useEffect(() => {
    const functionProducts = idCategory ? getProductsByCategory : getProducts;
    functionProducts(idCategory).then((response) => setProducts(response));
  }, [idCategory]);

  return (
    <section className="container">
      <h2>{message}</h2>
      {/* I'll pass the products as a pro */}
      <ItemList products={products} />
    </section>
  );
}
