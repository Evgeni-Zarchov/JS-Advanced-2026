function sumFirstLast(arr) {
    arr = arr.map((x) => Number(x));
    let first = arr.shift();
    let last = arr[arr.length - 1];

    let result = first + last;

    return result;
}

console.log(sumFirstLast(["20", "30", "40"]));
