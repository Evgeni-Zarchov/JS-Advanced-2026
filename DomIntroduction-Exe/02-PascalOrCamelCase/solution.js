function solve() {
    let inputText = document.getElementById("text").value;
    let namingConvention = document.getElementById("naming-convention").value;
    let result = document.getElementById("result");

    if (!inputText.trim()) {
        return (result.textContent = "Error!");
    }

    let text = inputText
        .toLowerCase()
        .split(" ")
        .filter((x) => x !== "");

    let resultStr = "";
    if (namingConvention.toLowerCase() === "camel case") {
        resultStr = text
            .map((x, i) => {
                if (i === 0) {
                    return x;
                }

                return x[0].toUpperCase() + x.slice(1);
            })
            .join("");
    } else if (namingConvention.toLowerCase() === "pascal case") {
        resultStr = text
            .map((x) => {
                return x[0].toUpperCase() + x.slice(1);
            })
            .join("");
    } else {
        resultStr = "Error!";
    }

    result.textContent = resultStr;
}
