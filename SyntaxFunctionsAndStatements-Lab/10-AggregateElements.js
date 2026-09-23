function aggregate(input) {
    let arr = input.slice();
    console.log(printSum(arr));
    console.log(inverse(arr));
    console.log(concat(arr));

    function concat(arr) {
        let result = "";
        for (let el of arr) {
            result += String(el);
        }
        return result;
    }

    function inverse(arr) {
        let inverse = 0;
        for (let el of arr) {
            el = Number(el);
            inverse += 1 / el;
        }
        return inverse;
    }

    function printSum(arr) {
        let sum = 0;
        for (let el of arr) {
            el = Number(el);
            sum += el;
        }
        return sum;
    }
}

aggregate([1, 2, 3]);
