function solve(arrayOfNumbers) {
    let sum = 0;
    for (let number of arrayOfNumbers) {
        if (number % 2 == 0) {
            sum += Number(number);
        }
    }
    console.log(sum);
}
solve(['1','2','3','4','5','6']);