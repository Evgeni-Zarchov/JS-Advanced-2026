function oddOccurrence(str) {
    let mapWords = new Map();

    let elements = str.split(" ");

    for (let el of elements) {
        el = el.toLowerCase();

        if (!mapWords.has(el)) {
            mapWords.set(el, 0);
        }
        let currentValue = mapWords.get(el);
        mapWords.set(el, currentValue + 1);
    }

    let result = [];
    for (let [key, value] of mapWords.entries()) {
        if (value % 2 === 1) {
            result.push(key);
        }
    }

    console.log(result.join(" "));
}

oddOccurrence("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
