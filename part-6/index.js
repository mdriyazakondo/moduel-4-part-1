const friends = ["shohag", "mominul", "sujon", "manik", "arif"];
const friends2 = [
  { id: 1, name: "shohag", age: 22 },
  { id: 1, name: "mominul", age: 23 },
  { id: 1, name: "sujon", age: 24 },
  { id: 1, name: "manik", age: 20 },
];
// for (let i = 0; i < friend.length; i++) {
//   console.log(friend[i]);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

for (let friend in friends2) {
  console.log(friends2[friend]);
}
