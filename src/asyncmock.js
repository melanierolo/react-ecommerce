const myProducts = [
  { id: 1, name: "computadora", cost: 2000, idCat: "1" },
  { id: 2, name: "Gaming Keyboard", cost: 15, idCat: "2" },
  { id: 3, name: "Apple AirPods ", cost: 128, idCat: "3" },
  {
    id: 4,
    name: "Basics Wireless Computer Mouse with USB",
    cost: 10,
    idCat: "1",
  },
];
{
  /*idCat:
1: computers, 2: Peripherals 3: extra
*/
}
export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(myProducts);
    }, 2000);
  });
};

// Function to get a single product

export const getOneProduct = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const product = myProducts.find((product) => product.id === id);
      res(product);
    }, 2000);
  });
};

// Function that returns a whole category

export const getProductsByCategory = (idCategory) => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      const productsByCategory = myProducts.filter(
        (product) => product.idCat === idCategory
      );
      resolve(productsByCategory);
    }, 300);
  });
};
