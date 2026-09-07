function sumFirstLast(arr) {
    arr = arr.map((x) => Number(x));
    let firstEl = arr.shift();
    let lastEl = arr.pop();

    let result = firstEl + lastEl;

    return result;
}

console.log(sumFirstLast(["20", "30", "40"]));
console.log(sumFirstLast(["5", "10"]));
