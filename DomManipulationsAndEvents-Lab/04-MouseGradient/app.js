function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    let result = document.getElementById("result");

    gradient.addEventListener("mousemove", onMouseMove);
    gradient.addEventListener("mouseout", mouseOut);

    function onMouseMove(event) {
        let width = event.currentTarget.clientWidth;
        if (width == 0) {
            return;
        }

        let percent = Math.floor((event.offsetX / width) * 100);
        result.textContent = percent + "%";
    }

    function mouseOut() {
        result.textContent = "";
    }
}
