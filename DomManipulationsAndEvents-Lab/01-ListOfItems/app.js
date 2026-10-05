function addItem() {
    let elementsRef = document.getElementById("items");
    let textRef = document.getElementById("newItemText");

    let li = document.createElement("li");
    li.textContent = textRef.value;

    if (!textRef.value) {
        return;
    }
    elementsRef.append(li);
}
