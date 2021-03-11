function position(input) {
    let count = Number(input.shift());
    let evenmax = -1000000000.0;
    let evenmin = 1000000000.0;
    let evenSum = 0;
    let oddSum = 0;
    let oddmax = -1000000000.0;
    let oddmin = 1000000000.0;
    for (let numbers = 1; numbers <= count; numbers++) {
        let checking = Number(input.shift());
        if (numbers % 2 === 0) {
            evenSum += checking;
            if (evenmax < checking) {
                evenmax = checking;
            }
            if (evenmin > checking) {
                evenmin = checking;
            }
        }
        else {
            oddSum += checking;
            if (oddmax < checking) {
                oddmax = checking;
            }
            if (oddmin > checking) {
                oddmin = checking;
            }

        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddmin === 1000000000.0) { console.log("OddMin=No,"); }
    else { console.log(`OddMin=${oddmin.toFixed(2)},`); }
    if (oddmax === -1000000000.0) { console.log("OddMax=No,"); }
    else { console.log(`OddMax=${oddmax.toFixed(2)},`); }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (evenmin === 1000000000.0) { console.log("EvenMin=No,"); }
    else { console.log(`EvenMin=${evenmin.toFixed(2)},`); }
    if (evenmax === -1000000000.0) { console.log("EvenMax=No"); }
    else { console.log(`EvenMax=${evenmax.toFixed(2)}`); }

}
position([6, 2, 3, 5, 4, 2, 1])