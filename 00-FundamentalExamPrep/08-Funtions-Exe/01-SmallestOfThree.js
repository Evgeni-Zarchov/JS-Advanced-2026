function minNumber(first, second, third) {
    if (first <= second && first <= third) {
        return first;
    } else if (second <= first && second <= third) {
        return second;
    } else if (third <= second && third <= first) {
        return third;
    }
}

console.log(minNumber(2, 5, 3));
