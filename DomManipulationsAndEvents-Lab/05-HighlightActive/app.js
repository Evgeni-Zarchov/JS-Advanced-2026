function focused() {
    const input = Array.from(document.querySelectorAll("input"));

    for (let el of input) {
        el.addEventListener("focus", onFocusIn);
        el.addEventListener("blur", onBlur);
    }

    function onFocusIn(event) {
        event.target.parentElement.classList.add("focused");
    }

    function onBlur(event) {
        event.target.parentElement.classList.remove("focused");
    }
}
