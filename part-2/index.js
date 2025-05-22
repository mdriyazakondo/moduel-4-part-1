// const price = 3000;
// if (price >= 5000) {
//   const payAmount = price - (price * 10) / 100;
//   const payAmount = (price * 10) / 100;
//   const discount = price - payAmount;
//   console.log(payAmount);
//   console.log(discount);
// } else if (price > 2500) {
//   const discount = price - (price * 5) / 100;
//   console.log(discount);
// } else {
//   console.log(price);
// }

const years = 67;
const price = 500;

if (years <= 12) {
  console.log("sob khabar free");
} else if (years > 60) {
  const discount = price - (price * 50) / 100;
  console.log(discount);
} else if (years > 50) {
  const discount = price - (price * 25) / 100;
  console.log(discount);
} else if (years > 40) {
  const discount = price - (price * 10) / 100;
  console.log(discount);
} else {
  console.log(price);
}
