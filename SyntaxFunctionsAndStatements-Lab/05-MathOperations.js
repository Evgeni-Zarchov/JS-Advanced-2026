function printResult(firstNum, secondNum, operator) {
    let calcObj = {
        "+": (first, second) => first + second,
        "-": (first, second) => first - second,
        "*": (first, second) => first * second,
        "/": (first, second) => first / second,
        "%": (first, second) => first % second,
        "**": (first, second) => first ** second,
    };

    if (calcObj.hasOwnProperty(operator)) {
        console.log(calcObj[operator](firstNum, secondNum));
    }
    
}

printResult(5, 6, "+");
