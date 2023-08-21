import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../lib/firebase';
import ItemDetails from '../ItemDetails';

export default function ItemDetailsContainer() {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getOneProduct(idItem).then((result) => {
      const data = result.data();
      const product = { id: result.id, ...data };
      setProduct(product);
    });
  }, [idItem]);
  return (
    <>
      <ItemDetails {...product} />
    </>
  );
}
