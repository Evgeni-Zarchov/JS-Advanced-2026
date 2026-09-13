function parkingLot(arr) {
    let parkingRegister = new Set();

    for (let el of arr) {
        let [command, carNumber] = el.split(", ");

        if (command === "IN") {
            parkingRegister.add(carNumber);
        } else if (command === "OUT") {
            parkingRegister.delete(carNumber);
        }
    }

    if (parkingRegister.size === 0) {
        console.log("Parking Lot is Empty");
        return;
    } else {
        let sortedParking = Array.from(parkingRegister.values()).sort();

        console.log(sortedParking.join("\n"));
    }
}

// parkingLot([
//     "IN, CA2844AA",

//     "IN, CA1234TA",

//     "OUT, CA2844AA",

//     "IN, CA9999TT",

//     "IN, CA2866HI",

//     "OUT, CA1234TA",

//     "IN, CA2844AA",

//     "OUT, CA2866HI",

//     "IN, CA9876HH",

//     "IN, CA2822UU",
// ]);

parkingLot(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
