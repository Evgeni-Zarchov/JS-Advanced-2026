function addAndSubtract(arr) {
    let resultArr = [];
    let originalSum = 0;
    let updatedSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultArr.push(arr[i] + i);
        } else {
            resultArr.push(arr[i] - i);
        }

        originalSum += arr[i];
    }

    for (let el of resultArr) {
        updatedSum += el;
    }

    console.log(resultArr);
    console.log(originalSum);
    console.log(updatedSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
