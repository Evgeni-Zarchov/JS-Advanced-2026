function lowerOrUpper(char) {
    let str = char;
    let isSame = char.toLowerCase();

    if (str === isSame) {
        console.log("lower-case");
    } else {
        console.log("upper-case");
    }
}

lowerOrUpper("L");
