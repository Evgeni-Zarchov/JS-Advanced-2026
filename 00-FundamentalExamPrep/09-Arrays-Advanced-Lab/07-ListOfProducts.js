function listOfProducts(arr) {
    let result = arr
        .sort()
        .map((el, i) => `${i + 1}.${el}`)
        .join("\n");
    return result;
}

console.log(listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]));
