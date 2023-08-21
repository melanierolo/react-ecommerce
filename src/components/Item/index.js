import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUrlImage } from '../../lib/firebase';
import './style.css';

export default function Item({ id, name, price, brand, imgUrl }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function fetchImageUrl() {
      try {
        const url = await getUrlImage(imgUrl);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image URL', error);
      }
    }
    fetchImageUrl();
  }, [imgUrl]);

  console.log(imageUrl);
  return (
    <div className='card'>
      <picture>
        <img src={`${imageUrl}`} alt={`product ${id}`} />
      </picture>
      <h4>{brand}</h4>
      <p>{name}</p>
      <p>
        Precio <b>${price}</b>
      </p>
      <Link to={`/item/${id}`}>Ver detalles</Link>
    </div>
  );
}
