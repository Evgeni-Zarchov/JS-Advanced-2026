function largestNumber(firstNum, secondNum, thirdNum) {
    // to check for largest number have math max, but i will do with series of if else.

    // i will create one variable and set first num as current max number in the if it will change.

    let maxNumber = thirdNum;

    if (firstNum > secondNum && firstNum > thirdNum) {
        maxNumber = firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        maxNumber = secondNum;
    } else {
        maxNumber = thirdNum;
    }


    console.log(`The largest number is ${maxNumber}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);