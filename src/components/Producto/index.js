import React from "react";
import "./style.css";

export default function Producto({ nombre, precio }) {
  return (
    <div>
      <h2>Nombre:{nombre}</h2>
      <p>Precio:{precio}</p>
    </div>
  );
}
