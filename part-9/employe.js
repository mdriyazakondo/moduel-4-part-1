const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalPrice(price) {
  let totalEmployee = 0;
  for (let per of price) {
    const experience = per.experience * per.increment;
    const startingPrice = experience + per.starting;
    if (startingPrice > 0) {
      totalEmployee = totalEmployee + startingPrice;
    }
  }
  return totalEmployee;
}

const totalPriceEmployees = totalPrice(employees);
console.log(totalPriceEmployees);
