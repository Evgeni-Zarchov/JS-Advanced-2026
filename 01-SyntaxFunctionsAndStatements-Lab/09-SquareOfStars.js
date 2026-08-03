function stars(count) {
    let starsCount = "* ".repeat(count);

    for (let i = 1; i <= count; i++) {
        console.log(starsCount);
    }

}

stars(5);