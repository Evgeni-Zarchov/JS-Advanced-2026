function attachEventsListeners() {
    let btns = document.querySelectorAll('input[type="button"]');

    btns.forEach((x) => x.addEventListener("click", onClick));

    function onClick(event) {
        let target = event.currentTarget.parentElement;
        let inputInfo = target.children[1];

        let nameId = inputInfo.id;
        let value = Number(inputInfo.value);

        switch (nameId) {
            case "days":
                values(value);
                break;
            case "hours":
                values(value / 24);
                break;
            case "minutes":
                values(value / 24 / 60);
                break;
            case "seconds":
                values(value / 24 / 60 / 60);
                break;
        }
    }

    function values(value) {
        let inputValueRef = document.querySelectorAll('input[type="text"]');

        inputValueRef[0].value = value;
        inputValueRef[1].value = value * 24;
        inputValueRef[2].value = value * 24 * 60;
        inputValueRef[3].value = value * 24 * 60 * 60;
    }
}
