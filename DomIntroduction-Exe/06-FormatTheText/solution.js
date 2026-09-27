function solve() {
    const inputText = document.getElementById("input").value;
    const output = document.getElementById("output");
    output.innerHTML = "";

    let text = inputText.split(".").map((x) => x.trim()).filter((x) => !!x);
    for (let i = 0; i < text.length; i += 3) {
        let result = [];

        for (let x = 0; x < 3; x++) {
            if (!text[i + x]) {
                break;
            }
            result.push(text[i + x]);
        }
        let buffRes = result.join(".") + ".";
        output.innerHTML += `<p>${buffRes}</p>`;
    }
}
