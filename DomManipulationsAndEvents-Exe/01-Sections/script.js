function create(words) {
    let contentRef = document.getElementById("content");
    for (let el of words) {
        let div = document.createElement("div");
        let para = document.createElement("p");

        para.textContent = el;
        para.style.display = "none";

        div.appendChild(para);
        contentRef.appendChild(div);

        div.addEventListener("click", onClick);
    }

    function onClick(event) {
        let target = event.currentTarget;
        let stateOfPara = target.children[0];

        if (stateOfPara.style.display === "none") {
            stateOfPara.style.display = "block";
        } else {
            stateOfPara.style.display = "none";
        }
    }
}
