function party(arr) {
    const vipGuests = [];
    const regularGuests = [];

    let index = arr.indexOf("PARTY");

    let currentGuests = arr.slice(0, index);
    let arrivedGuests = arr.slice(index + 1);

    for (let guest of currentGuests) {
        if (isVip(guest)) {
            vipGuests.push(guest);
        } else {
            regularGuests.push(guest);
        }
    }

    for (let el of arrivedGuests) {
        if (vipGuests.includes(el)) {
            let guestIndex = vipGuests.indexOf(el);
            vipGuests.splice(guestIndex, 1);
        } else {
            if (regularGuests.includes(el)) {
                let guestIndex = regularGuests.indexOf(el);
                regularGuests.splice(guestIndex, 1);
            }
        }
    }

    console.log(vipGuests.length + regularGuests.length);
    vipGuests.forEach((x) => console.log(x));
    regularGuests.forEach((x) => console.log(x));

    function isVip(str) {
        return str[0] >= "0" && str[0] <= "9";
    }
}

party([
    "7IK9Yo0h",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
    "tSzE5t0p",
    "PARTY",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
]);
