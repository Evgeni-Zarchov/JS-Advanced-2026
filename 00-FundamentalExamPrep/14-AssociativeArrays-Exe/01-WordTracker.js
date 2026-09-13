function wordsTrack(arrOfStr) {
    const wordCountObj = {};

    let searchedWords = arrOfStr.shift().split(" ");
    for (let word of searchedWords) {
        if (!wordCountObj.hasOwnProperty(word)) {
            wordCountObj[word] = 0;
        }
    }

    for (let el of arrOfStr) {
        let word = el.split(", ");

        if (wordCountObj.hasOwnProperty(word)) {
            wordCountObj[word]++;
        }
    }

    let sorted = Object.entries(wordCountObj).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

wordsTrack([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",

    "to",
    "count",
    "the",
    "occurrences",
    "of",

    "the",
    "words",
    "this",
    "and",
    "sentence",

    "because",
    "this",
    "is",
    "your",
    "task",
]);
