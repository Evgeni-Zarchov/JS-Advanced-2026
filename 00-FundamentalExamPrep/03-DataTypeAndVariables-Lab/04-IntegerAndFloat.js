function integerOrFloat(first, second, third) {
    let result = first + second + third;

    let output =
        result % 1 === 0 ? (result += " - Integer") : (result += " - Float");

    console.log(result);
}

integerOrFloat(100, 200, 303);
