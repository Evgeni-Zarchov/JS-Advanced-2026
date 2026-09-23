function cityInfo(data) {
    const priceInfo = {};

    for (let el of data) {
        let [town, product, price] = el.split(" | ");
        price = Number(price);
        if (!priceInfo.hasOwnProperty(product)) {
            priceInfo[product] = { town, price };
        }

        if (priceInfo[product].price > price) {
            priceInfo[product] = { town, price };
        }
    }

    for (let [key, value] of Object.entries(priceInfo)) {
        console.log(`${key} -> ${value.price} (${value.town})`);
    }
}

cityInfo([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
