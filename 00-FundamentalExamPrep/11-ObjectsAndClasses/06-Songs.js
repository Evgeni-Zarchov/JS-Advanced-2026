function printSongs(arrInfo) {
    let n = Number(arrInfo.shift());
    let typeOfSong = arrInfo.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    for (let i = 0; i < n; i++) {
        let [type, name, time] = arrInfo[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeOfSong === "all") {
        songs.forEach((x) => console.log(x.name));
    } else {
        let filtered = songs.filter((x) => x.typeList === typeOfSong);
        filtered.forEach((x) => console.log(x.name));
    }
}

printSongs([4,

'favourite_DownTown_3:14',

'listenLater_Andalouse_3:24',

'favourite_In To The Night_3:58',

'favourite_Live It Up_3:48',

'listenLater']);
