function solve(input) {
    let shirochina = Number(input.shift());
    let duljina = Number(input.shift());
    let visochina = Number(input.shift());
    let visochinaAvst = Number(input.shift());

    let vRocket = shirochina * duljina * visochina;
    let room = (visochinaAvst + 0.40) * 2 * 2;
    let space = Math.floor(vRocket / room);

    if (space >= 3 && space <= 10) { console.log(`The spacecraft holds ${space} astronauts.`); }
    else if (space < 3) { console.log(`The spacecraft is too small.`); }
    else {
        console.log(`The spacecraft is too big.`);
    }
}
solve([3.5,
    4,
    5,
    1.70])