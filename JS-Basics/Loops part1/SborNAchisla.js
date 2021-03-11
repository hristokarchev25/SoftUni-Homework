function ico(input) {
    let numm = Number(input.shift());
    let sum = 0;
    for (let count = 0; count < numm; count++) {
        let cureentNUM = Number(input.shift());
        sum += cureentNUM;
    }
    console.log(sum);

}
ico(["2", "10", "20"])