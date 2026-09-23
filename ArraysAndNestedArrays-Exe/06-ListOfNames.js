function printNames(arr) {
    return arr
        .sort((a, b) => a.localeCompare(b))
        .forEach((x, i) => console.log(`${i + 1}.${x}`));
}

printNames(["John", "Bob", "Christina", "Ema"]);
