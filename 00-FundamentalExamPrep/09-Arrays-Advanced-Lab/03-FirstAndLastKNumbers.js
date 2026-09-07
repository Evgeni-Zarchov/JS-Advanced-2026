function firstLastKNums(arr) {
    let k = arr.shift();

    let firstPartOfArr = arr.slice(0, k);
    let secondPartOfArr = arr.slice(-k);

    console.log(firstPartOfArr.join(" "));
    console.log(secondPartOfArr.join(" "));
}

firstLastKNums([2, 7, 8, 9]);
firstLastKNums([3, 6, 7, 8, 9]);
