function magicMatrix(matrix) {
    for (let rows = 0; rows < matrix.length - 1; rows++) {
        let firstRowSum = 0;
        let secondRowSum = 0;
        let firstColSum = 0;
        let secondColSum = 0;

        matrix[rows].forEach((x) => (firstRowSum += x));
        matrix[rows + 1].forEach((x) => (secondRowSum += x));
        matrix.forEach((x) => (firstColSum += x[rows]));
        matrix.forEach((x) => (secondColSum += x[rows + 1]));

        if (firstRowSum !== secondRowSum || firstColSum !== secondColSum) {
            return false;
        }
    }

    return true;
}

console.log(
    magicMatrix([
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5],
    ]),
);
