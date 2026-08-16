function amazingNumbers(sequence) {
    let specialNums = sequence.toString();
    let sum = 0;

    for (let i = 0; i < specialNums.length; i++) {
        sum += Number(specialNums[i]);
    }

    let output = sum.toString().includes("9");
    if (output) {
        console.log(`${specialNums} Amazing? True`);
    } else {
        console.log(`${specialNums} Amazing? False`);
    }
}
amazingNumbers(1233);
