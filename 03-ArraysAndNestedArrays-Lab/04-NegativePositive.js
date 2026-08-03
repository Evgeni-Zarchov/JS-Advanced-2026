function negativePositive(arr) {
    let newArr = [];

    for (let num of arr) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }

    return newArr.join("\n");
}

console.log(negativePositive([7, -2, 8, 9]));
console.log(negativePositive([3, -2, 0, -1]));