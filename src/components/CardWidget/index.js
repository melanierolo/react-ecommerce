import React from 'react';
import iconShopping from '../../assets/icons/shopping-cart.png';
import { Link } from 'react-router-dom';
import './style.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CardWidget() {
  const { numberOfProducts } = useContext(CartContext);
  return (
    <div className='shopping'>
      <Link to='/cart'>
        {' '}
        <img
          className='shopping__icon'
          src={iconShopping}
          alt='icon shopping cart'
        />
        <strong>{numberOfProducts}</strong>
      </Link>
    </div>
  );
}
