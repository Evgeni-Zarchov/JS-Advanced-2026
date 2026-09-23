function printDays(month, year) {
    let myYear = new Date(year, month, 0);
    let myDays = myYear.getDate();

    console.log(myDays);
}

printDays(1, 2012);
