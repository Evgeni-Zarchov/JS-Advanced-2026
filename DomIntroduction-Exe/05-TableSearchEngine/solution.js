function solve() {
    document.querySelector("#searchBtn").addEventListener("click", onClick);

    const inputRef = document.getElementById("searchField");
    const elementsRef = document.querySelectorAll("tbody tr");

    function onClick() {
        for (let i = 0; i < elementsRef.length; i++) {
            let colsRef = elementsRef[i].querySelectorAll("td");

            for (let cols = 0; cols < colsRef.length; cols++) {
                let elements = colsRef[cols].textContent;

                if (elements.includes(inputRef.value)) {
                    elementsRef[i].classList.add("select");
                    break;
                } else {
                    elementsRef[i].classList.remove("select");
                }
            }
        }

        inputRef.value = "";
    }
}
