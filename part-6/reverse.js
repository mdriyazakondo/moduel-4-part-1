const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(numbers);
// const reverse = numbers.reverse();
// console.log(reverse);
const reverse_ed = [];
// for (let number of numbers) {
//   reverse_ed.unshift(number);
// }

// for (let i = 0; i <= numbers.length; i++) {
//   reverse_ed.unshift(i);
// }
// console.log(reverse_ed);

for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  console.log(num);
}
