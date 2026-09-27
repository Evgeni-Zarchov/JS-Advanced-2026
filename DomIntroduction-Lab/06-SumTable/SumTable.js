function sumTable() {
    const input = Array.from(document.querySelectorAll("tbody tr"));
    const output = document.getElementById("sum");
    let sum = 0;

    for (let i = 1; i < input.length - 1; i++) {
        let elements = input[i].lastElementChild;

        sum += Number(elements.textContent);
    }

    output.textContent = sum.toFixed(2);
}
