function magicSum(arr, magicNum) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            let firstEl = arr[i];
            let secondEl = arr[k];

            if (firstEl + secondEl === magicNum) {
                console.log(`${firstEl} ${secondEl}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
