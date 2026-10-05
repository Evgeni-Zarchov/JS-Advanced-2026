function deleteByEmail() {
    let inputEmail = document.querySelector('input[name="email"]');
    let outputRef = document.getElementById("result");
    let pattern = inputEmail.value;
    let isFound = false;

    let rows = Array.from(document.querySelector("tbody").children);

    for (let row of rows) {
        if (row.lastElementChild.textContent == pattern) {
            row.remove();
            isFound = true;
        }
    }

    if (isFound) {
        outputRef.textContent = "Deleted.";
        inputEmail.value = "";
    } else {
        outputRef.textContent = "Not found.";
    }
}
