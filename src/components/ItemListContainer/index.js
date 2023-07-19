import React from "react";
import "./style.css";
import Product from "../Product";

export default function ItemListContainer({ message }) {
  return (
    <section className="container">
      <h2>{message}</h2>
      <Product name={"Computadora"} cost={"$1000"} />
    </section>
  );
}
