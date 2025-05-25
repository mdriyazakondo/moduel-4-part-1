const oddNumbers = (numbers) => {
  let sum = 0;
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum = sum + number;
      odds.push(number);
      // console.log(number);
    }
  }
  console.log(sum);
  const count = odds.length;
  console.log(count);
  const avg = sum / count;
  return avg;
};

const numbers = [12, 33, 44, 55, 66, 88, 22, 53, 64, 75, 89];
const avg = oddNumbers(numbers);
console.log(avg);
