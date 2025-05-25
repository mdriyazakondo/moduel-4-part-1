const totalDiscount = (price) => {
  const first100Price = 100;
  const second100Price = 90;
  const above100Price = 70;
  if (price <= 100) {
    const total = price * first100Price;
    return total;
  } else if (price <= 200) {
    const fistPrice = 100 * first100Price;
    const secondPrice = (price - 100) * second100Price;
    const total = fistPrice + secondPrice;
    return total;
  } else {
    const fistPrice = 100 * first100Price;
    const secondPrice = 100 * second100Price;
    const abovePrice = (price - 200) * above100Price;
    const total = fistPrice + secondPrice + abovePrice;
    return total;
  }
};

const totalPrice = totalDiscount(250);
console.log(totalPrice);
