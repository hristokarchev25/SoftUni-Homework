function solve (numOne, numTwo, numThree)  {
    let sum = numOne*numTwo*numThree;
    let output = '';
    if (sum >= 0) {
        output = 'Positive';
    } else {
        output = 'Negative';
    }
    return output;
}
console.log(solve(-6,-12,14));