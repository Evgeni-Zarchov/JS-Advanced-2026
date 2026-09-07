function MathPower(num, power) {
    let result = 1;

    for (let i = 1; i <= power; i++) {
        result *= num;
    }

    return result;
}

console.log(MathPower(2, 8));
