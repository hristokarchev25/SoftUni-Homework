const calc = require('./cal');
let fnum = 1;
let snum = 2;
let result1 = calc.sum(fnum, snum);
if (result1 === 3) {
    console.log(`test1 = successful`);
} else {
    console.log(`test1-false`);
}

let result2 = calc.sum(fnum, snum);
if (result2 === -1) {
    console.log(`test2 = successful`);
} else {
    console.log(`test2-false`);
}