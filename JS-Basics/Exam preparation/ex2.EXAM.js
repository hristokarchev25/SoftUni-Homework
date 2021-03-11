function solve(input) {
    let record = Number(input.shift());
    let razstoqnieMetri = Number(input.shift());
    let timeInSecs = Number(input.shift());

    let must = razstoqnieMetri * timeInSecs;
    let dobavqne = Math.floor(razstoqnieMetri / 50) * 30;
    let sum = must + dobavqne;
    let diff = Math.abs(sum - record);

    if (sum > record) {
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }
    else {
        console.log(`Yes! The new record is ${sum.toFixed(2)} seconds.`);

    }
}
solve([10164,
    1400,
    25])