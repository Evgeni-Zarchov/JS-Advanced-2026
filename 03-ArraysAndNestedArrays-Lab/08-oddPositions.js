function oddPositions(arr) {
    let processedArr = arr;

    return processedArr.filter((x, i) => i % 2 !== 0).map((x) => x * 2).reverse().join(" ");

}

console.log(oddPositions([10, 15, 20, 25]));