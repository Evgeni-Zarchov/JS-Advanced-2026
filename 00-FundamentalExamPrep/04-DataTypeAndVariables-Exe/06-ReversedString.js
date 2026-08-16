function reversedString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    console.log(result);
}

reversedString("Information");
reversedString("star");
reversedString("racecar");
