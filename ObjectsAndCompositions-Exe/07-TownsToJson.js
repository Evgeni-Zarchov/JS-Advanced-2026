function printTowns(data) {
    let [town, lo, la] = data
        .shift()
        .split(/\s?\|\s?/)
        .filter((x) => !!x);

    let result = [];
    for (let el of data) {
        let [townA, loB, laC] = el.split(/\s?\|\s?/).filter((x) => !!x);

        loB = Number(loB).toFixed(2);
        laC = Number(laC).toFixed(2);
        let printTownObj = {};
        printTownObj[town] = townA;
        printTownObj[lo] = Number(loB);
        printTownObj[la] = Number(laC);

        result.push(printTownObj);
    }

    console.log(JSON.stringify(result));
}

printTowns([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
]);
