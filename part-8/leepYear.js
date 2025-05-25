function isLeapYear(year) {
  if (year % 4 === 0) {
    return year + 1;
  } else {
    return year;
  }
}

console.log(isLeapYear(2024));
