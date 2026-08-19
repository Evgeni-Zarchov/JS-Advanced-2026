function arrRotation(arr, rotations) {
    while (rotations !== 0) {
        arr.push(arr.shift());
        rotations--;
    }

    return arr.join(" ");
}

console.log(arrRotation([51, 47, 32, 61, 21], 2));
