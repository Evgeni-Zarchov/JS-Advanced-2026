function biggestElement(matrix) {
    let biggestNum = -Infinity;

    for (let rows = 0; rows < matrix.length; rows++) {
        for (let cols = 0; cols < matrix[rows].length; cols++) {
            let currentNum = matrix[rows][cols];

            if (biggestNum <= currentNum) {
                biggestNum = currentNum;
            }
        }
    }

    return biggestNum;
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145],
]);
