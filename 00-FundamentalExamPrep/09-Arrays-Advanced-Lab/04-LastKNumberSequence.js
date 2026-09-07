function kSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let kElements = result.slice(-k);

        for (let el of kElements) {
            sum += el;
        }

        result.push(sum);
    }

    console.log(result.join(" "));
}

kSequence(8, 2);
