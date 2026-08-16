function readingBooks(pages, pagesPerHours, hours) {
    let currentTime = pages / pagesPerHours;
    let neededTime = currentTime / hours;

    console.log(neededTime);
}
readingBooks(212, 20, 2);
