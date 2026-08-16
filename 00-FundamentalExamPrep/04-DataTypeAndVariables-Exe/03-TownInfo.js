function townInfo(town, population, area) {
    let townLength = town.length >= 3;
    let townArea = area >= 0;
    let townPopulation = population >= 0;

    if (!townLength) {
        console.log("Town name must be at least 3 characters!");
    }

    if (!townPopulation) {
        console.log("Population must be a positive number!");
    }

    if (!townArea) {
        console.log("Area must be a positive number!");
    }

    if (townLength && townArea && townPopulation) {
        console.log(
            `Town ${town} has population of ${population} and area ${area} square km.`,
        );
    }
}

townInfo("Sofia", 1286383, 492);
