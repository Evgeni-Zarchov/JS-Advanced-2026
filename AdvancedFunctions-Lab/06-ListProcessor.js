function listProcessor(arr) {
    let result = [];
    for (let el of arr) {
        let [command, value] = el.split(" ");

        if (command === "add") {
            result.push(value);
        } else if (command === "remove") {
            result = result.filter((x) => x !== value);
        } else if (command === "print") {
            console.log(result.join(","));
        }
    }
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
