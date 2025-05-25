const mobile = [
  { name: "Samsung", price: 62000, camera: "12mb", color: "black" },
  { name: "xoami", price: 22000, camera: "12mb", color: "black" },
  { name: "itel", price: 12000, camera: "12mb", color: "black" },
  { name: "iPhone", price: 122000, camera: "12mb", color: "black" },
  { name: "Walton", price: 11000, camera: "12mb", color: "black" },
];

function allPhonePrice(mobiles) {
  let minPrice = 0;
  for (let i = 0; i < mobiles.length; i++) {
    if (true) {
      minPrice = minPrice + mobiles[i].price;
    }
  }
  return minPrice;
}

const allPhone = allPhonePrice(mobile);
console.log(allPhone);
