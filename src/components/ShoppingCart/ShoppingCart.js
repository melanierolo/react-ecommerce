import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

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
    <>
      <div>
        <div>
          <h2>Productos</h2>
          {cart.map((product) => (
            <ShoppingItem key={product.item.id} {...product} />
          ))}
        </div>
        <button onClick={() => clearCart()}>Eliminar Todo</button>
      </div>
      <div>
        <h2>Detalles de compra:</h2>
        <p>Productos: {numberOfProducts}</p>
        <p>Subtotal :${total}</p>
        <p>Envío : $9 </p>
        <p>Total :${total + 9}</p>
        <button onClick={clearCart}>Finalizar compra</button>
      </div>
    </>
  );
}

export default ShoppingCart;
