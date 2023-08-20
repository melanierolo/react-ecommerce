const myProducts = [
  {
    id: '1',
    name: 'Computadora',
    price: 2000,
    stock: 10,
    idCat: '1',
    product:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
  },
  {
    id: '2',
    name: 'Gaming Keyboard',
    price: 15,
    stock: 20,
    idCat: '2',
    productDescription:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested by Cicero are also reproduced in their exact original form',
  },
  {
    id: '3',
    name: 'Apple AirPods ',
    price: 128,
    stock: 4,
    idCat: '3',
    productDescription:
      'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
  },
  {
    id: '4',
    name: 'Basics Wireless Computer Mouse with USB',
    price: 10,
    stock: 15,
    idCat: '2',
    productDescription:
      ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
  },
];

/*idCat:
1: computers, 2: Peripherals 3: extra
*/

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
