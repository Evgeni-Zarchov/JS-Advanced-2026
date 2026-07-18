function sum(first, second) {
    let n = Number(first);
    let m = Number(second);

    let result = 0;

    for (let i = n; i <= m; i++) {
        result += i;
    };

    console.log(result);

}

sum('1', '5');
sum('-8', '20');