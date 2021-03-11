function maths(firstNum, secondNum, operator) {
    let result = 0;
    switch (operator) {
        case 'multiply':
            result = firstNum * secondNum;
            break;
        case 'divide':
            result = firstNum / secondNum;
            break;
        case 'add':
            result = firstNum + secondNum;
            break;
        case 'subtract':
            result = firstNum - secondNum;
            break;
    }
    return result;
}
let output = maths (5,5,'multiply');
console.log(output);