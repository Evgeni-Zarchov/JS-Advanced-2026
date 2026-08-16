function reverseArr(n, arr) {
    let reversed = [];
    for (let i = 0; i < n; i++) {
        reversed[i] = arr[i];
    }

    let result = "";
    for (let i = reversed.length - 1; i >= 0; i--) {
        result += reversed[i] + " ";
    }

    console.log(result);
}

reverseArr(3, [10, 20, 30, 40, 50]);
reverseArr(4, [-1, 20, 99, 5]);
reverseArr(2, [66, 43, 75, 89, 47]);
