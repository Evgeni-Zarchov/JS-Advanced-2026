function fruits(typeOfProduct, kgInGrams, pricePerProduct) {
    let kg = Number(kgInGrams / 1000);
    let price = kg * pricePerProduct;

    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${typeOfProduct}.`);
}

fruits("orange", 2500, 1.80);