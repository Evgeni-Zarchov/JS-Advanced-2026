function sequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let kNum = result.slice(-k);

        let sum = 0;
        for (let el of kNum) {
            sum += el;
        }
        result.push(sum);
    }

    return result;
}

sequence(6, 3);
