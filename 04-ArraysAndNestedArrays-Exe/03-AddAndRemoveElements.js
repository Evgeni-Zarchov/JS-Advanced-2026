function addOrRemove(arr) {
  let result = [];
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    let action = arr[i];

    if (action === "add") {
      result.push(counter++);
    } else {
      result.pop(counter++);
    }
  }

  if (result.length === 0) {
    console.log("Empty");
    return;
  } else {
    console.log(result.join("\n"));
  }
}

addOrRemove([]);
addOrRemove(["add", "add", "remove", "add", "add"]);
