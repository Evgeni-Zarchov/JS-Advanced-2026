function smallestNums(arr) {
    let result = arr
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(" ");

    return result;
}

console.log(smallestNums([30, 15, 50, 5]));
