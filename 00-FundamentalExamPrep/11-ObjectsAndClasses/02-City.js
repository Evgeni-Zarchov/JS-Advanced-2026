function city(objData) {
    for (let [key, value] of Object.entries(objData)) {
        console.log(`${key} -> ${value}`);
    }
}

function cityWithKeys(objData) {
    for (let key of Object.keys(objData)) {
        console.log(`${key} -> ${objData[key]}`);
    }
}
cityWithKeys({
    name: "Plovdiv",

    area: 389,

    population: 1162358,

    country: "Bulgaria",

    postCode: "4000",
});

city({
    name: "Plovdiv",

    area: 389,

    population: 1162358,

    country: "Bulgaria",

    postCode: "4000",
});
