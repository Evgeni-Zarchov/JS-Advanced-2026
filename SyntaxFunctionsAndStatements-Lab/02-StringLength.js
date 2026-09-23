function strLength(...params) {
    let first = params[0].length;
    let second = params[1].length;
    let third = params[params.length - 1].length;

    let result = first + second + third;
    let average = Math.floor(result / params.length);

    console.log(result);
    console.log(average);
}

strLength("chocolate", "ice cream", "cake");
