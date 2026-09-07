function printMovie(arr) {
    let movieInfo = [];

    for (let info of arr) {
        let movieObj = {};

        if (info.includes("addMovie")) {
            let name = info.split("addMovie ")[1];
            movieObj = {
                name: name,
            };
            movieInfo.push(movieObj);
        } else if (info.includes("directedBy")) {
            let [movieName, director] = info.split(" directedBy ");

            let searchedMovie = movieInfo.find((x) => x.name === movieName);

            if (searchedMovie) {
                searchedMovie.director = director;
            }
        } else if (info.includes("onDate")) {
            let [movie, date] = info.split(" onDate ");
            let isFound = movieInfo.find((x) => x.name === movie);

            if (isFound) {
                isFound.date = date;
            }
        }
    }

    for (let el of movieInfo) {
        if (el.date && el.director) {
            console.log(JSON.stringify(el));
        }
    }
}

printMovie([
    "addMovie Fast and Furious",

    "addMovie Godfather",

    "Inception directedBy Christopher Nolan",

    "Godfather directedBy Francis Ford Coppola",

    "Godfather onDate 29.07.2018",

    "Fast and Furious onDate 30.07.2018",

    "Batman onDate 01.08.2018",

    "Fast and Furious directedBy Rob Cohen",
]);
