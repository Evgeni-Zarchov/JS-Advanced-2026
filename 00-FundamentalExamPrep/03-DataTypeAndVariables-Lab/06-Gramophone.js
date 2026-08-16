function gramophone(nameOfTheBand, album, song) {
    let result = (album.length * nameOfTheBand.length * song.length) / 2;

    console.log(`The plate was rotated ${Math.ceil(result / 2.5)} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
