function printNth(arr, step) {
  let result = [];

  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }

  return result;
}

console.log(printNth(["5", "20", "31", "4", "20"], 2));
console.log(printNth(["dsa", "asd", "test", "tset"], 2));
