function login(arrOfData) {
  // The password is first element of arrOfData and have to be reversed.
  let input = arrOfData.shift();
  let password = "";
  for (let i = input.length - 1; i >= 0; i--) {
    let word = input[i];
    password += word;
  }

  // if 4 times password is incorect block.
  let attempts = 1;
  for (let el of arrOfData) {
    if (password !== el) {
      if (attempts === 4) {
        console.log(`User ${input} blocked!`);
        return;
      } else {
        attempts++;
        console.log("Incorrect password. Try again.");
        continue;
      }
    } else {
      console.log(`User ${input} logged in.`);
      return;
    }
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "notsunny"]);
