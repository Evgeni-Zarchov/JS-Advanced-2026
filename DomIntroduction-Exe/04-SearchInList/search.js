function search() {
    const searchedText = document
        .getElementById("searchText")
        .value.toLowerCase();

    const elementsArray = document.querySelectorAll("ul li");
    const result = document.getElementById("result");
    let counter = 0;

    for (let el of elementsArray) {
        let currentSearch = el.textContent.toLowerCase();

        if (currentSearch.includes(searchedText)) {
            counter++;
            el.style.fontWeight = "bold";
            el.style.textDecoration = "underline";
        } else {
            el.style.fontWeight = "";
            el.style.textDecoration = "";
        }
    }

    result.textContent = `${counter} matches found`;
}
