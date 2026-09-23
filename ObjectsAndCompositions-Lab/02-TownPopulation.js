function townPopulation(data) {
    let townInfo = {};

    for (let el of data) {
        let [city, treasury] = el.split(" <-> ");
        treasury = Number(treasury);
        if (!townInfo.hasOwnProperty(city)) {
            townInfo[city] = 0;
        }
        townInfo[city] += treasury;
    }

    for (let key in townInfo) {
        console.log(`${key} : ${townInfo[key]}`);
    }
}

townPopulation([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
]);
