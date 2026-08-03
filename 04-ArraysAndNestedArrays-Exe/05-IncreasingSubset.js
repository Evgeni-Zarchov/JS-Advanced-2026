function increasingSub(arr) {
  arr.map((x) => Number(x));

  let result = [];
  let currentBiggest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];

    if (currentBiggest <= currNum) {
      currentBiggest = currNum;
      result.push(currentBiggest);
    }
  }

  return result;
}
increasingSub([1, 3, 8, 4, 10, 12, 3, 2, 24]);
increasingSub([1, 2, 3, 4]);
increasingSub([20]);
