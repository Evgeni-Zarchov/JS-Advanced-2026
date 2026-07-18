function strLength(firstStr, secondStr, thirdStr) {
    let countOfStr = firstStr + secondStr + thirdStr;

    let firstArg = firstStr.length;
    let secondArg = secondStr.length;
    let thirdArg = thirdStr.length;

    let avg = Math.round(firstArg + secondArg + thirdArg) / 3;

    console.log(countOfStr.length);
    console.log(avg.toFixed(0));

}

strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');