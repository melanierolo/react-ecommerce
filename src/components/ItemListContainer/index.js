import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByIdCategory } from '../../lib/firebase.js';
import ItemList from '../ItemList/index.js';
import { useParams } from 'react-router-dom';
import './style.css';

export default function ItemListContainer({ message }) {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  // Manages side effects triggered by changes in idCategory
  useEffect(() => {
    let products = [];

    if (idCategory) {
      getProductsByIdCategory(idCategory).then((response) => {
        response.docs.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
        setProducts(products);
      });
    } else {
      getProducts().then((response) => {
        response.docs.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
        setProducts(products);
      });
    }
  }, [idCategory]);

  return (
    <section className='container'>
      <h2>{message}</h2>
      {/* I'll pass the products as a pro */}
      <ItemList products={products} />
    </section>
  );
}
