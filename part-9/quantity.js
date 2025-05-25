const product = [
  { name: "shampoo", price: 300, quantity: 2 },
  { name: "chironi", price: 100, quantity: 3 },
  { name: "ayna", price: 500, quantity: 4 },
  { name: "saban", price: 1000, quantity: 10 },
];

function cartTotal(products) {
  let totalPrice = 0;
  for (let product of products) {
    const total = product.price * product.quantity;
    totalPrice = totalPrice + total;
  }
  return totalPrice;
}

const totalPrice = cartTotal(product);
console.log(totalPrice);
