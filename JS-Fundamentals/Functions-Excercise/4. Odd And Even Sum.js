function singleNumber(number) {
    let resultOfEvenSum = evenSum(number);
    let resultOfOddSum = oddSum(number);
    console.log(`Odd sum = ${resultOfOddSum}, Even sum = ${resultOfEvenSum}`);

    function evenSum(even) {
        let arrayOfDigits = [];
        let sum = 0;
        while (even > 0) {
            let lastDigit = even % 10;
            if (lastDigit % 2 == 0) {
                arrayOfDigits.push(lastDigit);
            }
            even = parseInt((even / 10));
        }
        for (let numbers of arrayOfDigits) {
            sum += numbers;
        }
        return sum;
    }
    function oddSum(odd) {
        let arrayOfDigits = [];
        let sum = 0;
        while (odd > 0) {
            let lastDigit = odd % 10;

            if (lastDigit % 2 !== 0) {
                arrayOfDigits.push(lastDigit);
            }
            odd = parseInt((odd / 10));
        }
        for (let numbers of arrayOfDigits) {
            sum += numbers;
        }
        return sum;
    }
}
singleNumber(1000435);