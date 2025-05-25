// const jim = 50;
// const tim = 90;
// const kim = 100;

// if (jim > tim && jim > kim) {
//   console.log("jim is the big boss");
// } else if (tim > jim && tim > kim) {
//   console.log("tim is the boss");
// } else {
//   console.log("kim is the big boss");
// }

// let big = 0;

// function maxOfThere(num1, num2, num3) {
//   // const number = Math.max(num1, num2, num3);
//   // return number;
//   const numbers = [num1, num2, num3];
//   let max = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }

// const numbers = maxOfThere(jim, tim, kim);

// console.log(numbers);

// function maxOfThere(num1, num2, num3) {
//   const numbers = [num1, num2, num3];
//   let max = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }

// const numbers = maxOfThere(jim, tim, kim);

// console.log(numbers);
const jim = "shagor";
const tim = "mominul";
const kim = "arif";

function maxOfThere(numbers) {
  let number = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].length > number.length) {
      number = numbers[i];
    }
  }
  return number;
}

const num = [jim, tim, kim];

const number = maxOfThere(num);
console.log(number);
