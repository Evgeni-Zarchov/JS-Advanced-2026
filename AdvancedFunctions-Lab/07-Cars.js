function createCarsObjet(input) {
    let cars = {};

    for (let el of input) {
        let action = el.split(" ");
        let command = action[0];

        if (command === "create") {
            let name = action[1];

            if (action[2] === "inherit") {
                let parentName = action[3];

                cars[name] = Object.create(cars[parentName]);
            } else {
                cars[name] = {};
            }
        } else if (command === "set") {
            let name = action[1];
            let key = action[2];
            let value = action[3];
            cars[name][key] = value;
        } else if (command === "print") {
            let result = [];
            let name = action[1];

            for (let key in cars[name]) {
                result.push(`${key}:${cars[name][key]}`);
            }

            console.log(result.join(","));
        }
    }
}

createCarsObjet([
    "create c1",

    "create c2 inherit c1",

    "set c1 color red",

    "set c2 model new",

    "print c1",

    "print c2",
]);
