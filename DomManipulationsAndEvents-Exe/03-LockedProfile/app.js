function lockedProfile() {
    document
        .querySelectorAll("button")
        .forEach((btns) => btns.addEventListener("click", onClick));

    function onClick(event) {
        const target = event.currentTarget;
        const profile = target.parentElement;

        const radioBtns = Array.from(
            profile.querySelectorAll('input[type="radio"]'),
        ).filter((element) => element.checked)[0];

        if (radioBtns.value == "lock") {
            return;
        }

        let showHideEls = profile.querySelector("div");

        if (target.textContent === "Show more") {
            showHideEls.style.display = "block";
            target.textContent = "Hide it";
        } else {
            showHideEls.style.display = "none";
            target.textContent = "Show more";
        }
    }
}
