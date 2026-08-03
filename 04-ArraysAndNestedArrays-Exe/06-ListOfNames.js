function listOfNames(arr) {
  arr.sort((a, b) => a.localeCompare(b));

  let result = arr.forEach((x, i) => console.log(`${i + 1}.${x}`));
  return result;
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
