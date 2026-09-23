function printStoreInfo(arr) {
    const storeCatalogueObj = {};

    for (let el of arr) {
        let [key, value] = el.split(" : ");

        storeCatalogueObj[key] = value;
    }

    let sortedEntries = Object.entries(storeCatalogueObj).sort((a, b) =>
        a[0].localeCompare(b[0]),
    );

    let sortingLetter = "";

    for (let [key, value] of sortedEntries) {
        if (sortingLetter !== key[0]) {
            sortingLetter = key[0];
            console.log(sortingLetter);
        }

        console.log(`  ${key}: ${Number(value)}`);
    }
}

printStoreInfo([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);
