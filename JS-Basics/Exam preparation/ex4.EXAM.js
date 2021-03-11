function solve(input) {
    let group = Number(input.shift());
    let musalaCount = 0;
    let monblanCount = 0;
    let kilimadjaroCount = 0;
    let kCount = 0;
    let everestCount = 0;
    let count = 0;
    for (let num = 0; num < group; num++) {
        let checking = Number(input.shift());

        if (checking <= 5) { musalaCount+=checking;}
        else if (checking >= 6 && checking <= 12) { monblanCount+=checking;}
        else if (checking >= 13 && checking <= 25) { kilimadjaroCount+=checking; }
        else if (checking >= 26 && checking <= 40) { kCount+=checking;}
        else if (checking >= 41) { everestCount+=checking;}
        
    }
    count = musalaCount+monblanCount+kilimadjaroCount+kCount+everestCount;
    let p1 = (musalaCount / count) * 100;
    let p2 = (monblanCount / count) * 100;
    let p3 = (kilimadjaroCount / count) * 100;
    let p4 = (kCount / count) * 100;
    let p5 = (everestCount / count) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
solve([10,
    10,
    5,
    1,
    100,
    12,
    26,
    17,
    37,
    40,
    78])