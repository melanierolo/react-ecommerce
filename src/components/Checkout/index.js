import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { addOrder } from '../../lib/firebase';

const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [error, setError] = useState('');
  const [orderID, setOrderID] = useState('');

  const { cart, clearCart, total, numberOfProducts } = useContext(CartContext);

  /*Form - checkout */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !emailConfirmation) {
      setError('Please complete all fields.');
      return;
    }

    if (email !== emailConfirmation) {
      setError('Email fields do not match.');
      return;
    }

    addOrder(cart, total, numberOfProducts, firstName, lastName, email)
      .then((doc) => {
        console.log('order-result', doc.id);
        setOrderID(doc.id);
      })
      .catch((error) => {
        throw new Error(error.message, 'error');
      });
  };

  if (orderID) {
    clearCart();
    return (
      <div>
        <h2>!Muchas gracias por tu compra!</h2>
        <p> Tu número de orden es {orderID} </p>
        <Link to='/products' />
      </div>
    );
  }

  return (
    <div>
      <h2> Checkout </h2>
      <hr />
      <h3>Total:</h3>
      <p>{total}</p>
      <h3>Número de Productos:</h3>
      <p>{numberOfProducts}</p>
      <h2>Finalizar compra</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor=''> Name </label>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor=''> Last Name </label>
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor=''> Email </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor=''> Email Confirmación </label>
          <input
            type='email'
            value={emailConfirmation}
            onChange={(e) => setEmailConfirmation(e.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red' }}> {error} </p>}

        <button type='submit'>Comprar</button>
      </form>
    </div>
  );
};

export default Checkout;
