function negativePositive(arr) {
    arr = arr.map((x) => Number(x));
    let result = [];

    for (let el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    return result;
}

console.log(negativePositive([7, -2, 8, 9]));
console.log(negativePositive([3, -2, 0, -1]));
