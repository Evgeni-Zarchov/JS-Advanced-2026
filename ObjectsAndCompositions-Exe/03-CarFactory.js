function car(carInfo) {
    let carObj = {};

    carObj.model = carInfo.model;

    if (carInfo.power <= 90) {
        carObj.engine = { power: 90, volume: 1800 };
    } else if (carInfo.power <= 120) {
        carObj.engine = { power: 120, volume: 2400 };
    } else if (carInfo.power <= 200) {
        carObj.engine = { power: 200, volume: 3500 };
    }

    carObj.carriage = { type: carInfo.carriage, color: carInfo.color };

    let wheels =
        carInfo.wheelsize % 2 === 0 ? carInfo.wheelsize - 1 : carInfo.wheelsize;

    carObj.wheels = [wheels, wheels, wheels, wheels];

    return carObj;
}

console.log(
    car({
        model: "VW Golf II",
        power: 90,
        color: "blue",
        carriage: "hatchback",
        wheelsize: 14,
    }),
);
