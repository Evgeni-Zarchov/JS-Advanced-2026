function asciiReverse(first, second, third) {
    console.log(`${third}${second}${first}`);
    console.log(
        `${third.charCodeAt(0)} ${second.charCodeAt(0)} ${first.charCodeAt(0)}`,
    );
}

asciiReverse("a", "b", "c");
