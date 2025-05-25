function inchToFeet(inch) {
  const inchFeet = inch / 12;
  return inchFeet;
}

function inchToFeet2(inch) {
  const inchFraction = inch / 12;
  const feetNumber = parseInt(inchFraction);
  const inchFeet = inch % 12;
  const result = feetNumber + " ft " + inchFeet + " inch.";
  return result;
}

const shovoHeight = inchToFeet2(75);
console.log(shovoHeight);
