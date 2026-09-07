function convertToJson(name, lastName, hairColor) {
    let personObj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    };

    let dataAsJson = JSON.stringify(personObj);

    return dataAsJson;
}

console.log(convertToJson("George", "Jones", "Brown"));
