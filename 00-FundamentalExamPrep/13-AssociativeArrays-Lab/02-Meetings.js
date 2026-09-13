function printMeeting(arrOfStr) {
    let meetingBook = {};

    for (let el of arrOfStr) {
        let [weekday, name] = el.split(" ");

        if (meetingBook.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetingBook[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    let entries = Object.entries(meetingBook);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

printMeeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
