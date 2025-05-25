const discountPrice = (price) => {
  if (price < 100) {
    const total = price * 100;
    return total;
  } else if (price < 150) {
    const total = price * 90;
    return total;
  } else {
    const total = price * 70;
    return total;
  }
};

const totalPrice = discountPrice(151);
console.log(totalPrice);
