const mobile = {
  name: "samsung A20",
  price: 12000,
  brand: "samsung",
  color: "black",
  camera: "64mp",
  isNew: true,
};

for (const prop in mobile) {
  console.log(prop);
  console.log(mobile[prop]);
}
