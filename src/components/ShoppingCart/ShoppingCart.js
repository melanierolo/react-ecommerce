import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import './style.css';

function ShoppingCart() {
  const { cart, clearCart, total, numberOfProducts } = useContext(CartContext);

  if (numberOfProducts === 0) {
    return (
      <>
        <h2>Tu carrito está vacío</h2>
        <Link to='/'>Ver Productos</Link>
      </>
    );
  }
  return (
    <section className='cart'>
      <div className='cart'>
        <div className='cart-products'>
          <h2 className='cart-products__title'>Productos</h2>
          {cart.map((product) => (
            <ShoppingItem key={product.item.id} {...product} />
          ))}
          <button className='cart-clear-button' onClick={() => clearCart()}>
            Eliminar Todo
          </button>
        </div>
      </div>
      <div className='cart-summary'>
        <h2 className='cart-summary__title'>Detalles de compra:</h2>
        <p className='cart-summary__info'>Productos: {numberOfProducts}</p>
        <p className='cart-summary__info'>Subtotal: ${total}</p>
        <p className='cart-summary__info'>Envío: $9</p>
        <p className='cart-summary__info'>Total: ${total + 9}</p>
        <Link to='/checkout' className='cart-summary__checkout-link'>
          <button className='cart-summary__checkout-button'>
            Finalizar compra
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ShoppingCart;
