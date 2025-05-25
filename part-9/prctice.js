const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

let name = heights2[0];
for (let i = 0; i < heights2.length; i++) {
  if (heights2[i].length < name.length) {
    name = heights2[i];
  }
}

console.log(name);
