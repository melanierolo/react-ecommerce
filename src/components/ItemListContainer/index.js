import React from "react";
import "./style.css";

export default function ItemListContainer({ message }) {
  return (
    <section className="container">
      <h2>{message}</h2>
    </section>
  );
}
