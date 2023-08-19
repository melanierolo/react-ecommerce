import React from 'react';
import iconShopping from '../../assets/icons/shopping-cart.png';
import { Link } from 'react-router-dom';
import './style.css';

export default function CardWidget() {
  return (
    <div className='shopping'>
      <Link to='/cart'>
        {' '}
        <img
          className='shopping__icon'
          src={iconShopping}
          alt='icon shopping cart'
        />
      </Link>
    </div>
  );
}
