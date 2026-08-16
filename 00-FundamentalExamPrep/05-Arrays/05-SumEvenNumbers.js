function sumEven(arr) {
    let evenNums = 0;

    for (let el of arr) {
        let num = Number(el);
        if (num % 2 === 0) {
            evenNums += num;
        }
    }

    console.log(evenNums);
}

sumEven(["1", "2", "3", "4", "5", "6"]);
sumEven(["3", "5", "7", "9"]);
sumEven(["2", "4", "6", "8", "10"]);
