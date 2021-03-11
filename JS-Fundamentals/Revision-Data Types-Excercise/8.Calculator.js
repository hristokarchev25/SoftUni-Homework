function calculator(numOne, sign, numTwo) {
    let result = 0;
    if (sign == `+`) {
        result = numOne + numTwo;
    } else if (sign == `-`) {
        result = Math.abs(numOne - numTwo);
    } else if (sign == `*`) {
        result = numOne * numTwo;
    } else if (sign == '/') {
        result = numOne / numTwo;
    }
    console.log(result.toFixed(2));
}
calculator(25.5, `-`, 3);