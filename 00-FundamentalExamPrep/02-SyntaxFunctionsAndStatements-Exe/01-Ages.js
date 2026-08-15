function ages(age) {
  if (age >= 0 && age <= 2) {
    return "baby";
  } else if (age > 2 && age <= 13) {
    return "child";
  } else if (age > 13 && age <= 19) {
    return "teenager";
  } else if (age > 19 && age <= 65) {
    return "adult";
  } else if (age > 65) {
    return "elder";
  } else {
    return "out of bounds";
  }
}

console.log(ages(-1));
