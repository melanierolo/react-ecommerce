import { useState } from 'react';
import './style.css';
const ItemCount = ({ start, stock, functionAdd }) => {
  const [count, setCount] = useState(start);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > start) {
      setCount(count - 1);
    }
  };

  return (
    <div className='item-count'>
      <div className='item-count__container'>
        <button
          className='item-count__button item-count__button--decrement'
          onClick={decrement}
        >
          -
        </button>
        <p className='item-count__count'>{count}</p>
        <button
          className='item-count__button item-count__button--increment'
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className='item-count__addButton'>
        <button className='add-button' onClick={() => functionAdd(count)}>
          Agregar Producto
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
