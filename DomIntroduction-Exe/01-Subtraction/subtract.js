function subtract() {
    const firstNumRef = document.getElementById("firstNumber");
    const secondNumRef = document.getElementById("secondNumber");
    const resultRef = document.getElementById("result");

    let firstNum = Number(firstNumRef.value);
    let secondNum = Number(secondNumRef.value);

    resultRef.textContent = firstNum - secondNum;
}
