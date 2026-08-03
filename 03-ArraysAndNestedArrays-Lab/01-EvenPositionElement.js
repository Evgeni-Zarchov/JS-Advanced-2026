function evenPosition(arr) {
    return arr.filter((x, i) => i % 2 == 0).join(" ");
}

console.log(evenPosition(['20', '30', '40', '50', '60']));