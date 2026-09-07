function distinct(arr) {
    let result = [];

    for (let el of arr) {
        if (!result.includes(el)) {
            result.push(el);
        }
    }

    console.log(result.join(" "));
}

distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
