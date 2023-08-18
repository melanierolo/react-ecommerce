import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import React from 'react';

export default function ItemDetails(data) {
  console.log(data);
  // Add product
  const [addQuantity, setAddQuantity] = useState(0);

  // amount handler
  const amountHandler = (amount) => {
    setAddQuantity(amount);
    console.log('products added:', amount);
  };

  return (
    <div>
      <h2>{data.name}</h2>
      <h3>Precio($dólar):</h3>
      <p>{data.cost}</p>
      <h3>Descripción del producto:</h3>
      <p>{data.productDescription}</p>
      {addQuantity > 0 ? (
        <Link to='/cart'>COMPLETE ORDER</Link>
      ) : (
        <ItemCount
          start={1}
          stock={data.stock}
          functionAdd={amountHandler}
        ></ItemCount>
      )}
    </div>
  );
}
