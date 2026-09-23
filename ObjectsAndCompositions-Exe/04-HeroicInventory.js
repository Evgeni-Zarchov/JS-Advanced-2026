function heroicInfoAsJson(data) {
    let heroicInfo = [];
    for (let el of data) {
        if (!el.trim()) {
            continue;
        }
        let [name, level, items] = el.split(" / ");
        items = items ? items.split(", ") : [];
        level = Number(level);
        heroicInfo.push({ name, level, items });
    }

    console.log(JSON.stringify(heroicInfo));
}

heroicInfoAsJson([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
