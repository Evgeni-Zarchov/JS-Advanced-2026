function calorieObj(data) {
    const obj = {};

    for (let i = 0; i < data.length; i += 2) {
        let product = data[i];
        let quantity = Number(data[i + 1]);

        obj[product] = quantity;
    }

    console.log(obj);
}
calorieObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
