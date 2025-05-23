let num = 21;
let sum = 0;
while (num >= 15) {
  console.log("hello number", num);
  if (num % 2 == 1) {
    sum = sum + num;
    console.log("odd number", num);
    console.log(num);
    console.log(sum);
  }
  console.log(num);
  num--;
}
