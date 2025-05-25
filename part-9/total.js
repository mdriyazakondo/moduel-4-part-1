const products = [
  { name: "shampoo", price: 300 },
  { name: "chironi", price: 100 },
  { name: "ayna", price: 500 },
  { name: "saban", price: 1000 },
];

function totalProductPrice(numbers) {
  let totalPrice = 0;
  for (let price of numbers) {
    if (price.price) {
      totalPrice = totalPrice + price.price;
    }
  }
  return totalPrice;
}

const totalPrice = totalProductPrice(products);
console.log(totalPrice);
