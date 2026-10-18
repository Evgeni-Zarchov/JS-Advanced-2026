function solution(input) {
    let value = input;

    return function increment(el) {
        return value + el;
    };
}

let add5 = solution(5);

console.log(add5(2));
