function rotate(arr, rotations) {
  let counter = 1;

  while (counter <= rotations) {
    arr.unshift(arr.pop());
    counter++;
  }

  return arr.join(" ");
}

rotate(["1", "2", "3", "4"], 2);
rotate(["Banana", "Orange", "Coconut", "Apple"], 15);
