const biriyaniKhor = [
  "abul",
  "babul",
  "kabul",
  "cabul",
  "nabul",
  "tabul",
  "nabul",
  "tabul",
];
const numbers = [
  12, 34, 12, 55, 66, 77, 66, 78, 88, 99, 88, 44, 33, 22, 66, 55, 33, 22, 11,
];

const len = biriyaniKhor.length;
console.log(len);
function noDuplicate(array) {
  const uniq = [];
  for (const item of array) {
    if (uniq.includes(item) === false) {
      uniq.push(item);
    }
  }
  return uniq;
}

const uniqArray = noDuplicate(biriyaniKhor);
const uniqArray2 = noDuplicate(numbers);
console.log(uniqArray);
console.log(uniqArray2);
