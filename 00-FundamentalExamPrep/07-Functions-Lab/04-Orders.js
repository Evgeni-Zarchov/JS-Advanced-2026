function orders(product, quantity) {
    let price = 0;
    let orderList = {
        coffee: 1.5,
        water: 1.0,
        coke: 1.4,
        snacks: 2.0,
    };

    price = orderList[product] * quantity;
    console.log(price.toFixed(2));
}

orders("water", 5);
