import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Item({ id, name, price, brand }) {
  return (
    <div className='card'>
      {' '}
      <h4>{brand}</h4>
      <p>{name}</p>
      <p>
        Precio <b>${price}</b>
      </p>
      <Link to={`/item/${id}`}>Ver detalles</Link>
    </div>
  );
}
