function cake(arr, start, end) {
    let startPoint = arr.indexOf(start);
    let endPoint = arr.indexOf(end);

    let result = arr.slice(startPoint, endPoint + 1);

    return result;
}

console.log(
    cake(
        [
            "Pumpkin Pie",
            "Key Lime Pie",
            "Cherry Pie",
            "Lemon Meringue Pie",
            "Sugar Cream Pie",
        ],
        "Key Lime Pie",
        "Lemon Meringue Pie",
    ),
);
