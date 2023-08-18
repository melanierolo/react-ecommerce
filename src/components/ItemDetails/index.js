import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export default function ItemDetails(data) {
  console.log(data);
  // Add product
  const [addQuantity, setAddQuantity] = useState(0);

  /*  bring the 'addProduct' function from the context */
  const { addProduct } = useContext(CartContext);

  // amount handler
  const amountHandler = (amount) => {
    setAddQuantity(amount);
    console.log('products added:', amount);
    const item = { id: data.id, name: data.name, price: data.price };
    console.log('item', item, 'amount', amount);
    addProduct(item, amount);
  };

  return (
    <div>
      <h2>{data.name}</h2>
      <h3>Precio($dólar):</h3>
      <p>{data.price}</p>
      <h3>Descripción del producto:</h3>
      <p>{data.productDescription}</p>
      <ItemCount
        start={1}
        stock={data.stock}
        functionAdd={amountHandler}
      ></ItemCount>
    </div>
  );
}
