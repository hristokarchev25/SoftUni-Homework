function solve(arrayOfNumbers) {
    let evenSum = 0;
    let oddSum = 0;
    for (let number of arrayOfNumbers) {
        if (number % 2 == 0) {
            evenSum += Number(number);
        } else {
            oddSum += Number(number);
        }
    }
    console.log(evenSum - oddSum);
}
solve(['3', '5', '7', '9']);