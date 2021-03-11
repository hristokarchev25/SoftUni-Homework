function ico(input) {
    let count = Number(input.shift());
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    for (let num = 0; num < count; num++) {
        let checking = Number(input.shift())

        if (checking % 2 === 0) { count2++; }
        if (checking % 3 === 0) { count3++; }
        if (checking % 4 === 0) { count4++; }
    }

    let p1 = (count2 / count) * 100;
    let p2 = (count3 / count) * 100;
    let p3 = (count4 / count) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);

}
ico([3,3,6,9])