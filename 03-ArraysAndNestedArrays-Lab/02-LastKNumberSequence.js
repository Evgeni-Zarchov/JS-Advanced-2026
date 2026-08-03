function sequence(n, k) {
    let sequenceArr = [1];

    for (let i = 1; i < n; i++) {
        let lastKNums = sequenceArr.slice(-k);

        let sum = 0;
        for (let num of lastKNums) {
            sum += num;
        }

        sequenceArr.push(sum);
    }

    return sequenceArr;
}

console.log(sequence([1, 1, 2, 4, 7, 13]));