let a = 5;
let b = 7;

let temp = a;
console.log(a, b);
a = b;
b = temp;

// console.log(a, b);

let x = 10;
let y = 20;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
