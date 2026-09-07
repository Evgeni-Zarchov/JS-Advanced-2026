function process(arr) {
    let result = arr
        .filter((x, i) => i % 2 === 1)
        .map((x) => x * 2)
        .reverse()
        .join(" ");

    return result;
}

console.log(process([10, 15, 20, 25]));
