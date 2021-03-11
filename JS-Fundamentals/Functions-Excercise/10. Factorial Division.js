function fak(firstNum, secondNum) {
    let firstNumToDivide = facturielCalculator(firstNum);
    let secondNumToDivide = facturielCalculator(secondNum);
    let result = firstNumToDivide / secondNumToDivide;
    console.log(result.toFixed(2));

    function facturielCalculator(number) {
        let i = 1;
        let s = 1;
        do {
            s = s * i;
            i++;
        }
        while (i <= number);
        return s;
    }
}
fak(6, 2);