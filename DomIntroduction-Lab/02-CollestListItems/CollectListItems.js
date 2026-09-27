function extractText() {
    let elements = Array.from(document.getElementsByTagName("li"));

    let txt = elements.map((x) => x.textContent).join("\n");
    let result = document.getElementById("result");

    result.value = txt;
}
