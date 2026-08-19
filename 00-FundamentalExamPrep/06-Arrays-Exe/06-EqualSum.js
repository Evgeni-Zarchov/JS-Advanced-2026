function equal(arr) {
    for (let i = 0; i < arr.length; i++) {
        let rightSum = 0;
        let leftSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        if (leftSum === rightSum) {
            console.log(`${i}`);
            return;
        }
    }

    console.log("no");
}

equal([1, 2, 3, 3]);
