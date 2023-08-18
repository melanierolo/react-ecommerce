import { useState, createContext } from 'react';

// 1-Create the context and give it a default value
export const CartContext = createContext({
  cart: [],
  total: 0,
  numberOfProducts: 0,
});

export const CartProvider = ({ children }) => {
  // create state for cart, total, and totalQuantity
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  console.log(cart);

  // add some methods to manipulate the shopping cart
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.item.id === itemId);
  };

  // add a product to the cart and update the total
  const addProduct = (item, quantityOfProducts) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { item, quantityOfProducts }]);
      setNumberOfProducts((prev) => prev + quantityOfProducts);
      setTotal((prev) => prev + item.price * quantityOfProducts);
    } else {
      const updatedCart = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return {
            ...prod,
            quantityOfProducts: prod.quantityOfProducts + quantityOfProducts,
          };
        } else {
          return prod;
        }
      });

      setCart(updatedCart);
      setNumberOfProducts((prev) => prev + quantityOfProducts);
      setTotal((prev) => prev + item.price * quantityOfProducts);
    }
  };

  const removeItemFromCart = (id) => {
    const productRemoved = cart.find((prod) => prod.item.id === id);
    const updatedCart = cart.filter((prod) => prod.item.id !== id);

    setCart(updatedCart);
    setNumberOfProducts((prev) => prev - productRemoved.quantityOfProducts);
    setTotal(
      (prev) =>
        prev - productRemoved.item.price * productRemoved.quantityOfProducts
    );
  };

  const clearCart = () => {
    setCart([]);
    setNumberOfProducts(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        numberOfProducts,
        addProduct,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
