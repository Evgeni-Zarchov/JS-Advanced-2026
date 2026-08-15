function sumOfOddNumbers(firstNum) {
  let num = firstNum * 2;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
      console.log(i);
    }
  }

  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
