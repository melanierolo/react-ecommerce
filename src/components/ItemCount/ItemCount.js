import { useState } from 'react';
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
    <>
      <div>
        <button onClick={decrement}> - </button>
        <p>{count}</p>
        <button onClick={increment}> + </button>
      </div>
      <button onClick={() => functionAdd(count)}>Agregar Producto</button>
    </>
  );
};

export default ItemCount;
