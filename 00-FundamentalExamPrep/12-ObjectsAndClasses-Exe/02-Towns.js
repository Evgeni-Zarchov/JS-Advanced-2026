function towns(arrInfo) {
    class Town {
        constructor(town, la, lo) {
            this.town = town;
            this.latitude = la;
            this.longitude = lo;
        }
    }
    let result = [];

    for (let el of arrInfo) {
        let [town, la, lo] = el.split(" | ");
        la = parseFloat(la).toFixed(2);
        lo = parseFloat(lo).toFixed(2);

        let towns = new Town(town, la, lo);
        result.push(towns);
    }

    for (let el of result) {
        console.log(
            `{ town: '${el.town}', latitude: '${el.latitude}', longitude: '${el.longitude}' }`,
        );
    }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
