function evenPositions(arr) {
    let result = arr.filter((a, i) => i % 2 === 0).join(" ");

    return result;
}

console.log(evenPositions(["20", "30", "40", "50", "60"]));

console.log(evenPositions(["5", "10"]));
