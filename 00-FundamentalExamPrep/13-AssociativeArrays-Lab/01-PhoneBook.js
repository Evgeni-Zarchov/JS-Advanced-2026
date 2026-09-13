function printPhoneBook(data) {
    let phoneBookObj = {};

    for (let el of data) {
        let [key, value] = el.split(" ");

        phoneBookObj[key] = value;
    }

    for (let key in phoneBookObj) {
        console.log(`${key} -> ${phoneBookObj[key]}`);
    }
}

printPhoneBook([
    "Tim 0834212554",

    "Peter 0877547887",

    "Bill 0896543112",

    "Tim 0876566344",
]);
