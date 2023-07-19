const myProducts = [
  { id: 1, name: "computadora", cost: 2000 },
  { id: 2, name: "Gaming Keyboard", cost: 15 },
  { id: 3, name: "Apple AirPods ", cost: 128 },
  { id: 4, name: "Basics Wireless Computer Mouse with USB", cost: 10 },
];

export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(myProducts);
    }, 2000);
  });
};
