function pie(arr, firstTarget, secondTarget) {
    let startIndex = arr.indexOf(firstTarget);
    let endIndex = arr.indexOf(secondTarget);

    return arr.slice(startIndex, endIndex + 1);
}

pie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');