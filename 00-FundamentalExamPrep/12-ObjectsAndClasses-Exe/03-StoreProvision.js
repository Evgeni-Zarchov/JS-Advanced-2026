function store(currentStock, reStock) {
    let stock = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let products = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        stock[products] = quantity;
    }

    for (let i = 0; i < reStock.length; i += 2) {
        let products = reStock[i];
        let quantity = Number(reStock[i + 1]);

        if (stock.hasOwnProperty(products)) {
            stock[products] += quantity;
        } else {
            stock[products] = quantity;
        }
    }

    for (let key in stock) {
        console.log(`${key} -> ${stock[key]}`);
    }
}

store(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

    [
        "Flour",
        "44",
        "Oil",
        "12",
        "Pasta",
        "7",

        "Tomatoes",
        "70",
        "Bananas",
        "30",
    ],
);
