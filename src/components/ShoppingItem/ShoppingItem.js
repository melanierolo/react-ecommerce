import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ShoppingItem({ item, quantityOfProducts }) {
  const { removeItemFromCart } = useContext(CartContext);
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Cantidad:{quantityOfProducts}</p>
      <p>Precio:{item.price}</p>
      <button onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
      <hr></hr>
    </div>
  );
}

export default ShoppingItem;
