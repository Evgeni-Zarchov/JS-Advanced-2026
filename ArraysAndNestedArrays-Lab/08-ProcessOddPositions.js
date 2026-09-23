function processArray(arr) {
    return arr
        .filter((x, i) => i % 2 !== 0)
        .map((x) => x * 2)
        .reverse()
        .join(" ");
}

console.log(processArray([10, 15, 20, 25]));
console.log(processArray([3, 0, 10, 4, 7, 3]));
