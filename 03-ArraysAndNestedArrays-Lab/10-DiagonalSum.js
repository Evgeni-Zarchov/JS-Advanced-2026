function diagonalSum(arr) {
    let sum = 0;
    let diagonalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i];
        diagonalSum += arr[i][arr.length - i - 1];
    }

    console.log(sum, diagonalSum);

}

diagonalSum([
    [20, 40],
    [10, 60]]
);

diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);