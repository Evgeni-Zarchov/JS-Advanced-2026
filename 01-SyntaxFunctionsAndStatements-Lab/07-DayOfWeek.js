function dayOfWeek(input) {
    let dayOfWeekObj = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
    };

    if (dayOfWeekObj[input]) {
        return dayOfWeekObj[input];
    } else {
        return "error";
    }

}

console.log(dayOfWeek("Monday"));