function smallestNums(arr) {
    let newArr = arr.sort((a, b) => a - b).slice(0, 2);

    return newArr.join(" ");
}

console.log(smallestNums([30, 15, 50, 5]));
console.log(smallestNums([3, 0, 10, 4, 7, 3]));