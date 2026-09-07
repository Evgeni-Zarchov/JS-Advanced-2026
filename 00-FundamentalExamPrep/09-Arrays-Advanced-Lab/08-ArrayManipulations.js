function modifyArray(arr) {
    let currentArray = arr
        .shift()
        .split(" ")
        .map((x) => Number(x));

    for (let command of arr) {
        let action = command.split(" ");

        if (action[0] === "Add") {
            currentArray.push(Number(action[1]));
        } else if (action[0] === "Remove") {
            let numToRemove = Number(action[1]);
            let index = currentArray.indexOf(numToRemove);
            while (index !== -1) {
                currentArray.splice(index, 1);
                index = currentArray.indexOf(numToRemove);
            }
        } else if (action[0] === "RemoveAt") {
            let index = Number(action[1]);
            currentArray.splice(index, 1);
        } else if (action[0] === "Insert") {
            let num = Number(action[1]);
            let index = Number(action[2]);

            currentArray.splice(index, 0, num);
        }
    }

    console.log(currentArray.join(" "));
}

modifyArray([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3",
]);
