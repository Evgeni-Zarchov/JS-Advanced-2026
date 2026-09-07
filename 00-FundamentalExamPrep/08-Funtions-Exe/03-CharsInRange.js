function charsInRange(first, second) {
    let firstChar = first.charCodeAt(0);
    let secondChar = second.charCodeAt(0);

    let start = Math.min(firstChar, secondChar);
    let end = Math.max(firstChar, secondChar);

    let result = "";

    for (let i = start + 1; i < end; i++) {
        let el = String.fromCharCode(i);
        result += `${el} `;
    }

    console.log(result);
}

charsInRange("a", "b");
