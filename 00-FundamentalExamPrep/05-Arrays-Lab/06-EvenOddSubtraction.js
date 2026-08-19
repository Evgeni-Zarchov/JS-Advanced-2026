function evenOdd(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let el of arr) {
        if (el % 2 === 0) {
            evenSum += el;
        } else {
            oddSum += el;
        }
    }

    console.log(evenSum - oddSum);
}

evenOdd([1, 2, 3, 4, 5, 6]);
evenOdd([3, 5, 7, 9]);
evenOdd([2, 4, 6, 8, 10]);
