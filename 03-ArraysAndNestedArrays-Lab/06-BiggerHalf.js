function biggerHalf(arr) {
    let sortedArr = arr.sort((a, b) => a - b);

    let startIndex = Math.floor(arr.length / 2);

    return sortedArr.slice(startIndex);
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));