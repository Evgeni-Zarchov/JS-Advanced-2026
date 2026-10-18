function solve(area, volume, input) {
    const jsonData = JSON.parse(input);

    const result = [];

    for (let el of jsonData) {
        let obj = {
            area: area.call(el),
            volume: volume.call(el),
        };

        result.push(obj);
    }

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}
