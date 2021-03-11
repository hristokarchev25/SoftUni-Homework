function solve(number) {
    let sum = 0;
    let lastDigit = number%10;
    let count = 0;
    while(number) {
        let digit = number%10;
        sum += number%10;
        number = Math.floor(number/10);
        if (digit !== lastDigit) {
            count++;
        }
    }
    console.log(count === 0 ? true : false);
    console.log(sum);
}
solve(2222222);
solve(1234);