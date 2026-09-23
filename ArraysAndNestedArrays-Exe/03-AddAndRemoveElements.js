function addOrRemove(arr) {
    let result = [];
    let initialValue = 1;

    for (let el of arr) {
        if (el === "add") {
            result.push(initialValue++);
        } else if (el === "remove") {
            result.pop(initialValue++);
        }
    }

    if (result.length === 0) {
        console.log("Empty");
        return;
    } else {
        console.log(result.join("\n"));
    }
}

addOrRemove(["add", "add", "remove", "add", "add"]);
