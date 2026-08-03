function daysInMonth(month, year) {
    return date = new Date(year, month, 0).getDate();
}

console.log(daysInMonth(1, 2012));