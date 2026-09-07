function convert(jsonData) {
    let jsonAsObj = JSON.parse(jsonData);

    for (let key of Object.keys(jsonAsObj)) {
        console.log(`${key}: ${jsonAsObj[key]}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');
