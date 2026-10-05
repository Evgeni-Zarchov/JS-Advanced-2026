function addItem() {
    let elementsRef = document.getElementById("items");
    let textRef = document.getElementById("newItemText");

    let li = document.createElement("li");
    li.textContent = textRef.value;

    if (!textRef.value) {
        return;
    }
    elementsRef.append(li);

    let button = document.createElement("a");
    button.href = "#";
    button.textContent = "[Delete]";
    button.addEventListener("click", onClick);
    li.appendChild(button);

    function onClick(event) {
        let row = event.target.parentElement;
        row.remove();
    }
}
