function rectangle(width, height, color) {
    color = color.charAt(0).toUpperCase() + color.slice(1);
    let rect = {
        width: width,
        height: height,
        color: color,

        calcArea() {
            return this.width * this.height;
        },
    };

    return rect;
}

let output = rectangle(4, 5, "red");
console.log(output.color);
