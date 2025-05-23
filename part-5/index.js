let sentence = "I am a learning web dev.";

// let reverse = "";

// for (let letter of sentence) {
//   reverse = letter + reverse;
// }

// for (let i = 0; i < sentence.length; i++) {
//   let letter = sentence[i];
//   reverse = letter + reverse;
//   console.log(sentence[i]);
// }

let str = sentence.split(" ").reverse().join(" ");
console.log(str);
// console.log(reverse);
