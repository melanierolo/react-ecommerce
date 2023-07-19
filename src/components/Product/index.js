import React from "react";
import "./style.css";

export default function Producto({ name, cost }) {
  return (
    <div>
      <p>
        <b>Nombre:</b>
        {name}
      </p>
      <p>
        <b>Precio:</b>
        {cost}
      </p>
    </div>
  );
}
