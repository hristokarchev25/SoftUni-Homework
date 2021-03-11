function histo(input) {
    let count = Number(input.shift());
    let p1count = 0;
    let p2count = 0;
    let p3count = 0;
    let p4count = 0;
    let p5count = 0;

    for (let num = 0; num < count; num++) {
        let checking = Number(input.shift());

        if (checking < 200) { p1count++; }
        else if (checking >= 200 && checking <= 399) { p2count++; }
        else if (checking >= 400 && checking <= 599) { p3count++; }
        else if (checking >= 600 && checking <= 799) { p4count++; }
        else if (checking >= 800) { p5count++; }
    }
    let p1 = (p1count / count) * 100;
    let p2 = (p2count / count) * 100;
    let p3 = (p3count / count) * 100;
    let p4 = (p4count / count) * 100;
    let p5 = (p5count / count) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
histo([3, 1, 2, 999])