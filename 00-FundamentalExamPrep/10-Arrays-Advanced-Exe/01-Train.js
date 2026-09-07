function train(arr) {
    let wagons = arr
        .shift()
        .split(" ")
        .map((x) => Number(x));
    let capacity = Number(arr.shift());

    const MaxCapacity = capacity;

    for (let el of arr) {
        let command = el.split(" ");

        if (command[0] === "Add") {
            let currentWagon = Number(command[1]);
            wagons.push(currentWagon);
        } else {
            let currentPassengers = Number(command);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + currentPassengers <= MaxCapacity) {
                    wagons[i] += currentPassengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
