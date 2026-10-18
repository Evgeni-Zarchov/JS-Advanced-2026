function solution() {
    let stringResult = "";

    return {
        append,
        removeStart,
        removeEnd,
        print,
    };
    
    function append(str) {
        stringResult += str;
    }

    function removeStart(n) {
        stringResult = stringResult.slice(n);
    }

    function removeEnd(n) {
        stringResult = stringResult.slice(0, -n);
    }

    function print() {
        console.log(stringResult);
    }
}

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
