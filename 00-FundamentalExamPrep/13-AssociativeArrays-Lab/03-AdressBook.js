function adressBook(arrInfo) {
    let adressBook = {};

    for (let el of arrInfo) {
        let [key, value] = el.split(":");
        adressBook[key] = value;
    }

    let entries = Object.entries(adressBook)
    .sort((a,b) => a[0].localeCompare(b[0]));

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

adressBook([
    "Tim:Doe Crossing",

    "Bill:Nelson Place",

    "Peter:Carlyle Ave",

    "Bill:Ornery Rd",
]);
