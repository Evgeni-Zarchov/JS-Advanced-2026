function colorize() {
    let elements = Array.from(document.querySelectorAll("table tr"));

    for (let i = 1; i < elements.length; i++) {
        let el = elements[i];

        if (i % 2 !== 0) {
            el.style.backgroundColor = "Teal";
        }
    }
}
