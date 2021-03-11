function solve(num, toRound) {
    let toBeFixed = "";
    if (toRound >= 0 && toRound <= 15) {
        toBeFixed = num.toFixed(toRound);
    } else {
       toBeFixed = num.toFixed(15);
    } console.log(parseFloat(toBeFixed));

}
solve(3.5665,5);