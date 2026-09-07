function repeatString(str, times) {
    result = "";

    for (let i = 1; i <= times; i++) {
        result += str;
    }

    return result;
}

console.log(repeatString("abc", 3));
