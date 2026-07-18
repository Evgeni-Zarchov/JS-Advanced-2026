function circleArea(arg) {
    let typeOfInput = typeof arg;
    let result = 0;

    if (typeOfInput == "number") {
        let radius = Number(arg);
        return result = (Math.PI * radius ** 2).toFixed(2);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`)
    }
}

console.log(circleArea(5));
circleArea("fefs");