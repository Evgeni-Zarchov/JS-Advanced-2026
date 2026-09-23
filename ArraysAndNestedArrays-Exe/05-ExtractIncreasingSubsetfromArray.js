function increasingSubset(arr) {
    let result = arr.reduce((acc, value) => {
        if (acc.length === 0) {
            acc.push(value);
        } else if (value >= acc[acc.length - 1]) {
            acc.push(value);
        }

        return acc;
    }, []);

    return result;
}

increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
