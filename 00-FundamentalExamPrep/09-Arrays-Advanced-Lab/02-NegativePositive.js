function negativePositiveNums(arr) {
    arr = arr.map((x) => Number(x));

    let result = [];

    for (let el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    return result.join("\n");
}

console.log(negativePositiveNums(["7", "-2", "8", "9"]));
console.log(negativePositiveNums(["3", "-2", "0", "-1"]));
