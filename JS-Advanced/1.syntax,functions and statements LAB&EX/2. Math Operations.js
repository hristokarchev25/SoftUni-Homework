function solve(numOne,numTwo,operation) {
    let result = 0;
    switch (operation) {
        case "+":
            result = numOne+numTwo;
            break;
        case "-":
            result = numOne-numTwo;
            break;
        case "*":
            result = numOne*numTwo;
            break;
        case '/':
            result = numOne/numTwo;
            break;
        case '**':
            result = numOne**numTwo;
            break;
        case "%":
            result = numOne%numTwo;
            break;
    }
    console.log(result);
}
solve(5,6,"+");