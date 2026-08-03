function matrix(arr) {
    let maxNumber = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let currentNumber = arr[i][j];

            if (maxNumber < currentNumber) {
                maxNumber = currentNumber;
            }

        }
    }
    return maxNumber;
}

matrix([
    [20, 50, 10],
    [8, 33, 145]
]);