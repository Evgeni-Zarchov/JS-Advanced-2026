function sumFirstLast(arr) {
    let firstEl = arr[0];
    let lastEl = arr[arr.length - 1];

    let sum = firstEl + lastEl;

    console.log(sum);
}

sumFirstLast([20, 30, 40]);
sumFirstLast([10, 17, 22, 33]);
sumFirstLast([11, 58, 69]);
