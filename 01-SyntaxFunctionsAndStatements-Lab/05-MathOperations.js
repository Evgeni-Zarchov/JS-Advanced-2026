function mathOperations(firstNum, secondNum, operator) {
    let operations = {
        '+': () => firstNum + secondNum,
        '-': () => firstNum - secondNum,
        '*': () => firstNum * secondNum,
        '/': () => firstNum / secondNum,
        '%': () => firstNum % secondNum,
        '**': () => firstNum ** secondNum
    };

    let result = operations[operator](firstNum, secondNum);

    console.log(result);

}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');