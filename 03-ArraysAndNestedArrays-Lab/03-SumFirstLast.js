function sumFirstAndLast(arr) {
    let currentArray = arr.map((x) => Number(x));

    let firstEl = currentArray.shift();
    let lastEl = currentArray.pop();

    let sum = firstEl + lastEl;

    return sum;
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));