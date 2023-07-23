import React from "react";

export default function ItemDetails(data) {
  console.log(data);
  return (
    <div>
      <h2>{data.name}</h2>
      <h3>Precio($dólar):</h3>
      <p>{data.cost}</p>
      <h3>Descripción del producto:</h3>
      <p>{data.productDescription}</p>
    </div>
  );
}
