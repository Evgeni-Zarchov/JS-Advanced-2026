function dayOfWeek(input) {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    if (input < 1 || input > days.length) {
        return console.log("Invalid day!");
    } else {
        console.log(days[input - 1]);
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
