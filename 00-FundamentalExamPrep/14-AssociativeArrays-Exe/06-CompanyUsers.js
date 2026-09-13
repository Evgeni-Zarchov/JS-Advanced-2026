function printId(arr) {
    let mapId = new Map();

    for (let el of arr) {
        let [key, value] = el.split(" -> ");

        if (!mapId.has(key)) {
            mapId.set(key, new Set());
        }
        mapId.get(key).add(value);
    }

    let sorted = [...mapId.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sorted) {
        console.log(key);
        for (let el of value) {
            console.log(`-- ${el}`);
        }
    }
}

printId([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345",
]);
