function diagonalSum(matrix) {
    // main diagonal
    // matrix[0][0] = 20, 0
    // matrix[1][1] = 60, 1

    // secondary diagonal matrix length - row - 1

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let rows = 0; rows < matrix.length; rows++) {
        firstDiagonalSum += matrix[rows][rows];
        secondDiagonalSum += matrix[rows][matrix.length - rows - 1];
    }

    console.log(firstDiagonalSum, secondDiagonalSum);
}

diagonalSum([
    [20, 40],
    [10, 60],
]);
