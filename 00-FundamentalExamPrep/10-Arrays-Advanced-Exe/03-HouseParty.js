function houseTrack(arr) {
    let guestList = [];

    for (let info of arr) {
        let tokens = info.split(" ").join(" ");
        let name = tokens.split(" ")[0];

        if (tokens.includes("is going!")) {
            if (!guestList.includes(name)) {
                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
        if (tokens.includes("is not going!")) {
            if (!guestList.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let idx = guestList.indexOf(name);
                guestList.splice(idx, 1);
            }
        }
    }
    console.log(guestList.join("\n"));
}

houseTrack([
    "Allie is going!",

    "George is going!",

    "John is not going!",

    "George is not going!",
]);
