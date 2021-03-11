function solve(array) {
    let heroes = [];
    array.forEach(line => {
        const tokens = line.split(" / ");
        const name = tokens[0];
        const level = Number(tokens[1]);
        const items = tokens[2].split(', ').sort((a, b) => a.localeCompare(b)).join(", ");

        heroes.push({ name, level, items })
    })
    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(heroe => {
        console.log(`Hero: ${heroe.name}\nlevel => ${heroe.level}\nitems => ${heroe.items}`);
    });
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);