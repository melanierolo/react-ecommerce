import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './style.css';

function ShoppingItem({ item, quantityOfProducts }) {
  const { removeItemFromCart } = useContext(CartContext);
  return (
    <div className='shopping-cart-item'>
      <h4 className='shopping-cart-item__name'>{item.name}</h4>
      <p className='shopping-cart-item__quantity'>
        Cantidad: {quantityOfProducts}
      </p>
      <p className='shopping-cart-item__price'>Precio: {item.price}</p>
      <button
        className='shopping-cart-item__button'
        onClick={() => removeItemFromCart(item.id)}
      >
        Eliminar
      </button>
      <hr />
    </div>
  );
}

export default ShoppingItem;
