function crew(personInfo) {
    if (!personInfo.dizziness) {
        return personInfo;
    }

    let waterConsumption = 0.1 * personInfo.weight * personInfo.experience;

    personInfo.levelOfHydrated += waterConsumption;
    personInfo.dizziness = false;
    return personInfo;
}

console.log(
    crew({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true,
    }),
);

console.log(
    crew({
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true,
    }),
);

console.log(
    crew({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }),
);
