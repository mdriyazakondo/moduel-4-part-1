const woodQuantity = (charQuantity, tableQuantity, betQuantity) => {
  const totalCharQuantity = 3;
  const totalTableQuantity = 10;
  const totalBetQuantity = 53;

  const allCharQuantity = charQuantity * totalCharQuantity;
  const allTableQuantity = tableQuantity * totalTableQuantity;
  const allBetQuantity = betQuantity * totalBetQuantity;
  const total = allCharQuantity + allTableQuantity + allBetQuantity;
  return total;
};

const wood = woodQuantity(1, 2, 4);
console.log(wood);
