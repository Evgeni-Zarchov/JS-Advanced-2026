function printStars(n) {
    let result = "* ".repeat(n);

    for (let i = 1; i <= n; i++) {
        console.log(result);
    }
}

printStars(2);
