function gcd(firstNum, secondNum) {
    let maxDivider = Math.max(firstNum, secondNum);

    while (maxDivider !== 0) {
        if (firstNum % maxDivider === 0 && secondNum % maxDivider === 0) {
            console.log(maxDivider);
            break;
        }

        maxDivider--;
    }
}

gcd(15, 5);