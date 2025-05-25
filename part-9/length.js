const jim = "shagor";
const tim = "mominul";
const kim = "arif";
const dim = "ariful islam";
const khim = "md riyaz akonda";

const nameOfLength = (names) => {
  let name = names[0];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > name.length) {
      name = names[i];
    }
  }
  return name;
};

const name = [jim, tim, khim, kim, dim];

const fullName = nameOfLength(name);
console.log(fullName);
