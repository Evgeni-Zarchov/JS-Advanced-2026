function checkNegativeOrPositive(first, second, third) {
    let result = first * second * third;

    if (result < 0) {
        return "Negative";
    } else {
        return "Positive";
    }
}

console.log(checkNegativeOrPositive(5, 12, -15));
