import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Item({ id, name, cost }) {
  return (
    <div className="card">
      {" "}
      <p>{id}</p>
      <p>
        <b>Nombre:</b>
        {name}
      </p>
      <p>
        <b>Precio:</b>
        {cost}
      </p>
      <Link to={`/item/${id}`}>Ver detalles</Link>
    </div>
  );
}
