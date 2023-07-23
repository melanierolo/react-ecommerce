import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../asyncmock";
import ItemDetails from "../ItemDetails";

export default function ItemDetailsContainer() {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getOneProduct(idItem).then((res) => setProduct(res));
  }, [idItem]);
  return (
    <>
      <ItemDetails {...product} />
    </>
  );
}
