function solve(base, increments) {
    let totalStone = 0;
    let totalMarbel = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let row = 0;
    let currentBase = base;

    while (currentBase > 2) {
        let marbel = currentBase * 4 - 4;
        let stone = currentBase * currentBase - marbel;
        totalStone += stone;

        row++;
        if (row % 5 === 0) {
            totalLapis += marbel;
        } else {
            totalMarbel += marbel;
        }
        currentBase-=2;
    }
    row++;
    let gold = currentBase*currentBase;

    stone = Math.ceil(totalStone*increments);
    marble = Math.ceil(totalMarbel*increments);
    lapis = Math.ceil(totalLapis*increments);
    totalGold = Math.ceil(gold*increments);
    totalHeight = Math.ceil(row*increments);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}
solve(11,0.75);